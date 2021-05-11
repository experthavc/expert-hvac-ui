import { makeStyles } from "@material-ui/core";

import React, { useState } from 'react';
import { KeyboardArrowDown, Phone } from '@material-ui/icons';
import { List, ListItem, Typography, Button } from '@material-ui/core';
import Link from 'next/link';
import { useSpring, animated } from 'react-spring';

import clsx from 'clsx';

export const ItemVariant = {
  Default: 'Default',
  Button: 'Button',
  Icon: 'Icon'
};

const useStyles = makeStyles((theme) => ({
  link: {
    color: () => 'inherit',
    '&:hover': {
      color: theme.palette.secondary.main,
      'text-decoration': 'none',
      cursor: 'pointer'
    },
  },
  secondaryLink: {
    color: () => 'inherit',
    '&:hover': {
      'text-decoration': 'none',
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.secondary.main,
      cursor: 'pointer'
    }
  },
  block: {
    display: 'block',
    width: '100%',
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center'
  },
  subMenu: {
    width: '90%',
    display: 'block', 
    paddingTop: '30px', 
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '3px',
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main
    },
    [theme.breakpoints.down(1200)]: {
      width: '100%',
      paddingTop: '3px',
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main
    },
  },
  subMenuItem: {
    backgroundColor: () => 'inherit',
    '&:hover': {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.secondary.main,
      cursor: 'pointer'
    }
  },
  ListItemInitialWidth: {
    width: 'initial'
  },
  inheritDisplay: {
    display: 'inherit'
  },
  contentsDisplay: {
    display: 'contents'
  },
  roundedButton: {
    borderRadius: '28px',
  },
}));

const SubMenu = ({SubMenuItems, callback}) => {
  const classes = useStyles();

  return SubMenuItems.map(item => {
    return (
      <span
        className={classes.secondaryLink} key={item.name} onClick={callback}
      >
        <Link href={item.link} >
          <List className={classes.subMenuItem}>
            <ListItem>        
              <Typography variant="body1">{item.name}</Typography>
            </ListItem>
          </List>
        </Link>
      </span>
    );
  });
};

const DefaultMenuItem = ({ Item, SubMenuItems, callback }) => {
  const classes = useStyles();
  const [hidden, toggleMenu] = useState(true);
  const props = useSpring({ opacity: hidden ? 0 : 1, display: hidden ? 'none' : 'inherit'})
  const rotate = useSpring({ transform: hidden ? 'rotate(0deg)' : 'rotate(180deg)'})
    
  return (
    <div className={classes.block} onMouseLeave={() => toggleMenu(true)}>
        <div className={clsx(classes.flexBox, classes.link)} 
          //onClick={() => toggleMenu(!hidden)} 
          onMouseEnter={()=> toggleMenu(false)}
        >
          <span className={classes.link}>
            <Link href={`${Item.link ? Item.link : '#'}`}>
              <Typography variant="subtitle1">{Item.name}</Typography>
            </Link>
          </span>
          {SubMenuItems !== undefined ? <animated.div className={classes.inheritDisplay} style = {rotate}><KeyboardArrowDown /></animated.div> : null}
        </div>
        {SubMenuItems !== undefined ? (
          <animated.div 
            style = {props} 
            className={classes.subMenu}
          >
            <SubMenu SubMenuItems={SubMenuItems} callback={callback}/>
          </animated.div>
        ) : null}
    </div>
  );
};

const ButtonMenuItem = ({ Item }) => {
  const classes = useStyles();

  return (
    <span className={classes.link}>
      <Link href="">
        <Button
          style={{letterSpacing: '1.3px'}}
          variant="contained"
          color="secondary"
          className={classes.roundedButton}
          onClick={Item.callback}
        >
          { Item.name }
        </Button>
      </Link>
    </span>
  );
};

const IconMenuItem = ({ Item }) => {
  const classes = useStyles();
  return (
    <span 
      className={clsx(classes.link, classes.contentsDisplay, Item.CustomStyle)}
    >
      <Link href={`${Item.link}`}>
        <Phone />
        <Typography variant="subtitle1"> {Item.name} </Typography>
      </Link>
    </span>
  );
};

export default function MenuItem({Item, SubMenuItems = undefined, Variant = ItemVariant.Default, callback = () => {}}) {
  switch (Variant) {
    case ItemVariant.Button:
      return <ButtonMenuItem Item={Item} />
    case ItemVariant.Icon:
      return <IconMenuItem Item={Item} />
    default:
      return <DefaultMenuItem Item={Item} SubMenuItems={SubMenuItems} callback={callback}/>
  }
}