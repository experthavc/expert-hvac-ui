import React, { useState } from "react";
import { enforceFormat, formatToPhone } from "../utility/PhoneFormat";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, Icon } from "@material-ui/core";
import clsx from "clsx";
import CountrySelector from "./CountrySelector";

const useStyles = makeStyles((theme) => ({
  multilineColor: {
    color: theme.palette.primary.main,
  },
  adornmentRoot: {
    width: "100%",
    paddingLeft: "2px",
    cursor: "pointer",
  },
  textField: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  margin: {
    marginBottom: theme.spacing(1),
    width: "100%",
  },
}));

export default function PhoneInput({
  onChange,
  onBlur,
  error,
  value,
  helperText,
}) {
  const classes = useStyles();
  const [countryCode, setCountryCode] = useState("1");
  const [countryFlag, setCountryFlag] = useState(
    `https://restcountries.eu/data/can.svg`
  );
  const [anchorEl, setAnchorEl] = React.useState(null);

  const countrySelectorCb = (country) => {
    setCountryCode(country.callingCodes[0]);
    setCountryFlag(country.flag);
  };

  return (
    <div>
      <CountrySelector
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        callback={countrySelectorCb}
      />
      <TextField
        aria-controls="countries-menu"
        value={`${value !== "" ? value : `+${countryCode}`}`}
        required={true}
        type="text"
        label="Phone Number"
        fullWidth
        placeholder="Phone Number"
        className={clsx(classes.textField, classes.margin)}
        variant="standard"
        size="medium"
        id="filled-size-small"
        InputProps={{
          className: classes.multilineColor,
          value: `${value !== "" ? value : `+${countryCode}`}`,
          startAdornment: (
            <InputAdornment position="start">
              <Icon onClick={(event) => setAnchorEl(event.currentTarget)}>
                <img className={classes.adornmentRoot} src={countryFlag} />
              </Icon>
            </InputAdornment>
          ),
        }}
        onChange={(event) => {
          enforceFormat(event);
          const formatValue = formatToPhone(event, countryCode);
          onChange(formatValue);
        }}
        onBlur={(event) => onBlur(event, countryCode)}
        error={error}
        helperText={helperText}
      />
    </div>
  );
}
