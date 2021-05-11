import { Avatar, makeStyles, Theme, Typography, GridListTile, GridListTileBar, IconButton, GridList } from "@material-ui/core";
import { Info } from '@material-ui/icons';
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: '0 10% 10% 10%',

    [theme.breakpoints.down('md')]: {
      padding: '0 5% 10% 5%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0 2% 10% 2%'
    }
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  tile: {
    '&:hover': {
      cursor: 'pointer'
    },
  }
}));

type categories = { name: string, slug: string, featured: boolean, image: string }

const Categories = ({categories} : { categories: categories[] }) => {
  const classes = useStyles();
  const router = useRouter()

  const onTileClick = (event: any, category: string, slug: string) => {
    event.preventDefault()
    router.push(`/articles/${slug}`)
  }

  return (
    <div className={classes.container}>
      <GridList spacing={12} cellHeight={400} cols={2}>
      {
        categories.map(category => (
          <GridListTile
            key={category.name}
            cols={category.featured === true ? 2 : 1}
            className={classes.tile}
            onClick={event => onTileClick(event, category.name, category.slug)}
          >
            <img src={category.image} alt={category.name} />

            <GridListTileBar
              title={category.name}
              actionIcon={
                <IconButton aria-label={`info about ${category.name}`} className={classes.icon}>
                  <Info />
                </IconButton>
              }
            />
          </GridListTile>
        ))
      }
      </GridList>
    </div>
  )
}

export default Categories;