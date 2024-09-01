let multiplier = 0;

const solution = (number) => {
  for (i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplier += i;
    }
  }
  return multiplier;
};

console.log(solution(200));

//This code add every
// multiplier of 3 and 5 before the inputed number
// if a number is both a
// multiplier of 3 and 5 just add it once
``;
