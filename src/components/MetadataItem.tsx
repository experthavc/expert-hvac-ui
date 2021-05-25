import React from 'react';
import { Avatar, makeStyles, Theme, Typography } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    paddingTop: '2%',
    paddingBottom: '2%',
    gap: '2%',
    flexBasis: '100%',

    [theme.breakpoints.down('md')]: {
      flexBasis: '20%',
    },

    [theme.breakpoints.down('sm')]: {
      gap: '1%',
      justifyContent: 'left'
    }
  },
  mediaItem: {
    objectFit: 'contain',
    marginRight: '1%',
    [theme.breakpoints.down('sm')]: {
      marginRight: '3%',
    }
  },
  metadata: {
    textAlign: 'center',
    
    [theme.breakpoints.down('md')]: {
      gap: '1%',
      textAlign: 'left'
    }
  },
  metadataValue: {
    display: 'flex',
    alignItems: 'center'
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const formatNumber = (value : number, format : boolean, name : string) : string => {
  let formatted = value.toString();
  if (name == "Market Cap") {
    formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    formatted = `$ ${formatted}`
  } else if (name === "Current Price"){
    formatted = `$ ${value.toFixed(12)}`
  } else if (format) {
    formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return formatted;  
}

const MetadataItem = ({
  graphic,
  name,
  value,
  format,
  previousValue,
  showDifference,
}: {
  graphic: string;
  name: string;
  value: number | undefined;
  previousValue: number | undefined;
  format: boolean;
  showDifference: boolean
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Avatar variant="square" src={graphic} className={classes.mediaItem} />
      <div className={classes.metadata}>
        {value === undefined ? (
          <div>
            <Avatar className={classes.small} src="/images/spinner.gif" />
            <Typography variant="body1">{name}</Typography>
          </div>
        ) : (
          <div>
            <span className={classes.metadataValue}>
              <Typography variant="subtitle1">{formatNumber(value, format, name) }</Typography>
              {
              showDifference && previousValue !== null? 
                (value - previousValue) >= 0 ?
                  <ArrowUpward htmlColor={"#41FC38"}/>
                : <ArrowDownward htmlColor={"#ED1111"} />
              : null  
              }
            </span>
            <Typography variant="body1">{name}</Typography>
          </div>
        )}
      </div>
      <div>
      </div>
    </div>
  );
};

export default MetadataItem;