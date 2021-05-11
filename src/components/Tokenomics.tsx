import { Avatar, makeStyles, Theme, Typography } from "@material-ui/core";
import Image from 'next/image';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    margin: '5% 10% 100px 10%',

    [theme.breakpoints.down('md')]: {
      margin: '10% 5% 100px 5%'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '10% 2% 100px 2%'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      borderRadius: 0,
      minHeight: '250px',
      margin: '10% 1% 50px 1%'
    },
    backgroundColor: theme.palette.primary.main
  },
  vector: {
    flexBasis: '50%',
    
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  },
  steps: {
    flexBasis: '50%'
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
  }
}));

const Tokenomics = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.vector}>
        <Image 
          src="/images/tokenomics-graphic.svg"
          width={655}
          height={690}
        />
      </div>
      <div className={classes.steps}>
        <Typography className={classes.title} variant="h2">Tokenomics</Typography>
        <Typography className={classes.description} variant="subtitle1">Tokenomics is the study of how cryptocurrencies work within the broader ecosystem. This includes such things like token distribution as well as how they can be used to incentivize positive behaviour in the network</Typography>

        <div className={classes.step}>
          <Typography variant="h5" className={classes.stepSpacing}>Transaction Fees</Typography>
          <Typography variant="body1">For every transaction, 10% fees is charged  </Typography>
        </div>

        <div className={clsx(classes.step)}>
          <Typography variant="h5" className={classes.stepSpacing}>Rewards</Typography>
          <Typography variant="body1">Every 5% of transaction fees is awarded to FER holders. Also, long term holders will be awarded occasional awards.</Typography>
        </div>

        <div className={classes.step}>
          <Typography variant="h5" className={classes.stepSpacing}>Automatic Liquidity</Typography>
          <Typography variant="body1">Every 2.5% of transaction fees is added to Liquidity on Pancakeswap to provide basis for market</Typography>
        </div>

        <div className={classes.step}>
          <Typography variant="h5" className={classes.stepSpacing}>Burn Wallet</Typography>
          <Typography variant="body1">Every 2.5% of transaction fees is added to burn wallet i.e. tokens will be gone from circulating supply forever</Typography>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;