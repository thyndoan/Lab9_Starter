let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let output = document.querySelector("output");
  let firstNum = document.querySelector("#first-num").value;
  let secondNum = document.querySelector("#second-num").value;
  let operator = document.querySelector("#operator").value;
  //Step 3: Add error handling using try/catch/finally
  try {
    // Validate that inputs are not empty
    if (firstNum === "" || secondNum === "") {
      throw new Error("Both fields must be filled in. ");
    }

    // Validate that inputs are actually numbers
    if (isNaN(firstNum) || isNaN(secondNum)) {
      throw new Error("Inputs must be valid numbers.");
    }

    // Validate division by zero
    if (operator === "/" && Number(secondNum) === 0) {
      throw new Error("Cannot divide by zero.");
    }

    let result = eval(`${firstNum} ${operator} ${secondNum}`);
    output.innerHTML = result;
  } catch (e) {
    console.error("Calculator error:", e.message);
    output.innerHTML = `Error: ${e.message}`;
  } finally {
    console.log(
      "Calculator finished. Inputs were:",
      firstNum,
      operator,
      secondNum,
    );
  }
});

let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

// Start your code here
// You may move this JS to another file if you wish -- moved to buttons.js file

//Console Log (index 0)
errorBtns[0].addEventListener("click", () => {
  console.log("Console Log demo!", { name: "Thy", lab: "9" });
});

//Console Error (index 1)
errorBtns[1].addEventListener("click", () => {
  console.error("Console Error demo! Something went wrong here.");
});

//Console Count (index 2)
errorBtns[2].addEventListener("click", () => {
  console.count("Button click!");
});

//Console Warn (index 3)
errorBtns[3].addEventListener("click", () => {
  console.warn("Console Warn demo! This is a warning");
});

//Console Assert (index 4)
errorBtns[4].addEventListener("click", () => {
  console.assert(1 === 2, "Console Assert demo! This assertion is false"); //This shows error message
  console.assert(1 === 1, "Console Assert demo! This assertion is true"); //This does not show anything
});

//Console Clear (index 5)
errorBtns[5].addEventListener("click", () => {
  console.clear();
});

//Console Dir (index 6)
errorBtns[6].addEventListener("click", () => {
  console.dir(document.querySelector("form"));
});

// Console Dirxml (index 7)
errorBtns[7].addEventListener("click", () => {
  console.dirxml(document.querySelector("form"));
});

// Console Group Start (index 8)
errorBtns[8].addEventListener("click", () => {
  console.group("Student Info Group");
  console.log("Name: Thy");
  console.log("Lab: 9");
  console.log("Course: CSE 110");
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
  console.time("myTimer");
  console.log("Timer started!");
});

// End Timer (index 12)
errorBtns[12].addEventListener("click", () => {
  console.timeEnd("myTimer");
});

// Console Trace (index 13)
errorBtns[13].addEventListener("click", () => {
  function inner() {
    console.trace("Console Trace demo — here's the call stack:");
  }
  function outer() {
    inner();
  }
  outer();
});
