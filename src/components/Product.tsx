import { Avatar, Breadcrumbs, makeStyles, Theme, Typography, Chip } from '@material-ui/core';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProductSchema from '../models/Product';
import SocialMediaShare from './SocialMediaShare';
import clsx from 'clsx';
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
    width: '50%',
    height: '640px',
    objectFit: 'contain',
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
    padding: '0 10% 2% 10%',

    [theme.breakpoints.down('md')]: {
      padding: '0 5% 2% 5%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 2% 2% 2%'
    }
  },
  title: {
    margin: '2% 0 2% 0',
    fontWeight: 'bold',
    color: theme.palette.text.secondary
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

const Product = ({ product } : { product: ProductSchema }) => {
  const classes = useStyles();
  let content = product.content.html.replace(/width="\d{1,5}"/g, `width="100%"`);
  content = content.replace(/height="\d{1,5}"/g, `height="100%"`);

  const url = `https://fermeon.net/products/${product.slug}`;

  return (
    <div className={classes.container}>
      <Head>
        <title>
          {`${product.title} | Fermeon`}
        </title>
        <meta property="og:url" content={`${url}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`${product.title}`}
        />
        <meta name="twitter:card" content={`summary`}/>
        <meta
          property="og:description"
          content={`${product.content.text ? product.content.text.substring(0, 100) : 'Check out the article'}`}
        />
        <meta property="og:image" content={`${product.productImage.url}`} />
      </Head>
      <div className={classes.contentContainer}>
        <Image 
          src={product.productImage.url}
          height={500}
          width={640}
          objectFit='contain'
        />
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: `${content}`}}></div>
      </div>
    </div>
  );
};

export default Product;