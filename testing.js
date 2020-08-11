function pad(padString, padLength) {
  let padAmount = 0;
  let padChar = '*';

  if (padLength <= padString.length) {
    return padString;
  } else {
    padAmount = Math.abs(padLength - padString.length);
    if (padAmount % 2 === 0) {
      console.log(`${padChar.repeat(padAmount / 2)}${padString}${padChar.repeat(padAmount / 2)}`)
    } else {
      console.log(`${padChar.repeat(Math.floor(padAmount / 2))}${padString}${padChar.repeat(Math.floor(padAmount / 2) + 1)}`)
    }

  }
};





pad('hi how are ya?', 20);