import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import clsx from "clsx";
import axios from "axios";
import PhoneInput from "./PhoneInput";
import { validateEmail, validatePhoneNumber } from "../utility/validateInput";

const useStyles = makeStyles((theme) => ({
  multilineColor: {
    color: theme.palette.primary.main,
  },
  textField: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  margin: {
    marginBottom: theme.spacing(1),
    width: "100%",
  },
  marginBottom: {
    marginBottom: theme.spacing(1),
    width: "100%",
  },
  send: {
    width: "20%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.text.secondary,
    },
    [theme.breakpoints.down("550")]: {
      width: "50%",
      minHeight: "45px",
    },
    [theme.breakpoints.up("500")]: {
      width: "30%",
    },
    [theme.breakpoints.up("md")]: {
      width: "20%",
    },

    "&:disabled": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
  },
  adornmentRoot: {
    width: "100%",
    paddingLeft: "2px",
  },
}));

const onSubmitClick = (ev, cb, formData) => {
  ev.preventDefault();

  axios({
    url: `${AppConstants.contactApi.host}`,
    method: "post",
    headers: {
      Accept: "application/json",
    },
    data: formData,
  })
    .then((response) => cb({ status: "Success" }))
    .catch((error) => cb({ status: "Error" }));

  cb({ status: "progress" });
};

export default function Contact({ Callback }) {
  const classes = useStyles();

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [progress, updateProgress] = useState(false);
  const [emailError, setEmailError] = useState();
  const [phoneError, setPhoneError] = useState();
  const [isMessageError, setMessageError] = useState();
  const [isNameError, setNameError] = useState();
  const [phone, setPhone] = useState("");

  let isDisabled = true;

  const onEmailBlur = async (event) => {
    if (event.target.value.trim() !== "") {
      const validationMessage = await validateEmail(event.target.value);
      if (validationMessage !== "Passed Validation") {
        setEmailError(validationMessage);
      } else {
        setEmailError("");
      }
    } else {
      setEmailError("Email is required");
    }
  };

  const onPhoneBlur = async (event, callingCode) => {
    if (event.target.value.trim() !== "") {
      const validationMessage = await validatePhoneNumber(
        event.target.value,
        callingCode
      );
      if (validationMessage !== "Passed Validation") {
        setPhoneError(validationMessage);
      } else {
        setPhoneError("");
      }
    } else {
      setPhoneError("Phone Number is required");
    }
  };

  if (
    emailError === "" &&
    phoneError === "" &&
    isMessageError === false &&
    isNameError === false
  ) {
    isDisabled = false;
  }

  if (progress) {
    isDisabled = true;
  }

  const cb = ({ status }) => {
    if (status === "progress") {
      updateProgress(true);
    } else {
      Callback({ status });
      updateProgress(false);
    }
  };

  return (
    <form>
      <TextField
        required={true}
        type="text"
        label="Name"
        id="filled-size-small"
        fullWidth
        placeholder="Name"
        className={clsx(classes.margin, classes.textField)}
        variant="standard"
        size="medium"
        inputProps={{
          className: classes.multilineColor,
        }}
        onChange={(event) => setName(event.target.value)}
        onBlur={(event) => setNameError(event.target.value.trim() === "")}
        error={isNameError}
        helperText={isNameError ? <span>Name is required</span> : null}
      />
      <TextField
        required={true}
        type="email"
        label="Email"
        fullWidth
        placeholder="Email"
        className={clsx(classes.margin, classes.textField)}
        variant="standard"
        size="medium"
        id="filled-size-small"
        inputProps={{
          className: classes.multilineColor,
        }}
        onChange={(event) => setEmail(event.target.value)}
        onBlur={async (event) => onEmailBlur(event)}
        error={emailError !== "" && emailError !== undefined}
        helperText={emailError ? <span>{emailError}</span> : null}
      />
      <PhoneInput
        value={`${phone ? phone : ""}`}
        onChange={setPhone}
        onBlur={onPhoneBlur}
        error={phoneError !== "" && phoneError !== undefined}
        helperText={phoneError ? <span>{phoneError}</span> : null}
      />
      <TextField
        required
        type="textArea"
        id="filled-size-small"
        label="Message"
        fullWidth
        placeholder="Message"
        className={clsx(classes.margin, classes.textField)}
        variant="standard"
        size="medium"
        inputProps={{
          className: classes.multilineColor,
        }}
        onChange={(event) => setMessage(event.target.value)}
        onBlur={(event) => setMessageError(event.target.value.trim() === "")}
        error={isMessageError}
        helperText={isMessageError ? <span>Message is required</span> : null}
      />
      <span style={isDisabled ? { cursor: "not-allowed" } : null}>
        <Button
          classes={{ root: classes.root, disabled: classes.disabledButton }}
          className={classes.send}
          onClick={(event) =>
            onSubmitClick(event, cb, { name, email, phone, message })
          }
          variant="contained"
          disabled={isDisabled}
        >
          SEND
        </Button>
      </span>
    </form>
  );
}
