import React from "react";
import {
  Icon,
  ListItemText,
  ListItemIcon,
  Menu,
  MenuItem,
  ListItemSecondaryAction,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { countriesFromApi } from "../../pages/api/Countries";
import { FixedSizeList } from "react-window";

const useStyles = makeStyles((theme) => ({
  dialog: {
    textAlign: "center",
  },
  link: {
    color: theme.palette.secondary.dark,
    "&:hover": {
      color: theme.palette.secondary.main,
      "text-decoration": "none",
      cursor: "pointer",
    },
    paddingRight: "5px",
  },
  listItemTextRoot: {
    marginTop: "8px",
    marginBottom: 0,
  },
  listItemAction: {
    marginTop: "3px",
  },
  muiMenuItemRoot: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}));

const Row = ({ index, data, style }) => {
  const classes = useStyles();
  const country = countriesFromApi[index];
  const { handleMenuItemClick } = data;
  return (
    <div style={style}>
      <MenuItem
        classes={{ root: classes.muiMenuItemRoot }}
        onClick={(event) => handleMenuItemClick(event, country)}
        key={country.name}
      >
        <ListItemIcon>
          <Icon>
            <img src={country.flag} style={{ width: "100%" }} />
          </Icon>
        </ListItemIcon>
        <ListItemText classes={{ root: classes.listItemTextRoot }}>
          <Typography variant="body2" color="primary">
            {country.name}
          </Typography>
        </ListItemText>
        <ListItemSecondaryAction className={classes.listItemAction}>
          <Typography
            variant="body2"
            color="primary"
          >{`+${country.callingCodes[0]}`}</Typography>
        </ListItemSecondaryAction>
      </MenuItem>
    </div>
  );
};

export default function CountrySelector({ anchorEl, setAnchorEl, callback }) {
  const classes = useStyles();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, country) => {
    callback(country);
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        anchorEl={anchorEl}
        className={classes.dialog}
        open={Boolean(anchorEl)}
        id="countries-menu"
        onClose={handleClose}
        variant="selectedMenu"
        keepMounted
        PaperProps={{
          style: {
            maxHeight: 55 * 4.5,
            width: "60ch",
          },
        }}
      >
        <FixedSizeList
          itemCount={countriesFromApi.length}
          itemData={{ handleMenuItemClick }}
          itemSize={35}
          height={250}
          width={450}
        >
          {Row}
        </FixedSizeList>
      </Menu>
    </div>
  );
}
