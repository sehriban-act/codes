function isPal(params) {
  digits = params.toString();
  arr = [];
  for (let i = 0; i < digits.length; i++) {
    arr.push(digits.charAt(i));
  }
  reverseArr = arr.reverse().join("");
  str = JSON.parse(reverseArr);
  if (arr !== reverseArr) {
    return false;
  }

  return true;
}
console.log(isPal(12321));
