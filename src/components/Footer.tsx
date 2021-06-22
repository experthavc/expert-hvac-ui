import { Avatar, makeStyles, Theme, Typography } from '@material-ui/core';
import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  footerContainer: {
    backgroundColor: '#242424',
    padding: '2% 10% 0 10%',

    [theme.breakpoints.down('md')]: {
      padding: '2% 5% 32px 5%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2% 2% 32px 2%'
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      display: 'block',
      borderRadius: 0,
      padding: '2% 2% 32px 2%'
    },
  },
  footer: {
    display: 'flex',
    alignItems: 'start',

    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  branding: {
    flexBasis: '40%',
    marginRight: '30%',
    [theme.breakpoints.down('md')]: {
      flexBasis: '50%',
      marginRight: '20%',
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
      marginRight: '0%',
    },
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    flexBasis: '50%',

    [theme.breakpoints.down('xs')]: {
      display: 'block'
    },
  },
  brandTitle: {
    margin: '0 0 0 3%'
  },
  brandDescription: {
    marginTop: '2%'
  },
  socialMedia: {
    display: 'flex',
    padding: '3% 0 0 0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  copyright: {
    flexBasis: '50%',
    textAlign: 'right',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  }
}));

const bottomFooterStyles = makeStyles((theme: Theme) => ({
  bottomFooter: {
    display: 'flex',
    marginTop: '3%',
    padding: '2% 0 0 0 ',
    borderTop: `1px solid ${theme.palette.common.black}`,
    color: '#c7c7c7',

    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  copyright: {
    flexBasis: '50%',
    marginRight: '30%',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      padding: '0 0 4% 0'
    },
  },
  footerNav: {
    display: 'flex',
    flexBasis: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  footerSpacing: {
    padding: "0 5% 0 0",
  }
}));

const BottomFooter = () => {
  const classes = bottomFooterStyles();
 
  return (
   <div className={classes.bottomFooter}>
    <div className={classes.copyright}>
      <Typography variant='body2'>© {new Date().getFullYear()} Fermeon., All rights reserved.</Typography>
    </div>
    <div className={classes.footerNav}>
      <span className={classes.footerSpacing}>
        <Link href='/privacy-policy' ><Typography variant='body2'>Privacy Policy</Typography></Link>
      </span>
      
      <Link href='/careers'><Typography variant='body2'>Careers</Typography></Link>       
    </div>
   </div>
  )
};

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <footer className={classes.footer}>
        <div className={classes.branding}>
          <div className={classes.brand}> 
            <Image src="/images/Fermeon-logo.png" height={50} width={50} />
            <Typography className={classes.brandTitle} variant="h4">Fermeon</Typography>
          </div>
          <div>
            <Typography className={classes.brandDescription} variant="body1">Fermeon (FER) will be the only token used for products, decentralized apps developed under Fermeon ecosystem.  Timelines for all the projects will be strictly followed through and every update is announced in a timely manner. </Typography>
          </div>
        </div>
        <div className={clsx(classes.socialMedia, classes.root)}>
          <Avatar src="/images/discord.png" variant="square" imgProps={{width: '25px', height: '25px'}}/>
          <Avatar src="/images/instagram.png" variant="square" sizes = "45px" imgProps={{width: '25px', height: '25px'}}/>
          <Avatar src="/images/facebook.png" variant="square" imgProps={{width: '25px', height: '25px'}}/>
          <Avatar src="/images/trello.png" variant="square" imgProps={{width: '25px', height: '25px'}}/>
          <Avatar src="/images/github.png" variant="square" imgProps={{width: '25px', height: '25px'}}/>
          <Avatar src="/images/twitter.png" variant="square" imgProps={{width: '25px', height: '25px'}}/>
        </div>
      </footer>
      <BottomFooter />
    </div>
  );
};

export default Footer;