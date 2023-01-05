const PeopleLength = document.getElementById("peple-length");

let People = [];
let StartText = "";
// 2. prompt, alert, confirm
const InputNumber = 4;
// const InputNumber = parseInt(prompt("몇 명이 참가하나요?"), 10); // 10 진법
// const QuestionLength = InputNumber + "명이 맞나요?";
// const YorN = confirm(QuestionLength);

for (let i = 1; i <= InputNumber; i++) {
  People.push(i);
}

People.map((value) => {
  const AddTag = document.createElement("span");
  AddTag.innerHTML = value + "번째";
  PeopleLength.appendChild(AddTag);
  console.log(AddTag);
});

const Word = document.getElementById("word");

const onStartClick = () => {
  Word.innerText = prompt("제시어를 입력해주세요.");
  StartText;
};

// 5. eventlistener
document.querySelector("input").addEventListener("input", function () {
  console.log("글자 입력");
});
document.querySelector("button").addEventListener("click", function () {
  console.log("버튼 클릭");
});
