import Header from '../src/components/Header';
import { makeStyles, Typography } from "@material-ui/core";
import Main from '../src/components/Main';
import Article from '../src/components/Product';
import Newsletter from '../src/components/Newsletter';
import Tokenomics from '../src/components/Tokenomics';
import Footer from '../src/components/Footer';
import moment from 'moment';
import Product from '../src/components/Product';
import MetadataItem from '../src/components/MetadataItem';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main
  },
  productsContainer: {
    padding: '0 5% 10% 10%',
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


export default function Home({ posts }) {
  const classes = useStyles();
  const productData = [
    {
      releaseDate: moment().date(),
      status: "In Development",
      title: "Fermion Finance",
      coverImage: {
        url: '/images/coverimage.svg'
      },
      description: "A Platform to monitor various cryptocurrencies. Alerts can be setup accordingly.  Also, data analytic tools can be accessed to track different wallets, analyize block chain transactions etc."
    },
    {
      releaseDate: moment().date(),
      status: "In Planning",
      title: "Fund.me Protocol",
      coverImage: {
        url: '/images/coverimage.svg'
      },
      description: "Smart contract to support funding operations in a decentralized methods. Further details will be published close to release dates."
    },
    {
      releaseDate: moment().date(),
      status: "In Development",
      title: "Fermion FInance",
      coverImage: {
        url: '/images/coverimage.svg'
      },
      description: "A Platform to monitor various cryptocurrencies. Alerts can be setup accordingly.  Also, data analytic tools can be accessed to track different wallets, analyize block chain transactions etc."
    }
  ]

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

      <Tokenomics />
      <div className={classes.productsContainer}>
        <Typography variant="h4" className={classes.productsTitle}>Products</Typography>
        <div className={classes.products}>
            {
              productData.map(product => (
                <Product {...product}/>
              ))
            }
        </div>
      </div>
      <Footer />
    </div>
  )
}