const isNumericInput = (event) => {
  const key = event.keyCode;
  return (
    (key >= 48 && key <= 57) || // Allow number line
    (key >= 96 && key <= 105) // Allow number pad
  );
};

const isModifierKey = (event) => {
  const key = event.keyCode;
  return (
    event.shiftKey === true ||
    key === 35 ||
    key === 36 || // Allow Shift, Home, End
    key === 8 ||
    key === 9 ||
    key === 13 ||
    key === 46 || // Allow Backspace, Tab, Enter, Delete
    (key > 36 && key < 41) || // Allow left, up, right, down
    // Allow Ctrl/Command + A,C,V,X,Z
    ((event.ctrlKey === true || event.metaKey === true) &&
      (key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
  );
};

const enforceFormat = (event) => {
  // Input must be of a valid number format or a modifier key, and not longer than ten digits
  if (!isNumericInput(event) && !isModifierKey(event)) {
    event.preventDefault();
  }
};

const formatToPhone = (event, countryCode) => {
  if (isModifierKey(event)) {
    return;
  }

  let value = event.target.value;
  const countryCodeLen = countryCode.toString().length;
  const numberlen = 10 + countryCode.toString().length;
  const input = value.replace(/\D/g, "").substring(0, numberlen);
  const iso = input.substring(0, countryCodeLen);
  const zip = input.substring(countryCodeLen, countryCodeLen + 3);
  const middle = input.substring(
    countryCodeLen + zip.length,
    countryCodeLen + zip.length + 3
  );
  const last = input.substring(
    countryCodeLen + zip.length + middle.length,
    countryCodeLen + zip.length + middle.length + 4
  );

  if (input.length > countryCodeLen + 6) {
    value = `+${iso} (${zip}) ${middle} - ${last}`;
  } else if (input.length > countryCodeLen + 3) {
    value = `+${iso} (${zip}) ${middle}`;
  } else if (input.length > countryCodeLen + 0) {
    value = `+${iso} (${zip}`;
  }

  return value;
};

export { enforceFormat, formatToPhone };
