import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import clsx from 'clsx';
import Chip from '@material-ui/core/Chip';

import Tokenomics from "../src/components/Tokenomics";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
  },
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
    padding: '0 0 3% 0'
  },
  ctaButton: {
    width: '216px',
    height: '59px',
    borderRadius: '29.5px',
    [theme.breakpoints.down('xs')]: {
      width: '216px',
      height: '45px',
    },
    backgroundImage: 'linear-gradient(.82turn, rgba(73, 160, 221, 0.8), rgba(101, 255, 222, 0.5))'
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
    padding: '1% 0 3% 0'
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
    padding: '150px 10% 0 10%',

    [theme.breakpoints.down('md')]: {
      padding: '150px 2% 0 5%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: '100px 1% 0 3%'
    }
  },
  table: {
    minWidth: 650,
  },
  cellRoot: {
    borderBottom: '1px solid grey'
  }
}));

const About = () => {
  const classes = useStyles();
  const rows = [
    {
      key: 'Contract Address',
      value: '0x542ECAb35F70003401D9aD6909d4A3dbe7282494',
      snackbar: {
        type: 'primary'
      }
    },
    {
      key: 'Network',
      value: 'Binance Smart Chain'
    },
    {
      key: 'Release Date',
      value: 'August 17, 2021',
      snackbar: {
        type: 'secondary'
      }
    },
    {
      key: 'Initial Supply',
      value: '1,000,000,000,000'
    },
    {
      key: 'Release Method',
      value: 'No Presale'
    }
  ];

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <div className={classes.content}>
          <section>
            <Typography variant="h2" className={classes.tagline}>Fermion Token (FER)</Typography>
            <Typography variant="body1" className={classes.description}>Fermion (FER) is the utility token for Decentralized applications (DAPP) developed by Fermion itself. FER is the first smart contract launched under the FER ecosystem. The contract being ERC-20 standard can be served as digital asset. This digital asset will be used to get access to various products/services offered under FERMION ecosystem. The products and services here are being referred to smart contracts, decentralized applications built on top of FER based smart contracts or existing smart contracts. Each product goes through intense cycles of planning, development, unit testing, SIT, UAT, Integration. Versioning of each product is maintained in Semversion format. </Typography>        
          </section>
          <section>
            <Typography variant="h2" className={classes.tagline}>High Level Details</Typography>
            <TableContainer component={Paper} className={classes.root}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.key}>
                      <TableCell component="th" scope="row" classes={{root: classes.cellRoot}}>
                        <Typography variant="body1">{row.key}</Typography>
                      </TableCell>
                      <TableCell align="left" classes={{root: classes.cellRoot}}>
                        {
                          row.snackbar !== undefined ?
                          <Chip icon={<FileCopyIcon />} label={row.value } color="secondary" onClick={() => console.log('clicked')} />
                            :
                          <Typography variant="body1">{row.value}</Typography> 
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </section>
        </div>
      </div>
      <Tokenomics />

      <Footer />
    </div>
  );
};

export default About;