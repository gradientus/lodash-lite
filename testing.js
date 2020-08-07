const clamp = (num1, num2, num3) => {
  num1 = Math.min(num1, num3);
  num1 = Math.max(num1, num2);
  return num1;
};
