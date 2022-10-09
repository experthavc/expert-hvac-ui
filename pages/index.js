import Header from "../src/components/Header";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import Main from "../src/components/Main";
import Tokenomics from "../src/components/Tokenomics";
import Footer from "../src/components/Footer";
import Product from "../src/components/ProductHighlight";
import MetadataItem from "../src/components/MetadataItem";
import { getAllProductsFromCMS } from "../pages/api/graphcms";
import { useEffect, useState } from "react";
import { getTokenPrice } from "../src/api/dexguru";
import Image from "next/image";
import get_google_reviews from "./api/reviews";
import { Reviews } from "../src/components/Review";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
  },
  productsContainer: {
    padding: "0 5% 10% 10%",

    [theme.breakpoints.down("md")]: {
      padding: "0 5% 10% 5%",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "0 5% 10% 5%",
    },
  },
  productsTitle: {
    fontWeight: "bold",
    marginBottom: "3%",

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      marginBottom: "5%",
    },
  },
  products: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexFlow: "wrap",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  metadataContainer: {
    display: "none",
    padding: "0 5% 0% 10%",
    margin: "0 0 5% 0",

    display: "flex",
    backgroundColor: "#242424",
    gap: "10%",
    flexBasis: "100%",

    [theme.breakpoints.down("md")]: {
      padding: "0 5% 0% 5%",
      flexFlow: "wrap",
      gap: "5%",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2% 5% 0 5%",
      margin: "5% 0 0 0",
      display: "block",
      textAlign: "left",
      display: "none",
    },
  },
  aff: {
    marginRight: "10%",
  },
  reviewContainer: {
    padding: "0 5% 0% 10%",
    margin: "0 0 5% 0",

    [theme.breakpoints.down("md")]: {
      padding: "0 5% 0% 5%",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2% 5% 0 5%",
      margin: "5% 0 5% 0",
    },
  },
  reviews: {
    display: "flex",
    alignItems: "flex-start",
    margin: "0 1% 0 1%",
    gap: "10%",
    flexBasis: "100%",

    [theme.breakpoints.down("md")]: {
      flexFlow: "wrap",
      gap: "5%",
    },

    [theme.breakpoints.down("sm")]: {
      display: "block",
      textAlign: "left",
    },
  },
}));

export default function Home({
  products,
  reviews,
  rating,
  user_ratings_total,
}) {
  const classes = useStyles();
  const [token, setToken] = useState(undefined);

  useEffect(async () => {
    if (token) {
      await new Promise((resolve) => setTimeout(() => resolve(), 10000));
    }
    try {
      const localToken = await getTokenPrice();
      if (token) {
        localToken.previousUSD = token.priceUSD;
        localToken.previousCap = token.marketCap;
      }
      setToken(localToken);
    } catch (error) {
      // ignore.
    }
  });

  return (
    <div className={classes.container}>
      <Header />
      <Main />

      <section id="tokenomics">
        <Tokenomics />
      </section>

      <div className={classes.productsContainer}>
        <Typography variant="h4" className={classes.productsTitle}>
          Services
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
}

export async function getServerSideProps({ params, preview = false }) {
  const products = await getAllProductsFromCMS();

  return {
    props: {
      products: products,
    },
  };
}
