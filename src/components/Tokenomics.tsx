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
      margin: "20% 1% 50px 1%",
    },
    backgroundColor: theme.palette.primary.main,
  },
  vector: {
    flexBasis: "50%",
    marginTop: "5%",
    borderRadius: "5px",
    overflow: "hidden",

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
        <Image
          src="/images/who-we-are.jpeg"
          width={655}
          height={490}
          objectFit="contain"
        />
      </div>
      <div className={classes.steps}>
        <Typography className={classes.title} variant="h2">
          WHO WE ARE
        </Typography>
        <Typography className={classes.description} variant="subtitle1">
          We are the GTA's leading accredited heating and cooling service.We are
          committed to, and pride ourselves on, good workmanship and service
          that exceeds your expectations. Any project, big or small, gets the
          same attention to detail and commitment from our team.
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
            Furnances, Air Conditioners, Air Quality, Temparature Control
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
