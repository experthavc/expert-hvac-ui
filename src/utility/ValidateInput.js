import axios from "axios";
import AppConstants from "./AppConstants";

const isValidEmailFormat = (email) => {
  let pattern =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return email.match(pattern);
};

const validateEmail = async (email) => {
  try {
    if (!isValidEmailFormat(email)) {
      return `Invalid Format`;
    }

    const response = await axios({
      url: `${AppConstants.emailValidationApi.endpoint}?email=${email}`,
      method: "get",
      headers: {
        Accept: "application/json",
      },
    });

    console.log(response);

    if (response.data.validFormat === false) {
      return `Invalid Format`;
    } else if (response.data.deliverable === false) {
      return `Email is not deliverable`;
    } else {
      return `Passed Validation`;
    }
  } catch (error) {
    console.log(error);
  }
};

const isValidPhoneFormat = (phoneNumber, callingCode) => {
  let phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let number = phoneNumber;
  let formattedNumber = number.toString().replace(/\D/g, "");
  let numberOnly = formattedNumber.substring(
    callingCode.length,
    formattedNumber.length
  );

  return numberOnly.match(phonePattern);
};

const validatePhoneNumber = async (phoneNumber, callingCode) => {
  if (!isValidPhoneFormat(phoneNumber, callingCode)) {
    return `Invalid Format`;
  } else {
    return `Passed Validation`;
  }
};

export { validateEmail, validatePhoneNumber };
