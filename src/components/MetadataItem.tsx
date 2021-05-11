import React from 'react';
import { Avatar, makeStyles, Theme, Typography } from "@material-ui/core";

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
  }
}));

const MetadataItem = ({ graphic, name, value} : { graphic: string, name: string, value: string}) => {
  const classes = useStyles();

  return (
    <div className = {classes.container}>
      <Avatar variant="square" src={graphic} className={classes.mediaItem}/>
      <div className={classes.metadata}>
        <Typography variant="subtitle1">{value}</Typography>
        <Typography variant="body1">{name}</Typography>
      </div>
    </div>
  );
}

export default MetadataItem;