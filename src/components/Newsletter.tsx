import { Button, makeStyles, TextField, Theme, Typography } from "@material-ui/core";
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderRadius: '50px',
    backgroundColor: '#fcbc14',
    margin: '0 10% 150px 10%',
    minHeight: '206px',
    color: theme.palette.common.white,


    [theme.breakpoints.down('md')]: {
      margin: '10% 5% 150px 5%'
    },
    [theme.breakpoints.down('sm')]: {
      margin: '10% 2% 150px 2%'
    },
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
      minHeight: '250px',
      margin: '10% 0 150px 0'
    },
  },
  newsletter: {
    padding: '50px 0 0 5%',
  },
  title: {
    margin: '0 0 2% 0',
    fontWeight: 'bold'
  },
  subscribe: {
    margin: '0 0 5% 0',

    [theme.breakpoints.down('xs')]: {
      margin: '0 5% 5% 0',
    },
  },
  subscribeInput: {
    padding: '0 0 0 50px'
  },
  subscribeInputLabel: {
    color: theme.palette.common.white,
    padding: '0 0 0 50px'
  },
  subscribeTextField: {
    color: theme.palette.common.black,
    width: '314px',
    height: '59px',
    borderRadius: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    margin: '0 2% 2% 0',

    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
  },
  subscribeBtn: {
    width: '173px',
    height: '60px',
    borderRadius: '30px',
    backgroundColor: theme.palette.common.white,

    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
  },
  subscribeBtnLabel: {
    fontSize: '15px',
    color: theme.palette.common.black,
    letterSpacing: '1.5px',
    fontWeight: 'normal'
  },
  mailbox: {
    position: 'absolute',
    transform: 'translate(65vw, -450px)',

    [theme.breakpoints.down('xs')]: {
      transform: 'translate(65vw, -500px)',
    },
    [theme.breakpoints.down(400)]: {
      transform: 'translate(65vw, -420px)',
    },
  }
}));

const Newsletter = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.newsletter}>
        <Typography className={classes.title} variant="h4">Subscribe to the newsletter</Typography>
        <div className={classes.subscribe}>
          <TextField
            required={true}
            type="email"
            label='Enter your email'
            className={classes.subscribeTextField}
            variant='standard'
            size="medium"
            id="filled-size-small"
            InputProps={{
              disableUnderline: true,
              className: classes.subscribeInput
            }}
            InputLabelProps={{
              className: classes.subscribeInputLabel
            }}
          />
          <Button classes={{ label: classes.subscribeBtnLabel }} className={classes.subscribeBtn} variant="contained">
            Subscribe  
          </Button>
        </div>
      </div>
      <div className={classes.mailbox}>
        <Image
          src={'/images/mailbox.png'}
          width={510}
          height={367}
        />
      </div>
    </div>
  );
};

export default Newsletter;