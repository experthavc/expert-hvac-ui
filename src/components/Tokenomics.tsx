import { Avatar, makeStyles, Theme, Typography } from "@material-ui/core";
import Image from "next/image";
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    margin: "5% 10% 100px 10%",

    [theme.breakpoints.down("md")]: {
      margin: "10% 5% 100px 5%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10% 2% 100px 2%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      borderRadius: 0,
      minHeight: "250px",
      margin: "10% 1% 50px 1%",
    },
    backgroundColor: theme.palette.primary.main,
  },
  vector: {
    flexBasis: "50%",
    marginTop: "5%",

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  steps: {
    flexBasis: "50%",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "5%",

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  description: {
    marginBottom: "10%",
  },
  step: {
    margin: "0 0 5% 0",
    padding: "2%",
    alignItems: "center",
    backgroundColor: "#242424",
    borderRadius: "30px",
  },
  stepSpacing: {
    marginBottom: "3%",
    color: theme.palette.text.secondary,
  },
}));

const Tokenomics = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.vector}>
        <Image src="/images/main-vector.png" width={655} height={490} />
      </div>
      <div className={classes.steps}>
        <Typography className={classes.title} variant="h2">
          WHO WE ARE
        </Typography>
        <Typography className={classes.description} variant="subtitle1">
          You are not just investing in a roof; you are investing in Peace of
          Mind with T DOT Roofers.
        </Typography>

        <div className={classes.step}>
          <Typography variant="h5" className={classes.stepSpacing}>
            Located in GTA
          </Typography>
          <Typography variant="body1">
            We are based in Toronto (GTA) and provide services in all the
            regions that includes but not limited to Brampton, Mississauga,
            Oakville, Niagra, Windsor.
          </Typography>
        </div>

        <div className={clsx(classes.step)}>
          <Typography variant="h5" className={classes.stepSpacing}>
            Services
          </Typography>
          <Typography variant="body1">
            Skylight, Roof repairs, Residential Roofing, Commerical Roofing
          </Typography>
        </div>

        <div className={classes.step}>
          <Typography variant="h5" className={classes.stepSpacing}>
            Metal Roofs
          </Typography>
          <Typography variant="body1">
            We are specialized in metal roofs as well.
          </Typography>
        </div>

        <div className={classes.step}>
          <Typography variant="h5" className={classes.stepSpacing}>
            Well Trusted
          </Typography>
          <Typography variant="body1">
            Our work speak for us. Please see what people are saying.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
