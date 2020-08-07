const _ = {
  clamp(number, lower, upper) {
    number = Math.min(number, upper);
    number = Math.max(number, lower);
    return number;
  }
};




// Do not write or modify code below this line.
module.exports = _;