const myArray = ['phil', 48, 'eddie', 35];

function drop(arr, val = undefined) {
  if (val === 0) {
    return arr;
  } else if (val === undefined) {
    myArray.shift();
    return(arr);
  } else {
    for (let i = 0; i < val; i++) {
      myArray.shift();
    }
    return(arr);
  }
}





// if the value is more than the number of customElements, return an empty array
// if there are 4 elements and the value is 2, a new array will be returned having dropped the first 2
