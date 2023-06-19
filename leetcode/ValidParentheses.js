var isValid = function (s) {
  const open = new Set("({[");
  const close = new Set(")}]");

  // If char is opening, push to stack
  // If closing, pop stack
};

// Driver code
const input = "()[]{}"; // "{[]}"
console.log(isValid(input));
