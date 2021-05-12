import Header from '../src/components/Header';
import { makeStyles, Typography } from "@material-ui/core";
import Main from '../src/components/Main';
import Tokenomics from '../src/components/Tokenomics';
import Footer from '../src/components/Footer';
import Product from '../src/components/ProductHighlight';
import MetadataItem from '../src/components/MetadataItem';
import { getAllProductsFromCMS } from '../src/api/graphcms';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main
  },
  productsContainer: {
    padding: '0 5% 10% 10%',

    [theme.breakpoints.down('md')]: {
      padding: '0 5% 10% 5%',
    },

    [theme.breakpoints.down('xs')]: {
      padding: '0 5% 10% 5%',
    },
  },
  productsTitle: {
    fontWeight: 'bold',
    marginBottom: '3%',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginBottom: '5%'
    },
  },
  products: {
    display: 'flex',

    [theme.breakpoints.down('sm')]: {
      flexFlow: 'wrap',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  metadataContainer: {
    padding: '0 5% 0% 10%',
    margin: '0 0 5% 0',
    
    display: 'flex',
    backgroundColor: '#242424',
    gap: '10%',
    flexBasis: '100%',

    [theme.breakpoints.down('md')]: {
      padding: '0 5% 0% 5%',
      flexFlow: 'wrap',
      gap: '5%',
    },

    [theme.breakpoints.down('sm')]: {
      padding: '2% 5% 0 5%',
      margin: '5% 0 0 0',
      display: 'block',
      textAlign: 'left'
    },
  }
}));


export default function Home({ products }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <Main />
      <div className={classes.metadataContainer}>
        <MetadataItem graphic={"/images/bar-graph.png"} name={"Current Price"} value={"0.000000000125 USD"}/>
        <MetadataItem graphic={"/images/house.png"} name={"Market Cap"} value={"10,000,000"}/>
        <MetadataItem graphic={"/images/currency.png"} name={"Total Supply"} value={"500,000,000,000"}/>
        <MetadataItem graphic={"/images/team.png"} name={"Holders"} value={"10,000"}/>
      </div>

      <section id="tokenomics">
        <Tokenomics />
      </section>
      <div className={classes.productsContainer}>
        <Typography variant="h4" className={classes.productsTitle}>Products</Typography>
        <div className={classes.products}>
            {
              products.map(product => (
                <Product {...product}/>
              ))
            }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps({ params, preview = false }) {
  const products = await getAllProductsFromCMS();

  return {
    props: {
      products: products
    },
  }
}