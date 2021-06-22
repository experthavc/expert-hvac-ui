import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import Image from 'next/image';
import { useRouter } from "next/router";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: '100px',
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    minHeight: '85vh'
  },
  leftPanel: {
    flexBasis: '50%',
    paddingLeft: '10%',
    paddingRight: '0',
    paddingTop: '5%',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '2%',
      paddingRight: '0',
      position: 'absolute',
    },
  },
  rightPanel: {
    paddingTop: '100px',
    [theme.breakpoints.down('xs')]: {
      opacity: '0.2'
    },
  },
  busDescription: {
    marginTop: '31px',
    lineHeight: '1.88',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      margin: '10% 0 0 0'
    },
  },
  ctaButton: {
    marginTop: '45px',
    width: '216px',
    height: '59px',
    borderRadius: '29.5px',
    zIndex: 5,
    [theme.breakpoints.down('xs')]: {
      margin: '150px 0 0 0'
    },
    backgroundImage: 'linear-gradient(0.82turn, rgba(73, 160, 221, 0.8), rgb(0 234 147 / 50%))'
    //backgroundImage: "linear-gradient(to left, rgba(73, 160, 221, 0.8) 82%, rgba(101, 255, 222, 0.5) 21%), linear-gradient(to bottom, #5d5757, #5d5757)"
  },
  ctaButtonLabel: {
    fontSize: '15px',
    color: "#343536"
  },
  workoutImage: {
    display: 'none',
    position: 'absolute',
    marginTop: '15%',
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    },
  },
  businessLine: {
    fontWeight: 'bold',
    color: theme.palette.text.primary
  }
}));

const Main = () => {
  const classes = useStyles();
  const router = useRouter();

  const onCtaClick = (event: any) => {
    event.preventDefault()
    router.push(`/buy-now`)
  }

  return (
    <div className={classes.container}>
      <div className={classes.leftPanel}>
        <Typography variant="h1" className={classes.businessLine}>
          Defi Token, used  <br /> to access  Fermeon Protocol based DAPP(s).
        </Typography>
        <Typography variant="body1" className={classes.busDescription}>
          Fermeon (FER) is the utility token for Decentralized applications (DAPP) developed by Fermeon itself. Check out Projects section for released/upcoming DAPPS. 
        </Typography>
        <Button classes={{ label: classes.ctaButtonLabel }} variant="contained" className={classes.ctaButton} onClick={onCtaClick}>
          Buy Now
        </Button>
      </div>

      <div className={classes.rightPanel}>
        <Image
          src="/images/fermeon-bg.png"
          height={600}
          width={870}
          alt="fermeon-token-bg"
        />
      </div>
    </div>
  );
};

export default Main;