const body = document.body
const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')

const tagInfo = document.getElementById('tagInfo')
const idInfo = document.getElementById('idInfo')
const classInfo = document.getElementById('classInfo')
const textInfo = document.getElementById('textInfo')

const pTarget = document.getElementById('pTarget')
const ppTarget = document.getElementById('ppTarget')
const pppTarget = document.getElementById('pppTarget')

const alert1 = document.getElementById('alert1')
const alert2 = document.getElementById('alert2')
const alert3 = document.getElementById('alert3')

const colorrr = ["green", "yellow", "blue", "red", "black", "white", "grey"]

function in1() {
    alert1.textContent = "id = pTarget"
    alert1.style.color = "red"
}
function in2() {
    alert2.textContent = "id = ppTarget"
    alert2.style.color = "red"
}
function in3() {
    alert3.textContent = "id = pppTarget"
    alert3.style.color = "red"
}

function out1() {
    alert1.textContent = ""
}
function out2() {
    alert2.textContent = ""
}
function out3() {
    alert3.textContent = ""
}

form1.addEventListener("submit", function(event) {
    event.preventDefault();

    const input1 = document.getElementById('input1').value

    if(input1 === "pTarget") {
        tagInfo.textContent = "<h1>"
        tagInfo.style.color = "blue"
        idInfo.textContent = "pTarget"
        idInfo.style.color = "blue"
        classInfo.textContent = "h1-class"
        classInfo.style.color = "blue"
        textInfo.textContent = "ini contoh elemen h1"
        textInfo.style.color = "blue"
    }else if(input1 === "ppTarget") {
        tagInfo.textContent = "<p>"
        tagInfo.style.color = "purple"
        idInfo.textContent = "ppTarget"
        idInfo.style.color = "purple"
        classInfo.textContent = "p-class"
        classInfo.style.color = "purple"
        textInfo.textContent = "ini paragraph"
        textInfo.style.color = "purple"
    }else if(input1 === "pppTarget") {
        tagInfo.textContent = "<button>"
        tagInfo.style.color = "green"
        idInfo.textContent = "pppTarget"
        idInfo.style.color = "green"
        classInfo.textContent = "button-class"
        classInfo.style.color = "green"
        textInfo.textContent = "ini button"
        textInfo.style.color = "green"
    }
});

form2.addEventListener("submit", function(event){
    event.preventDefault();

    const input2 = document.getElementById('input2').value
    const input3 = document.getElementById('input3').value
    const input4 = document.getElementById('input4').value
    const input33 = parseFloat(input3)

    if(colorrr.includes(input2)) {
        pTarget.style.color = input2
    }
    if(input3) {
        if(isNaN(input33)) {
            alert('harus number')
            console.log('bukan number')
        }else{
            alert('number')
            console.log('number')
        }
    }
    if(input4 !== "") {
        pTarget.textContent = input4
    }
})