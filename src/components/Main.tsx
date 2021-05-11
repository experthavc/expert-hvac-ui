import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import Image from 'next/image';

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
    },
  },
  rightPanel: {
    paddingTop: '100px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0
    },
  },
  busDescription: {
    marginTop: '31px',
    lineHeight: '1.88',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
    },
  },
  ctaButton: {
    marginTop: '45px',
    width: '216px',
    height: '59px',
    borderRadius: '29.5px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '120px'
    },
    backgroundImage: 'linear-gradient(.82turn, rgba(73, 160, 221, 0.8), rgba(101, 255, 222, 0.5))'
    //backgroundImage: "linear-gradient(to left, rgba(73, 160, 221, 0.8) 82%, rgba(101, 255, 222, 0.5) 21%), linear-gradient(to bottom, #5d5757, #5d5757)"

  },
  ctaButtonLabel: {
    fontSize: '15px',
    color: theme.palette.common.white
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

  return (
    <div className={classes.container}>
      <div className={classes.leftPanel}>
        <Typography variant="h1" className={classes.businessLine}>
          Defi Token, used  <br /> to access  Fermion Protocol based DAPP(s).
        </Typography>
        <Typography variant="body1" className={classes.busDescription}>
          Fermion (FER) is the utility token for Decentralized applications (DAPP) developed by Fermion itself. Check out Projects section for released/upcoming DAPPS. 
        </Typography>
        <Button classes={{ label: classes.ctaButtonLabel }} variant="contained" className={classes.ctaButton}>
          Buy Now
        </Button>
      </div>

      <div className={classes.rightPanel}>
        <Image
          src="/images/fermion-bg.png"
          height={600}
          width={870}
          alt="mind-body-fitness"
        />
      </div>
    </div>
  );
};

export default Main;