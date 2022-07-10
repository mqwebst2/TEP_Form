/* eslint-disable quotes */
/* eslint-disable semi */
document.getElementById("app").addEventListener(
  "blur",
  function (event) {
    // Validate form questions
    const isValid = event.target.validity.valid;
    const validMessage = event.target.validationMessage;
    const questionValidationId = event.target.getAttribute("aria-describedby");
    const questionValidation = questionValidationId
      ? document.getElementById(questionValidationId)
      : false;

    if (questionValidation && validMessage && isValid) {
      questionValidation.innerText = validMessage;
    } else {
      questionValidation.innerText = "";
    }
  },
  true
);

const checkboxInput = document.querySelector('[name="form-checkbox"]');

checkboxInput.addEventListener("invalid", () => {
  checkboxInput.setCustomValidity("Please select one of the checkbox options.");
});
