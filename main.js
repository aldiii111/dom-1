const body = document.body;

import {
  form1,
  form2,
  tagInfo,
  idInfo,
  classInfo,
  textInfo,
  pTarget,
  ppTarget,
  pppTarget,
  alert1,
  alert2,
  alert3,
  colorrr,
} from "./exportir.js";

pTarget.addEventListener("mouseover", in1)
ppTarget.addEventListener("mouseover", in2)
pppTarget.addEventListener("mouseover", in3)

pTarget.addEventListener("mouseout", out1)
ppTarget.addEventListener("mouseout", out2)
pppTarget.addEventListener("mouseout", out3)

function in1() {
  alert1.textContent = "id = pTarget";
  alert1.style.color = "red";
}
function in2() {
  alert2.textContent = "id = ppTarget";
  alert2.style.color = "red";
}
function in3() {
  alert3.textContent = "id = pppTarget";
  alert3.style.color = "red";
}

function out1() {
  alert1.textContent = "";
}
function out2() {
  alert2.textContent = "";
}
function out3() {
  alert3.textContent = "";
}

let result;

form1.addEventListener("submit", function (event) {
  event.preventDefault();

  const input1 = document.getElementById("input1").value;

  if (input1 === "pTarget") {
    tagInfo.textContent = "<h1>";
    tagInfo.style.color = "blue";
    idInfo.textContent = "pTarget";
    idInfo.style.color = "blue";
    classInfo.textContent = "h1-class";
    classInfo.style.color = "blue";
    textInfo.textContent = "ini contoh elemen h1";
    textInfo.style.color = "blue";
    result = input1;
  } else if (input1 === "ppTarget") {
    tagInfo.textContent = "<p>";
    tagInfo.style.color = "purple";
    idInfo.textContent = "ppTarget";
    idInfo.style.color = "purple";
    classInfo.textContent = "p-class";
    classInfo.style.color = "purple";
    textInfo.textContent = "ini paragraph";
    textInfo.style.color = "purple";
    result = input1;
  } else if (input1 === "pppTarget") {
    tagInfo.textContent = "<button>";
    tagInfo.style.color = "green";
    idInfo.textContent = "pppTarget";
    idInfo.style.color = "green";
    classInfo.textContent = "button-class";
    classInfo.style.color = "green";
    textInfo.textContent = "ini button";
    textInfo.style.color = "green";
    result = input1;
  }
});

form2.addEventListener("submit", function (event) {
  event.preventDefault();

  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  const input4 = document.getElementById("input4").value;
  const input33 = parseFloat(input3);

  if (result === "pTarget") {
    if (colorrr.includes(input2)) pTarget.style.color = input2;

    if (input3) {
      isNaN(input33)
        ? alert("harus number")
        : (pTarget.style.fontSize = input33 + "px");
    }
    if (input4 !== "") pTarget.textContent = input4;
  }
  if (result === "ppTarget") {
    if (colorrr.includes(input2)) ppTarget.style.color = input2;

    if (input3) {
      isNaN(input33)
        ? alert("harus number")
        : (ppTarget.style.fontSize = input33 + "px");
    }
    if (input4 !== "") ppTarget.textContent = input4;
  }
  if (result === "pppTarget") {
    if (colorrr.includes(input2)) pppTarget.style.color = input2;

    if (input3) {
      isNaN(input33)
        ? alert("harus number")
        : (pppTarget.style.fontSize = input33 + "px");
    }
    if (input4 !== "") pppTarget.textContent = input4;
  }
});
