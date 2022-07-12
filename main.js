/* eslint-disable quotes */
/* eslint-disable semi */
// eslint-disable-next-line no-unused-vars, space-before-function-paren
function submitOutput() {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const output = document.getElementById("output");
    const form = document.getElementById("form");
    const formData = new FormData(form);

    const input = [];
    let valueString = "";
    let newParagraph = "";

    for (const value of formData.values()) {
      valueString = value;
      input.push(valueString);
    }

    for (let i = 0; i < input.length; i++) {
      newParagraph = document.createElement("p");
      newParagraph.innerHTML = input[i];
      output.appendChild(newParagraph);
    }

    console.log(input);
  });
}
