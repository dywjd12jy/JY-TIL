console.log("Q_1");
console.log(
  "다음 배열에서 '라'를 모두 제거하세요. indexOf 와 splice 를 사용하세요."
);

// 나
{
  const arr = ["가", "라", "다", "라", "마", "라"];
  let arrIndex = arr.indexOf("라"); // 1
  while (arrIndex > -1) {
    arr.splice(arrIndex, 1);
    arrIndex = arr.indexOf("라");
  }
  console.log(arr);
}

// 제로초
{
  const arr = ["가", "라", "다", "라", "마", "라"];
  while (arr.indexOf("라") > -1) {
    arr.splice(arr.indexOf("라"), 1);
  }
  console.log(arr);
}
{
  const arr = ["가", "라", "다", "라", "마", "라"];
  let index = arr.indexOf("라"); // 1
  while (index > -1) {
    arr.splice(index, 1);
    index = arr.indexOf("라");
  }
  console.log(arr);
}

// waca
{
  const arr = ["가", "라", "다", "라", "마", "라"];
  let i = -1; // Typescript 적인 사고방식
  while ((i = arr.indexOf("라")) > -1) {
    arr.splice(i, 1);
  }
  console.log(arr);
}

console.log("Q_오해");
{
  const arr = [1, 2, 3, 4];
  if (arr.indexOf(1)) {
    console.log("1 찾음");
  } else {
    console.log("1 못찾음");
  }
  // "1 못찾음"
}
// arr.indexOf(1) // 0
// 0 은 falsy 이기에 false

{
  const arr = [1, 2, 3, 4];
  if (arr.indexOf(1) > -1) {
    console.log("1 찾음");
  } else {
    console.log("1 못찾음");
  }
  // 0을 어떻게 truthy 로 만들지 했는데
  // 그냥 조건문을 true 로 나오게 하면 되는거였다.. 바보 응 바보
  // "1 찾음"
}
