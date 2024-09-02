const input = document.getElementById("number");
const output = document.getElementById("result");
const button = document.getElementById("calculate");

const solution = () => {
  const number = input.value;
  let multiplier = 0;
  for (i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplier += i;
    }
  }
  output.innerText = "Output : " + multiplier;
};

button.addEventListener("click", solution);

//This code add every
// multiplier of 3 and 5 before the inputed number
// if a number is both a
// multiplier of 3 and 5 just add it once
