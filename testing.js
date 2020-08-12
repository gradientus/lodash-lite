const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function   chunk(array, size = 1) {
  let arrayChunks = [];
  for (let i = 0; i < array.length; i+=size) {
    let arrayChunk = array.slice(i, i + size);
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks;
}



  //break up the given array into chucks determined by the size
  //returns an array containing all the smaller arrays
  //if the arrays cannot be broke up evenly, the last chunk will be smaller than the specified size
  //if no size is provided, then default is 1

chunk(myArray, 5);