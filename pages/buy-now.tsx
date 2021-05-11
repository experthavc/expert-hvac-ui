import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    textAlign: 'left',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '150px 10% 0 10%',

    [theme.breakpoints.down('md')]: {
      padding: '150px 5% 0 5%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '100px 1% 0 3%'
    }
  },
  tagline: {
    flexGrow: 1,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  ctaButton: {
    width: '216px',
    height: '59px',
    borderRadius: '29.5px',
    [theme.breakpoints.down('xs')]: {
      width: '216px',
      height: '45px',
    },
    backgroundImage: 'linear-gradient(0.82turn, rgba(73, 160, 221, 0.8), rgb(0 234 147 / 50%))'
    //backgroundImage: "linear-gradient(to left, rgba(73, 160, 221, 0.8) 82%, rgba(101, 255, 222, 0.5) 21%), linear-gradient(to bottom, #5d5757, #5d5757)"

  },
  ctaButtonLabel: {
    fontSize: '15px',
    color: theme.palette.common.white
  },
  steps: {
    flexBasis: '50%',
    width: '60%',
    padding: '5% 10% 3% 10%',

    [theme.breakpoints.down('md')]: {
      padding: '5% 5% 3% 5%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '5% 2% 3% 2%',
      width: '100%'
    }
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '5%',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
  },
  description: {
    marginBottom: '10%'
  },
  step: {
    margin: '0 0 5% 0',
    padding: '2%',
    alignItems: 'center',
    backgroundColor: '#242424',
    borderRadius: '30px'
  },
  stepSpacing: {
    marginBottom: '3%',
    color: theme.palette.text.secondary
  },
  content: {
    background: "rgba(33, 33, 33, .5) url('/images/fermion-bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'right',
    backgroundBlendMode: 'darken',
    
    [theme.breakpoints.down('sm')]: {
      background: "rgba(33, 33, 33, .8) url('/images/fermion-bg.png')",
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center'
    },
  }
}));

const BuyNow = () => {
  const classes = useStyles();
  
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h2" className={classes.tagline}>Buy FER Token</Typography>
          <Button classes={{ label: classes.ctaButtonLabel }} variant="contained" className={classes.ctaButton}>
            Buy on Pancake
          </Button>
        </div>
        <div className={classes.content}>
        <div className={classes.steps}>
          <div className={classes.step}>
            <Typography variant="h5" className={classes.stepSpacing}>Download the app, Trust Wallet</Typography>
            <Typography variant="body1">Digital assets are stored in apps called wallet. There are tons of wallets out there. Trust Wallet is one of secure ones and needs less configuration</Typography>
          </div>

          <div className={clsx(classes.step)}>
            <Typography variant="h5" className={classes.stepSpacing}>Purchase BNB using Trust Wallet </Typography>
            <Typography variant="body1">Every 5% of transaction fees is awarded to FER holders. Also, long term holders will be awarded occasional awards.</Typography>
          </div>

          <div className={classes.step}>
            <Typography variant="h5" className={classes.stepSpacing}>Connect Pancake with Wallet</Typography>
            <Typography variant="body1">Open Pancakeswap on browser and connect with Wallet</Typography>
          </div>

          <div className={classes.step}>
            <Typography variant="h5" className={classes.stepSpacing}>Exchange BNB for FER</Typography>
            <Typography variant="body1">Enter the amount you wish to buy for in “From” currency. Set Slippage to 12%. Hit Swap. </Typography>
          </div>
          <div className={classes.step}>
            <Typography variant="h5" className={classes.stepSpacing}>HODL</Typography>
            <Typography variant="body1">Confirm the transaction…….</Typography>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyNow;