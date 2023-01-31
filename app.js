const buttons = document.querySelectorAll(".number, .operator");
const displayOutput = document.querySelector(".output-value");
const displayHistory = document.querySelector("#history-value");
let history = "";
let output = "";
let evaluate = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "AC") {
      displayHistory.innerText = "";
      displayOutput.innerText = "";
      history = "";
      output = "";
      evaluate = "";
    } else if (value === "C") {
      displayOutput.innerText = "";
      output = "";
    } else if (value === "=") {
      displayHistory.innerText = history;
      evaluate = output;
      if (evaluate) {
        displayOutput.innerText = eval(evaluate);
      }
    } else {
      output += value;
      displayOutput.innerText = output;
      history += value;
    }
  });
});
