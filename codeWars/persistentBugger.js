function persistence(num) {
  if (num < 10) {
    // if num is a single digit number, return 0
    return 0;
  }

  let persistenceCount = 0;

  while (num >= 10) {
    // convert the number to a string and split it into digits
    const temp = Array.from(num.toString());

    const digits = temp.map(Number);

    // multiply the digits together
    num = digits.reduce((product, digit) => product * digit, 1);

    persistenceCount++;
  }

  return persistenceCount;
}

// Driver code
const input = 39;
persistence(input);
