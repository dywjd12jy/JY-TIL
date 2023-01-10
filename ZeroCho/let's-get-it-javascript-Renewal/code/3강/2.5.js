const PeopleLength = document.getElementById("peple-length");

let people = [];
let startText = "";
let firstIndex = "";
let lastIndex = "";
let targetIndex = 2;

const getTargetBox = (index) => {
  return document.querySelector(`.input-box-${index}`);
};

// 2. prompt, alert, confirm
const InputNumber = 4;
// const InputNumber = parseInt(prompt("몇 명이 참가하나요?"), 10); // 10 진법
// const QuestionLength = InputNumber + "명이 맞나요?";
// const YorN = confirm(QuestionLength);

for (let i = 1; i <= InputNumber; i++) {
  people.push(i);
}

const onAddClick = (value) => {
  let inputValue = document.querySelector(`.input-box-${value} input`).value;
  console.log(inputValue);
  getTargetBox(value).classList.remove("active");
  // const nextTargetIndex= value === InputNumber ? 1 : value + 1;
  if (value === InputNumber) {
    targetIndex = 1;
  } else {
    targetIndex = value + 1;
  }
  getTargetBox(targetIndex).classList.add("active");
  document.querySelector(".target-user").innerHTML = targetIndex + "번째 순서";
  inputValue = "";
  console.log(inputValue);
};

const SetInputBox = (value) => {
  const IdTextInput = document.getElementById("text-input");
  const AddBox = document.createElement("div");
  const AddH3 = document.createElement("h3");
  const AddInput = document.createElement("input");
  const AddButton = document.createElement("button");
  AddBox.setAttribute("class", `input-box-${value}`);
  AddInput.setAttribute("data-input", `${value}`);
  AddBox.setAttribute("data-box", `${value}`);
  AddButton.setAttribute("onclick", `onAddClick(${value})`);
  AddH3.innerText = value + "번째";
  AddButton.innerText = "입력";
  AddBox.appendChild(AddH3);
  AddBox.appendChild(AddInput);
  AddBox.appendChild(AddButton);
  IdTextInput.appendChild(AddBox);
};

people.map((value) => {
  const AddTag = document.createElement("span");
  AddTag.innerHTML = value + "번째";
  PeopleLength.appendChild(AddTag);
  // console.log(AddTag);
});

const InputLength = document.querySelectorAll(
  ".input-box-1,.input-box-2,.input-box-3"
);

const Word = document.getElementById("word");

const onStartClick = () => {
  startText = prompt("첫번째 순서입니다. 제시어를 입력해주세요.");
  if (!startText) {
    alert("제시어를 입력하여 게임을 시작해보세요.");
    startText = prompt("제시어를 입력해주세요.");
  }
  if (startText === "") {
    alert("제시어를 입력하여 게임을 시작해보세요.");
    startText = prompt("제시어를 입력해주세요.");
  } else {
    Word.innerText = startText;
    firstIndex = startText.substring(0, 1);
    lastIndex = startText.substring(startText.length + 1, 1);
    // console.log(firstIndex);
    // console.log(lastIndex);
    people.map((value) => {
      SetInputBox(value);
    });
    const targetBox = getTargetBox(targetIndex);
    targetBox.classList.add("active");
    document.querySelector(".button-start").classList.add("active");
    document.querySelector(".target-user").innerHTML =
      targetIndex + "번째 순서";
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
