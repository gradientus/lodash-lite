const people = {
  phil: 7685,
  eddie: 'funny',
  kari: true,
  carol: 'aunt',
  ken: [90, 7695, 80030],
  marv: {age: 93, state: 'ca'}
};

let test = 1;


function findKey(obj, predicate(obj) {
  for (const prop in obj) {
    let value = obj[prop];
    let predicateReturnValue = predicate(value);
    if (predicateReturnValue) {
      return prop;
    }
  }
  return undefined;
}
