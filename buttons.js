// Custom error classes
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class DivisionByZeroError extends Error {
  constructor() {
    super("Cannot divide by zero.");
    this.name = "DivisionByZeroError";
  }
}

class InvalidInputError extends Error {
  constructor(field, value) {
    super(`Invalid input in field "${field}": "${value}" is not a number.`);
    this.name = "InvalidInputError";
    this.field = field;
    this.value = value;
  }
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let output = document.querySelector("output");
  let firstNum = document.querySelector("#first-num").value;
  let secondNum = document.querySelector("#second-num").value;
  let operator = document.querySelector("#operator").value;
  //Step 3: Add error handling using try/catch/finally
  try {
    // handle first field is empty
    if (firstNum === "")
      throw new ValidationError("First field cannot be empty.", "first-num");
    // handle second field is empty
    if (secondNum === "")
      throw new ValidationError("Second field cannot be empty.", "second-num");
    // handle when either field is not a number
    if (isNaN(firstNum) || isNaN(secondNum))
      throw new InvalidInputError("a field", firstNum || secondNum);
    // handle division by zero
    if (operator === "/" && Number(secondNum) === 0)
      throw new DivisionByZeroError();

    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);

    // catch error and display error message in output element
  } catch (e) {
    console.error(`[${e.name}] ${e.message}`);
    output.innerHTML = `${e.name}: ${e.message}`;
  } finally {
    console.log("Calculator attempted:", firstNum, operator, secondNum);
  }
});

let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

// Start your code here
// You may move this JS to another file if you wish -- moved to buttons.js file

//Console Log (index 0)
errorBtns[0].addEventListener("click", () => {
  console.log("Console Log Demo!");
});

//Console Error (index 1)
errorBtns[1].addEventListener("click", () => {
  console.error("Console Error Demo!");
});

//Console Count (index 2)
errorBtns[2].addEventListener("click", () => {
  console.count("Count Button");
});

//Console Warn (index 3)
errorBtns[3].addEventListener("click", () => {
  console.warn("Console Warn Button");
});

//Console Assert (index 4)
errorBtns[4].addEventListener("click", () => {
  let num = 5;
  console.assert(2 == num, {
    number: 2,
    errorMsg: "The number does not equal 3",
  });
});

//Console Clear (index 5)
errorBtns[5].addEventListener("click", () => {
  console.clear();
});

//Console Dir (index 6)
errorBtns[6].addEventListener("click", () => {
  console.dir(errorBtns[6]);
});

// Console Dirxml (index 7)
errorBtns[7].addEventListener("click", () => {
  console.dirxml(errorBtns[7]);
});

// Console Group Start (index 8)
errorBtns[8].addEventListener("click", () => {
  console.group("console.group");
});

// Console Group End (index 9)
errorBtns[9].addEventListener("click", () => {
  console.groupEnd();
});

// Console Table (index 10)
errorBtns[10].addEventListener("click", () => {
  const data = [
    { name: "A", grade: "A", lab: 9 },
    { name: "B", grade: "B", lab: 9 },
    { name: "C", grade: "C", lab: 9 },
  ];
  console.table(data);
});

// Start Timer (index 11)
errorBtns[11].addEventListener("click", () => {
  console.time("Timer Button");
  console.log("Timer started!");
});

// End Timer (index 12)
errorBtns[12].addEventListener("click", () => {
  console.timeEnd("Timer Button");
});

// Console Trace (index 13)
errorBtns[13].addEventListener("click", function handleBtnClick() {
  function deep() {
    function deeper() {
      function deepest() {
        console.trace();
      }
      deepest();
    }
    deeper();
  }
  deep();
});
