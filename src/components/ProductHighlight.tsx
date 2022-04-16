import { Avatar, Link, makeStyles, Theme, Typography } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import Event from "@material-ui/icons/Event";
import HourglassEmpty from "@material-ui/icons/HourglassEmpty";
import { useRouter } from "next/router";
import moment from "moment";
import ProductType from "../models/Product";

const useStyles = makeStyles((theme: Theme) => ({
  product: {
    margin: "0 5% 5% 0",
    padding: "1%",
    width: "40%",
    height: "40%",
    border: "1px solid #ececec",
    borderRadius: "30px",

    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
    },
  },
  productGraphic: {
    position: "relative",
    borderRadius: "30px 30px 0 0",
    objectFit: "cover",
    margin: "0 0 32px",
    width: "100%",
    height: "200px",
  },
  postImage: {
    borderRadius: "30px 30px 0 0",
    width: "100%",
    height: "200px",
  },
  flex: {
    display: "inline-flex",
    alignItems: "center",
    flexBasis: "50%",
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: "5%",
  },
  metadata: {
    margin: "0 5% 0 5%",
    width: "100%",
    fontSize: "14px",
  },
  info: {
    margin: "5% 0 0 5%",
  },
  title: {
    marginTop: "5%",
    marginBottom: "3%",
    color: theme.palette.text.secondary,
  },
}));

const MetaData = (metadata: { date: string; status: string }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.flex, classes.metadata)}>
      <div className={classes.flex}>
        <Avatar className={classes.avatar}>
          <Event />
        </Avatar>
        <span>
          {" "}
          {moment(metadata.date, "YYYY-MM-DD").format("MMM Do, YYYY")}{" "}
        </span>
      </div>

      <div className={classes.flex}>
        <Avatar className={classes.avatar}>
          <HourglassEmpty />
        </Avatar>
        <span>{metadata.status}</span>
      </div>
    </div>
  );
};

const Product = (product: ProductType) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.product}>
      <div className={classes.productGraphic}>
        <Image
          layout="fill"
          objectFit="contain"
          src={product.image.url}
          className={classes.postImage}
        />
      </div>
      <div className={classes.info}>
        <Link href={`/services/${product.slug}`}>
          <Typography className={classes.title} variant="h5">
            {product.title}
          </Typography>
        </Link>
        <Typography variant="body1">{product.description}</Typography>
      </div>
    </div>
  );
};

export default Product;
