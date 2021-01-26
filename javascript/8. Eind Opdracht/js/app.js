//const userInput = document.getElementsByClassName(".rekenmachine__input__buttons");
// const userInput = document.querySelectorAll("button");
// const currentNumber = document.getElementById("rekenmachineInput1").innerHTML;

// const test = () => {
//   const currentNumber = document.getElementById("rekenmachineInput1").innerHTML;
//   console.log(`length is ${currentNumber.length}`);
// };

// for (let input of userInput) {
//   input.addEventListener("click", userInputRekenmachine);
// }

// const checkEmpty = () => {
//   const innerCurrentNumber = document.getElementById("rekenmachineInput1").innerHTML;
//   if (innerCurrentNumber.length == 0) {
//     document.getElementById("rekenmachineInput0").innerHTML = 0;
//   } else {
//     document.getElementById("rekenmachineInput0").innerHTML = "";
//   }
// };

// function userInputRekenmachine() {
//   const inputNumber = this.innerHTML;
//   console.log("this:", this.innerHTML);
//   console.log("type:", typeof this.innerHTML);
//   /*numbers*/
//   const localCurrentNumber1 = document.getElementById("rekenmachineInput1").innerHTML;
//   const localCurrentNumber2 = document.getElementById("rekenmachineInput2").innerHTML;
//   const localCurrentNumber3 = document.getElementById("rekenmachineInput3").innerHTML;
//   const localCurrentNumber4 = document.getElementById("rekenmachineInput4").innerHTML;
//   const localCurrentNumber5 = document.getElementById("rekenmachineInput5").innerHTML;
//   const localCurrentNumber6 = document.getElementById("rekenmachineInput6").innerHTML;
//   const localCurrentNumber7 = document.getElementById("rekenmachineInput7").innerHTML;
//   const localCurrentNumber8 = document.getElementById("rekenmachineInput8").innerHTML;
//   const localCurrentNumber9 = document.getElementById("rekenmachineInput9").innerHTML;
//   const localCurrentNumber10 = document.getElementById("rekenmachineInput10").innerHTML;
//   /*math symbols*/
//   const devide = document.getElementById("/").innerHTML;
//   // const times = document.getElementById("x").innerHTML;
//   // const minus = document.getElementById("-").innerHTML;
//   // const plus = document.getElementById("+").innerHTML;
//   // const is = document.getElementById("=").innerHTML;
//   if (
//     inputNumber == 0 ||
//     inputNumber == 1 ||
//     inputNumber == 2 ||
//     inputNumber == 3 ||
//     inputNumber == 4 ||
//     inputNumber == 5 ||
//     inputNumber == 6 ||
//     inputNumber == 7 ||
//     inputNumber == 8 ||
//     inputNumber == 9 ||
//     inputNumber == "/" ||
//     inputNumber == "x" ||
//     inputNumber == "-" ||
//     inputNumber == "+"
//   ) {
//     document.getElementById("AC").innerHTML = "C";
//     switch (
//       localCurrentNumber1.length +
//       localCurrentNumber2.length +
//       localCurrentNumber3.length +
//       localCurrentNumber4.length +
//       localCurrentNumber5.length +
//       localCurrentNumber6.length +
//       localCurrentNumber7.length +
//       localCurrentNumber8.length +
//       localCurrentNumber9.length +
//       localCurrentNumber10.length
//     ) {
//       case 0:
//         document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
//         break;
//       case 1:
//         document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
//         document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
//         break;
//       case 2:
//         document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
//         document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
//         document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
//         break;
//       case 3:
//         document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
//         document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
//         document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
//         document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
//         break;
//       case 4:
//         document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
//         document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
//         document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
//         document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
//         document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
//         break;
//       case 5:
//         document.getElementById("rekenmachineInput6").innerHTML = `${localCurrentNumber5}`;
//         document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
//         document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
//         document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
//         document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
//         document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
//         break;
//       case 6:
//         document.getElementById("rekenmachineInput7").innerHTML = `${localCurrentNumber6}`;
//         document.getElementById("rekenmachineInput6").innerHTML = `${localCurrentNumber5}`;
//         document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
//         document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
//         document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
//         document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
//         document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
//         break;
//       case 7:
//         document.getElementById("rekenmachineInput8").innerHTML = `${localCurrentNumber7}`;
//         document.getElementById("rekenmachineInput7").innerHTML = `${localCurrentNumber6}`;
//         document.getElementById("rekenmachineInput6").innerHTML = `${localCurrentNumber5}`;
//         document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
//         document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
//         document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
//         document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
//         document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
//         break;
//       case 8:
//         document.getElementById("rekenmachineInput9").innerHTML = `${localCurrentNumber8}`;
//         document.getElementById("rekenmachineInput8").innerHTML = `${localCurrentNumber7}`;
//         document.getElementById("rekenmachineInput7").innerHTML = `${localCurrentNumber6}`;
//         document.getElementById("rekenmachineInput6").innerHTML = `${localCurrentNumber5}`;
//         document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
//         document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
//         document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
//         document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
//         document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
//         break;
//       case 9:
//         document.getElementById("rekenmachineInput10").innerHTML = `${localCurrentNumber9}`;
//         document.getElementById("rekenmachineInput9").innerHTML = `${localCurrentNumber8}`;
//         document.getElementById("rekenmachineInput8").innerHTML = `${localCurrentNumber7}`;
//         document.getElementById("rekenmachineInput7").innerHTML = `${localCurrentNumber6}`;
//         document.getElementById("rekenmachineInput6").innerHTML = `${localCurrentNumber5}`;
//         document.getElementById("rekenmachineInput5").innerHTML = `${localCurrentNumber4}`;
//         document.getElementById("rekenmachineInput4").innerHTML = `${localCurrentNumber3}`;
//         document.getElementById("rekenmachineInput3").innerHTML = `${localCurrentNumber2}`;
//         document.getElementById("rekenmachineInput2").innerHTML = `${localCurrentNumber1}`;
//         document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
//         break;
//     }
//   }
//   if (inputNumber == "/" || inputNumber == "x" || inputNumber == "-" || inputNumber == "+") {
//     this.style.backgroundColor = "green";
//     this.style.color = "orange";
//     setTimeout(() => {
//       this.style.backgroundColor = "";
//       this.style.color = "";
//     }, 500);
//   }
//   checkEmpty();
// }

