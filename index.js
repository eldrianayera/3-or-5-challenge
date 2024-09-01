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
