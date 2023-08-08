// + (1)
function addition(arg1, arg2) {
  return arg1 + arg2;
}
// * (2)
function multiplication(arg1, arg2) {
  return arg1 * arg2;
}
// - (3)
function subtraction(arg1, arg2) {
  return arg1 - arg2;
}
// / (4)
function division(arg1, arg2) {
  return arg1 / arg2;
}
// The big number (5)
function bigNumber(arg1, arg2) {
  if (arg1 > arg2) {
    return arg1;
  } else {
    return arg2;
  }
}
// if even number (6)
function evenNumber(num) {
  if (num % 2 === 0) {
    return "even number!";
  } else {
    return "Odd!";
  }
}
// Triangle Area (7)
function TriangleArea(arg1, arg2) {
  return (arg1 * arg2) / 2;
}
// area of ​​a circle(8)
function areaCircle(r) {
  return Math.PI * r ** 2;
}
// Circumference of a circle(9)
function CircumferenceCircle(r) {
  return 2 * Math.PI * r;
}
// two strings(10)
function strings1(str1, str2) {
  return str1.length > str2.length ? str1 : str2;
}
// UpperCase(11)
function UpperCase(str){
  return str[0].toUpperCase() + str.substring(1)

}
console.log(UpperCase('akiva'));
