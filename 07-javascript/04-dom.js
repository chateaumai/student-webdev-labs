// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

const userInput = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const output = document.querySelector(".output");

copyButton.addEventListener("click", () => {
  output.textContent = userInput.value;
});

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

const userInput2 = document.getElementById("userInput2");
const inputSection = document.getElementById("inputEventExample");
const outputParagraph = inputSection.querySelector("p:last-of-type");

userInput2.addEventListener("input", () => {
  outputParagraph.textContent = userInput2.value;
});
