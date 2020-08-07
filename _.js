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
  }

};




// Do not write or modify code below this line.
module.exports = _;