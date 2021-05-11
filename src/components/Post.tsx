import { Avatar, Breadcrumbs, makeStyles, Theme, Typography, Chip } from '@material-ui/core';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Author from '../models/Author';
import PostSchema from '../models/Post';
import { calculateTimeToRead } from '../utility/util';
import Article from './Product';
import SocialMediaShare from './SocialMediaShare';
import clsx from 'clsx';
import { findRelatedArticles } from '../../pages/api/graphcms';
import Head from "next/head";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    padding: '150px 0 0 0',
    [theme.breakpoints.down('md')]: {
      padding: '100px 0 0 0',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '100px 0 0 0',
    }
  },
  breadcrumbs: {

  },
  metadata: {
    margin: '0 0 2% 0',
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    margin: '0 2% 0 0'
  },
  cover: {
    position: 'relative',
    width: '100%',
    height: '640px',
    objectFit: 'cover',
    [theme.breakpoints.down('xs')]: {
      height: '350px',
    },
  },
  content: {
    width: '100%',
    fontSize: '16px',
    lineHeight: '35px'
  },
  contentContainer: {
    width: '100%',
    padding: '0 10% 2% 5%',

    [theme.breakpoints.down('md')]: {
      padding: '0 5% 2% 5%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 2% 2% 2%'
    }
  },
  title: {
    margin: '2% 0 2% 0'
  },
  tags: {
    display: 'flex',
    flexFlow: 'wrap'
  },
  tag: {
    margin: '0 2% 2% 0'
  },
  borderTop: {
    borderTop: '1px solid grey',
    margin: '0 0 2% 0'
  },
  borderDown: {
    borderBottom: '1px solid grey',
  },
  articles: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      flexFlow: 'wrap',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  articlesTitle: {
    fontWeight: 'bold',
    marginBottom: '3%',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginBottom: '5%'
    },
  },
}));

const Metadata = ({ author, date, timeToRead }: { author: Author, date: string, timeToRead: string }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.metadata}>
      <Avatar className={classes.avatar} src={author.picture.url} />
      <div>
        <Typography variant="body1">{`${author.name}`}</Typography>
        <Typography variant="body1">{`${moment(date, 'YYYY-MM-DD').format("MMM Do, YYYY")} . ${timeToRead} read`}</Typography>
      </div>
    </div>
  )
};

const Nav = ({ category, slug }: { category: string, slug: string }) => {
  const classes = useStyles();

  return (
    <Breadcrumbs className={classes.breadcrumbs}>
      <Link href="/articles">Articles</Link>
      <Link href={`/articles/${slug}`}>{category}</Link>
      <Typography variant="body1">{slug}</Typography>
    </Breadcrumbs>

  );
};

const Tags = ({ Tags } : { Tags: string[]}) => {
  const classes = useStyles();

  return(
    <div className={classes.tags}>
      {
        Tags.map(tag => (
          <Chip className={classes.tag} label={tag}/>
        ))
      }
    </div>
  );
};

const RelatedArticles = ({post} : {post: PostSchema}) => {
  const classes = useStyles();

  const [relatedArticles, setRelatedArticles] = useState<PostSchema[] | []>([]);
  const [responseReceived, updateFlag] = useState<Boolean>(false);

  if(responseReceived === false) {
    findRelatedArticles(post).then(articles => {
      setRelatedArticles(articles);
      updateFlag(true);
    })
  }

  return (
    <div>
      {
        relatedArticles.length !== 0 ?
        <div>
          <Typography variant={"h4"} className={classes.articlesTitle}>Related Articles</Typography>
          <div className={classes.articles}>
            {
              relatedArticles.map(article => (
                <Article {...article}/>
              ))
            }
          </div>
        </div>
        :
        null
      }
    </div>
  )
}

const Post = ({ post } : { post: PostSchema }) => {
  const classes = useStyles();
  let content = post.content.html.replace(/width="\d{1,5}"/g, `width="100%"`);
  content = content.replace(/height="\d{1,5}"/g, `height="100%"`);

  const timeToRead = calculateTimeToRead(post.content.text ? post.content.text : "some placeholder text");
  const url = `https://mnbfitness.ca/articles/${post.category.slug}/${post.slug}`;

  return (
    <div className={classes.container}>
      <Head>
        <title>
          {`${post.title} | Mind & Body Fitness`}
        </title>
        <meta property="og:url" content={`${url}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${post.title}`}
        />
        <meta name="twitter:card" content={`summary`}/>
        <meta
          property="og:description"
          content={`${post.content.text ? post.content.text.substring(0, 100) : 'Check out the article'}`}
        />
        <meta property="og:image" content={`${post.coverImage.url}`} />
      </Head>
      <div className={classes.contentContainer}>
        <Nav category={post.category.name} slug={post.slug} />
        <Typography className={classes.title} variant='h3'>{post.title}</Typography>
        <Metadata author={post.author} date={post.date.toString()} timeToRead={timeToRead} />
      </div>
      
      <div className={classes.cover}>
        <Image 
          src={post.coverImage.url}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className={classes.contentContainer}>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: `${content}`}}></div>

        <Tags Tags={post.tags} />

        <div className={clsx(classes.borderTop, classes.borderDown)}>
          <SocialMediaShare title={post.title} url={url}/>
        </div>
        <RelatedArticles post={post}/>
      </div>
    </div>
  );
};

export default Post;