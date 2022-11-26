// 별찍기

// 1번
// *
// **
// ***
// ****
// *****
var star1 = "";
for (var i = 0; i < 5; i++) {
  // star = "*" + star;
  star1 += "*";
  console.log(star1);
}
console.log("----------1번");

// 2-1번
// *****
// ****
// ***
// **
// *

var star2 = "";
for (var j = 5; j > 0; j--) {
  // j //5
  // j //4
  star2 = "";
  // star2 // "" //""

  for (var k = j; k >= 1; k--) {
    // k //5 //4 //3 //2 //1
    // k //4 //3 //2 //1
    star2 = star2 + "*";
    // star2 // "*" //"**" //"***" //"****" //"*****"
    // star2 // "*" //"**" //"***" //"****"
  }
  console.log(star2);
}
console.log("----------2-1번");

// 2-2번
var star3 = "";
for (var l = 5; l > 0; l--) {
  console.log("*".repeat(l));
}
console.log("----------2-2번");

// 2-3번
for (var p = 0; p < 6; p++) {
  console.log("*".repeat(5 - p));
}
console.log("----------2-3번");

//3-1번
for (var m = 1; m < 10; m = m + 2) {
  console.log("*".repeat(m));
}
console.log("------------3-1번");

//3-2번
for (var m = 9; m > 0; m = m - 2) {
  console.log("*".repeat(m));
}
console.log("------------3-2번");

//4-1번
let star = "";
for (var n = 0; n < 5; n++) {
  star = " ".repeat(n) + "*".repeat(5 - n);
  console.log(star);
}
console.log("------------4-1번");

//4-2번
star = "";
for (var n = 0; n < 5; n++) {
  star = " ".repeat(n) + "*".repeat(5 - n);
  console.log(star);
}
console.log("------------4-2번");

// var star = () => {
//   for (var n = 5; n > 0; n--) {
//     console.log(n);
//   }
// };
// var space = () => {
//   for (var o = 0; o < 5; o++) {
//     console.log(o);
//   }
// };
// var rr = () => {
//   " ".repeat(space) + "*".repeat(star);
// };
// space();
// star();
// console.log(rr());

// console.log("------------4-1번");
