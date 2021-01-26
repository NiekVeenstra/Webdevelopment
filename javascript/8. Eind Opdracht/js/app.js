//const userInput = document.getElementsByClassName(".rekenmachine__input__buttons");
const userInput = document.querySelectorAll("button");
const currentNumber = document.getElementById("rekenmachineInput1").innerHTML;

const test = () => {
  const currentNumber = document.getElementById("rekenmachineInput1").innerHTML;
  console.log(`length is ${currentNumber.length}`);
};

for (let input of userInput) {
  input.addEventListener("click", userInputRekenmachine);
}

const checkEmpty = () => {
  const innerCurrentNumber = document.getElementById("rekenmachineInput1").innerHTML;
  if (innerCurrentNumber.length == 0) {
    document.getElementById("rekenmachineInput0").innerHTML = 0;
  } else {
    document.getElementById("rekenmachineInput0").innerHTML = "";
  }
};

function userInputRekenmachine() {
  const inputNumber = this.innerHTML;
  console.log("this:", this.innerHTML);
  console.log("type:", typeof this.innerHTML);
  /*numbers*/
  const localCurrentNumber1 = document.getElementById("rekenmachineInput1").innerHTML;
  const localCurrentNumber2 = document.getElementById("rekenmachineInput2").innerHTML;
  const localCurrentNumber3 = document.getElementById("rekenmachineInput3").innerHTML;
  const localCurrentNumber4 = document.getElementById("rekenmachineInput4").innerHTML;
  const localCurrentNumber5 = document.getElementById("rekenmachineInput5").innerHTML;
  const localCurrentNumber6 = document.getElementById("rekenmachineInput6").innerHTML;
  const localCurrentNumber7 = document.getElementById("rekenmachineInput7").innerHTML;
  const localCurrentNumber8 = document.getElementById("rekenmachineInput8").innerHTML;
  const localCurrentNumber9 = document.getElementById("rekenmachineInput9").innerHTML;
  const localCurrentNumber10 = document.getElementById("rekenmachineInput10").innerHTML;
  /*math symbols*/
  const devide = document.getElementById("/").innerHTML;
  // const times = document.getElementById("x").innerHTML;
  // const minus = document.getElementById("-").innerHTML;
  // const plus = document.getElementById("+").innerHTML;
  // const is = document.getElementById("=").innerHTML;
  if (
    inputNumber == 0 ||
    inputNumber == 1 ||
    inputNumber == 2 ||
    inputNumber == 3 ||
    inputNumber == 4 ||
    inputNumber == 5 ||
    inputNumber == 6 ||
    inputNumber == 7 ||
    inputNumber == 8 ||
    inputNumber == 9 ||
    inputNumber == "/" ||
    inputNumber == "x" ||
    inputNumber == "-" ||
    inputNumber == "+"
  ) {
    document.getElementById("AC").innerHTML = "C";
    switch (
      localCurrentNumber1.length +
      localCurrentNumber2.length +
      localCurrentNumber3.length +
      localCurrentNumber4.length +
      localCurrentNumber5.length +
      localCurrentNumber6.length +
      localCurrentNumber7.length +
      localCurrentNumber8.length +
      localCurrentNumber9.length +
      localCurrentNumber10.length
    ) {
      case 0:
        document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
        break;
      case 1:
        document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
        document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
        break;
      case 2:
        document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
        document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
        document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
        break;
      case 3:
        document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
        document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
        document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
        document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
        break;
      case 4:
        document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
        document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
        document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
        document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
        document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
        break;
      case 5:
        document.getElementById("rekenmachineInput6").innerHTML = `${localCurrentNumber5}`;
        document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
        document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
        document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
        document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
        document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
        break;
      case 6:
        document.getElementById("rekenmachineInput7").innerHTML = `${localCurrentNumber6}`;
        document.getElementById("rekenmachineInput6").innerHTML = `${localCurrentNumber5}`;
        document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
        document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
        document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
        document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
        document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
        break;
      case 7:
        document.getElementById("rekenmachineInput8").innerHTML = `${localCurrentNumber7}`;
        document.getElementById("rekenmachineInput7").innerHTML = `${localCurrentNumber6}`;
        document.getElementById("rekenmachineInput6").innerHTML = `${localCurrentNumber5}`;
        document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
        document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
        document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
        document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
        document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
        break;
      case 8:
        document.getElementById("rekenmachineInput9").innerHTML = `${localCurrentNumber8}`;
        document.getElementById("rekenmachineInput8").innerHTML = `${localCurrentNumber7}`;
        document.getElementById("rekenmachineInput7").innerHTML = `${localCurrentNumber6}`;
        document.getElementById("rekenmachineInput6").innerHTML = `${localCurrentNumber5}`;
        document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
        document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
        document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
        document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
        document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
        break;
      case 9:
        document.getElementById("rekenmachineInput10").innerHTML = `${localCurrentNumber9}`;
        document.getElementById("rekenmachineInput9").innerHTML = `${localCurrentNumber8}`;
        document.getElementById("rekenmachineInput8").innerHTML = `${localCurrentNumber7}`;
        document.getElementById("rekenmachineInput7").innerHTML = `${localCurrentNumber6}`;
        document.getElementById("rekenmachineInput6").innerHTML = `${localCurrentNumber5}`;
        document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
        document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
        document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
        document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
        document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
        break;
    }
  }
  if (inputNumber == "/" || inputNumber == "x" || inputNumber == "-" || inputNumber == "+") {
    this.style.backgroundColor = "green";
    this.style.color = "orange";
    setTimeout(() => {
      this.style.backgroundColor = "";
      this.style.color = "";
    }, 500);
  }
  checkEmpty();
}

async function changeButton() {
  await changeColor();
}

const changeColor = () => {
  this.style.backgroundColor = "green";
  this.style.color = "orange";
};

checkEmpty();
// function userInputRekenmachine() {
//   let currentNumber = parseInt(document.getElementById("rekenmachineInput1").innerHTML);
//   console.log(this.innerHTML);
//   console.log(this.innerHTML);
//   if (
//     this.innerHTML == "0" ||
//     this.innerHTML == "1" ||
//     this.innerHTML == "2" ||
//     this.innerHTML == "3" ||
//     this.innerHTML == "4" ||
//     this.innerHTML == "5" ||
//     this.innerHTML == "6" ||
//     this.innerHTML == "7" ||
//     this.innerHTML == "8" ||
//     this.innerHTML == "9" ||
//     this.innerHTML == "."
//   ) {
//     console.log("this is a number");

//   }

//   else {
//       console.log("plus")
//   }
//   input = parseInt(this.innerHTML);
//   if (currentNumber === 0) {
//     console.log("hello im here");
//     document.getElementById("rekenmachineInput1").innerHTML = `${input}`;
//   } else {
//     //document.getElementById("rekenmachineInput2").innerHTML = `${input}`;
//     placeInputSideways(input);
//   }
// }

// const placeInputSideways = (input) => {
//   let currentNumber = parseInt(document.getElementById("rekenmachineInput1").innerHTML);
//   newInput = input;
//   console.log(newInput);
//   console.log(`lets place it sideways ${currentNumber}`);
//   document.getElementById("rekenmachineInput2").innerHTML = `${currentNumber}`;
//   document.getElementById("rekenmachineInput1").innerHTML = `${newInput}`;
// };
