import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { config, useTransition, animated } from "react-spring";
import get_google_reviews from "../../pages/api/reviews";

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
      "linear-gradient(90deg, hsla(42, 100%, 70%, 1) 0%, hsla(39, 100%, 76%, 1) 50%, hsla(49, 100%, 76%, 1) 100%)",
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
  const [items, setItems] = useState([]);
  const [index, set] = useState(0);

  const slides = [
    { id: 0, url: `/images/inspection.png` },
    { id: 1, url: `/images/main.png` },
    { id: 2, url: `/images/roof.png` },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      set((state) => (state + 1) % 4);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const transitions = useTransition<any, any[]>(slides[index], {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
    onRest: () => {
      if (index === slides.length - 1) {
        set(0);
      }
    },
  });

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
        {transitions((props, item) => (
          <animated.div
            style={{
              ...props,
            }}
          >
            <Image
              src={item.url}
              className={classes.ctaImage}
              height={600}
              width={700}
              alt="fermeon-token-bg"
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Main;
