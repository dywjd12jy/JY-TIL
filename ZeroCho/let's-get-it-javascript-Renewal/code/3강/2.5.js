const PeopleLength = document.getElementById("peple-length");

let People = [];
let StartText = "";
let FirstIndex = "";
let LastIndex = "";
let TargetIndex = "";
// 2. prompt, alert, confirm
const InputNumber = 4;
// const InputNumber = parseInt(prompt("몇 명이 참가하나요?"), 10); // 10 진법
// const QuestionLength = InputNumber + "명이 맞나요?";
// const YorN = confirm(QuestionLength);

for (let i = 1; i <= InputNumber; i++) {
  People.push(i);
}

const SetInputBox = (value) => {
  const IdTextInput = document.getElementById("text-input");
  const AddBox = document.createElement("div");
  const AddH3 = document.createElement("h3");
  const AddInput = document.createElement("input");
  const AddButton = document.createElement("button");
  AddBox.setAttribute("class", `input-box-${value}`);
  AddInput.setAttribute("data-input", `${value}`);
  AddBox.setAttribute("data-button", `${value}`);
  AddH3.innerText = value + "번째";
  AddButton.innerText = "입력";
  AddBox.appendChild(AddH3);
  AddBox.appendChild(AddInput);
  AddBox.appendChild(AddButton);
  IdTextInput.appendChild(AddBox);
};

People.map((value) => {
  const AddTag = document.createElement("span");
  AddTag.innerHTML = value + "번째";
  PeopleLength.appendChild(AddTag);
  console.log(AddTag);
});

const InputLength = document.querySelectorAll(
  ".input-box-1,.input-box-2,.input-box-3"
);
console.log(InputLength);

const Word = document.getElementById("word");

const onStartClick = () => {
  StartText = prompt("첫번째 순서입니다. 제시어를 입력해주세요.");
  if (!StartText) {
    alert("제시어를 입력하여 게임을 시작해보세요.");
    StartText = prompt("제시어를 입력해주세요.");
  }
  if (StartText === "") {
    alert("제시어를 입력하여 게임을 시작해보세요.");
    StartText = prompt("제시어를 입력해주세요.");
  } else {
    Word.innerText = StartText;
    FirstIndex = StartText.substring(0, 1);
    LastIndex = StartText.substring(StartText.length - 1, 1);
    People.map((value) => {
      SetInputBox(value);
    });
    TargetIndex = 2;
  }
};

// prompt(`"${StartText}" 다음 단어를 입력해주세요.`);

// 5. eventlistener
document.querySelector("input").addEventListener("input", function () {
  console.log("글자 입력");
});
document.querySelector("button").addEventListener("click", function () {
  console.log("버튼 클릭");
});