// async function changeButton() {
//   await changeColor();
// }

// const changeColor = () => {
//   this.style.backgroundColor = "green";
//   this.style.color = "orange";
// };

// checkEmpty();

const buttons = document.querySelectorAll("button");
let outputScreen = document.getElementById("rekenmachineInput1");

for (let button of buttons) {
  button.addEventListener("click", userInputRekenmachine);
}

function userInputRekenmachine() {
  let userInput = this.innerHTML;
  document.getElementById("AC").innerHTML = "C";
  if (userInput == "/" || userInput == "*" || userInput == "+" || userInput == "-") {
    this.style.backgroundColor = "green";
    setTimeout(() => {
      this.style.backgroundColor = "";
    }, 500);
  }
  if (userInput == "=") {
    let output = outputScreen.innerHTML;
    let outputArray = output.split("");
    if (outputArray[outputArray.length-1] == "-") {
      console.log("yeah");
      console.log(outputArray.slice(-1));
      console.log(outputArray[outputArray.length-2]);
      let answer = parseFloat(eval(outputArray[outputArray.length-2])) - parseFloat(eval(outputArray[outputArray.length-2]));
      outputScreen.innerHTML = answer;
    } else {
      outputScreen.innerHTML = parseFloat(eval(outputScreen.innerHTML));
    }
  } else if (userInput == "AC" || userInput == "C") {
    outputScreen.innerHTML = 0;
    document.getElementById("AC").innerHTML = "AC";
  } else if (userInput == "+/-") {
    outputScreen.innerHTML = outputScreen.innerHTML * -1;
  } else if (outputScreen.innerHTML == "0") {
    outputScreen.innerHTML = userInput;
  } else {
    outputScreen.innerHTML += userInput;
  }
}
