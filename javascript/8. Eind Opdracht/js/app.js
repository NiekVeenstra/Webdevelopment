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

function userInputRekenmachine() {
    const localCurrentNumber = document.getElementById("rekenmachineInput1").innerHTML;
  if (
    this.innerHTML == "0" ||
    this.innerHTML == "1" ||
    this.innerHTML == "2" ||
    this.innerHTML == "3" ||
    this.innerHTML == "4" ||
    this.innerHTML == "5" ||
    this.innerHTML == "6" ||
    this.innerHTML == "7" ||
    this.innerHTML == "8" ||
    this.innerHTML == "9"
  ) {
    if (localCurrentNumber.length === 0) {
      const inputNumber = parseInt(this.innerHTML);
      document.getElementById("rekenmachineInput1").innerHTML = `${inputNumber}`;
    }
  }
}

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
