import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: "100px",
    display: "flex",
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    minHeight: "85vh",

    [theme.breakpoints.down("xs")]: {
      minHeight: "70vh",
    },
  },
  leftPanel: {
    flexBasis: "50%",
    paddingLeft: "10%",
    marginRight: "5%",
    paddingTop: "5%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2%",
      paddingRight: "0",
      position: "absolute",
    },
  },
  rightPanel: {
    paddingTop: "100px",
    [theme.breakpoints.down("xs")]: {
      opacity: "0.2",
    },
  },
  busDescription: {
    marginTop: "31px",
    lineHeight: "1.88",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      margin: "10% 0 0 0",
    },
  },
  ctaButton: {
    marginTop: "45px",
    width: "216px",
    height: "59px",
    borderRadius: "29.5px",
    zIndex: 5,
    [theme.breakpoints.down("xs")]: {
      margin: "150px 0 0 0",
    },
    backgroundImage:
      "linear-gradient(90deg, hsla(45, 58%, 57%, 1) 0%, hsla(42, 35%, 57%, 1) 49%, hsla(54, 93%, 34%, 1) 100%)",
    //backgroundImage: "linear-gradient(to left, rgba(73, 160, 221, 0.8) 82%, rgba(101, 255, 222, 0.5) 21%), linear-gradient(to bottom, #5d5757, #5d5757)"
  },
  ctaButtonLabel: {
    fontSize: "15px",
    color: "#343536",
  },
  workoutImage: {
    display: "none",
    position: "absolute",
    marginTop: "15%",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  businessLine: {
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
  ctaImage: {
    brightness: "50%",
  },
}));

const Main = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.container}>
      <div className={classes.leftPanel}>
        <Typography variant="h1" className={classes.businessLine}>
          The roofer <br /> you can trust. Best services in GTA
        </Typography>
        <Typography variant="body1" className={classes.busDescription}>
          T Dot Roofers are the best roofing company in GTA. We are specialized
          in commercial and residential services
        </Typography>
        <Button
          classes={{ label: classes.ctaButtonLabel }}
          variant="contained"
          className={classes.ctaButton}
          onClick={(e: any) => {
            e.preventDefault();
            window.location.href = "tel:+14164519293";
          }}
        >
          Call now
        </Button>
      </div>

      <div className={classes.rightPanel}>
        <Image
          src="/images/main.png"
          className={classes.ctaImage}
          height={600}
          width={700}
          alt="fermeon-token-bg"
        />
      </div>
    </div>
  );
};

export default Main;
