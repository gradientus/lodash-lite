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
  },

  invert(obj) {
    let newObject = {};
    for (const prop in obj) {
      let newKey = obj[prop];
      let newVal = prop;
      newObject[newKey] = newVal;
    };
    return newObject;
  },

  findKey(obj, predicate) {
    for (const prop in obj) {
      let value = obj[prop];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return prop;
      }
    }
    return undefined;
  },

  drop(arr, val = undefined) {
    if (val === 0) {
      return arr;
    } else if (val === undefined) {
      arr.shift();
      return(arr);
    } else {
      for (let i = 0; i < val; i++) {
        arr.shift();
      }
      return(arr);
    }
  },

  dropWhile(array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size = 1) {
    let arrayChunks = [];
    for (let i = 0; i < array.length; i+=size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};




// Do not write or modify code below this line.
module.exports = _;