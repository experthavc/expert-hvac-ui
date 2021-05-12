import { Button, makeStyles, Theme, Typography, Breadcrumbs } from "@material-ui/core";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import Post from "../../src/models/Post";
import Link from 'next/link';
import { getProductWithSlug } from "../../src/api/graphcms";
import ProductModel from "../../src/models/Product";
import ProductComponent from "../../src/components/Product";


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: '70vh',
    margin: '3% 5% 0 10%',

    display: 'flex',
    flexFlow: 'wrap',

    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: '2% 5% 0 5%',
    },
  },
  breadcrumbs: {
    padding: '150px 10% 3% 10%',

    [theme.breakpoints.down('md')]: {
      padding: '150px 5% 3% 5%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '100px 2% 3% 2%'
    }
  },
  emptyMessage: {
    width: '100%',
    textAlign: 'center'
  }
}));

const Product = ( { product } : { product: ProductModel } ) => {
  const classes = useStyles();
  console.log(product);
  return (
    <div>
      <Header />
      <ProductComponent product={product}/>
      <Footer />
    </div>
  )
};

export async function getServerSideProps({ params, preview = false }) {
  const product = await getProductWithSlug(params.product)

  return {
    props: {
      product: product
    },
  }
}

export default Product;