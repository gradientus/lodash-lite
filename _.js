const _ = {
  clamp(number, lower, upper) {
    number = Math.min(number, upper);
    number = Math.max(number, lower);
    return number;
  },

  inRange(num, start, end) {
    if (!end) {
      end = start;
      start = 0;
    } else if (start > end) {
      let tempVal = end;
      end = start;
      start = tempVal;
    }

    if (num >= start && num < end) {
      return true;
    } else {
      return false;
    }
  },

  words(stringInput) {
    return stringInput.split(' ');
  },


  pad(padString, padLength) {
    let padAmount = 0;
    let padChar = ' ';

    if (padLength <= padString.length) {
      return padString;
    } else {
      padAmount = Math.abs(padLength - padString.length);
      if (padAmount % 2 === 0) {
        return `${padChar.repeat(padAmount / 2)}${padString}${padChar.repeat(padAmount / 2)}`;
      } else {
        return `${padChar.repeat(Math.floor(padAmount / 2))}${padString}${padChar.repeat(Math.floor(padAmount / 2) + 1)}`;
      }

    }
  },

  has(obj, val) {
    if (!obj[val]) {
      return false;
    } else {
      return true;
    }
  }

};




// Do not write or modify code below this line.
module.exports = _;