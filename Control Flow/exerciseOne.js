// Exercise 1: Check if a number is positive, negative, or zero.

const numberChecker = (num) => {
  if (num == 0) {
    return console.log("Number is equal to 0");
  } else if (num > 0) {
    return console.log("Number is positive");
  } else if (num < 0) {
    return console.log("Numbers i negative");
  } else {
    console.log("Number is not a number");
  }
};

numberChecker(0);
numberChecker(5);
numberChecker(-3);
