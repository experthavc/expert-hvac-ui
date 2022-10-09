import {
  AppBar,
  IconButton,
  Link,
  List,
  ListItem,
  makeStyles,
  RootRef,
  Theme,
  Toolbar,
} from "@material-ui/core";
import clsx from "clsx";
import MenuItem from "./MenuItem";
import { Menu } from "@material-ui/icons";
import { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1,
  },
  primaryLink: {
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.secondary.main,
      "text-decoration": "none",
      cursor: "pointer",
    },
  },
  menuIcon: {
    fontSize: 40,
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  },
  navIconHide: {
    [theme.breakpoints.up(1200)]: {
      display: "none",
    },
  },
  logoContainer: {
    textAlign: "left",
    paddingTop: ".5%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "1.5%",
    },
  },
  logo: {
    color: "white",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    width: "300px",
  },
  logoImage: {
    marginRight: "5%",
  },
  listItem: {
    width: "initial",
  },
  listItemGutters: {
    paddingLeft: "25px",
    paddingRight: "25px",
  },
  flexContainer: {
    display: "inline-flex",
    flexDirection: "row",
    padding: 0,
    width: "100%",
    alignItems: "flex-start",
    alignContent: "center",
  },
  navList: {
    position: "relative",
    [theme.breakpoints.down(1200)]: {
      display: "none",
    },
  },
  sideNavList: {
    position: "fixed",
    zIndex: 7,
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    maxHeight: "80vh",
    overflow: "scroll",
    [theme.breakpoints.up(1200)]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5px",
      paddingRight: "5px",
    },
  },
  header: {
    top: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    height: "100px",
    boxShadow: "none",
    paddingLeft: "120px",
    paddingRight: "120px",
    paddingTop: "20px",
    position: "fixed",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5px",
      paddingRight: "5px",
      paddingTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "100px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "80px",
    },
  },
  toolbarWrapper: {
    position: "absolute",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  blockDisplay1200: {
    [theme.breakpoints.down(1200)]: {
      display: "block",
    },
  },
}));

const NavigationList = ({ callback }) => {
  const classes = useStyles();

  return (
    <div>
      <List
        id="header"
        className={clsx(classes.flexContainer, classes.blockDisplay1200)}
      >
        <ListItem
          classes={{ root: classes.listItem, gutters: classes.listItemGutters }}
          key={"productsItem"}
        >
          <MenuItem
            key={"product"}
            Item={{ name: "Services", link: "/services" }}
            callback={callback}
          />
        </ListItem>
        <ListItem
          classes={{ root: classes.listItem, gutters: classes.listItemGutters }}
          key={"buyNowItem"}
        >
          <MenuItem
            key={"buyNow"}
            Item={{ name: "Blog", link: "/blog" }}
            callback={callback}
          />
        </ListItem>
      </List>
    </div>
  );
};

const Header = () => {
  const classes = useStyles();
  const [visibleNavMenu, toggleNav] = useState(false);
  const headerRef = useRef(null);

  const headerHeight = headerRef.current ? headerRef.current.clientHeight : 0;

  const menuProps = useSpring({
    opacity: visibleNavMenu ? 1 : 0,
    marginTop: visibleNavMenu ? headerHeight : -500,
  });

  return (
    <div>
      <RootRef rootRef={headerRef}>
        <AppBar position={"static"} className={classes.header}>
          <Toolbar className={classes.toolbarWrapper}>
            <div className={clsx(classes.grow, classes.logoContainer)}>
              <span className={classes.primaryLink}>
                <Link href="/" className={classes.logo}>
                  Expret HVAC Solutions
                </Link>
              </span>
            </div>
            <IconButton
              id="menu"
              color="inherit"
              aria-label="Open drawer"
              className={clsx(classes.navIconHide)}
            >
              <Menu
                className={classes.menuIcon}
                onClick={() => toggleNav(!visibleNavMenu)}
              />
            </IconButton>
            <div className={classes.navList}>
              <NavigationList callback={() => {}} />
            </div>
          </Toolbar>
        </AppBar>
      </RootRef>
      <div>
        <animated.div
          className={`scrollbar-hidden ${classes.sideNavList}`}
          style={menuProps}
        >
          <NavigationList callback={() => toggleNav(false)} />
        </animated.div>
      </div>
    </div>
  );
};

export default Header;
