const clamp = (num1, num2, num3) => {
  num1 = Math.min(num1, num3);
  num1 = Math.max(num1, num2);
  return num1;
};

/*
params: num, start, end

now check these:
if num is smaller than start return false
if num is larger than end return false
if num between smaller and larger return true

*/

const inRange = (num, start, end) => {
  if (!end) {
    end = start;
    start = 0;
  } else if (start > end) {
    let tempVal = end;
    end = start;
    start = tempVal;
  }

  if (num > start && num < end) {
    return true;
  } else {
    return false;
  }
};
