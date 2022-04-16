import { makeStyles, Theme, Typography } from "@material-ui/core";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import { useState } from "react";
import { useRouter } from "next/router";
import ProductModel from "../src/models/Product";
import Product from "../src/components/ProductHighlight";
import { getAllProductsFromCMS } from "./api/graphcms";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: "left",
    padding: "0 10% 10% 10%",

    [theme.breakpoints.down("md")]: {
      padding: "0 5% 10% 5%",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 2% 10% 2%",
    },
  },
  tagline: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "bold",
    padding: "10% 0 3% 0",
  },
  description: {
    padding: "1% 0 0 0",
  },
  products: {
    display: "flex",
    padding: "2% 0 0 0",

    [theme.breakpoints.down("sm")]: {
      flexFlow: "wrap",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
}));

const Products = () => {
  const classes = useStyles();
  const [products, setProducts] = useState<ProductModel[] | []>([]);
  const router = useRouter();

  const onTileClick = (event: any, category: string, slug: string) => {
    event.preventDefault();
    router.push(`/products/${slug}`);
  };

  if (products.length === 0) {
    getAllProductsFromCMS().then((products) => setProducts(products));
  }

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Typography variant="h2" className={classes.tagline}>
          Services
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Tdot Roofers are specialized in following services
        </Typography>
        <div className={classes.products}>
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
