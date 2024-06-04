import { isEmailValid } from "./util/isEmailValid.js"
import { isErrorElNotShows } from "./util/isErrorElNotShows.js"
import { isInputEmpty } from "./util/isInputEmpty.js"
import { isInputChecked } from "./util/isInputChecked.js"
import { addErrorStatus } from "./util/addErrorStatus.js"
import { removeErrorStatus } from "./util/removeErrorStatus.js"
import { removeErrorStatusText } from "./util/error-util/removeErrorStatusText.js"
import { isRadioChecked } from "./util/isRadioChecked.js"

const firstNameInput = document.querySelector("#first-name"),
  lastNameInput = document.querySelector("#last-name"),
  emailInput = document.querySelector("#email"),
  radioInputs = document.querySelectorAll('input[type="radio"]'),
  msgInput = document.querySelector("#message"),
  consentCheckboxInput = document.querySelector("#consent")

const btnSubmit = document.querySelector("#submit")

btnSubmit.addEventListener("click", () => {
  if (isInputEmpty(firstNameInput) && isErrorElNotShows(firstNameInput)) {
    addErrorStatus(firstNameInput)
  } else if (
    !isInputEmpty(firstNameInput) &&
    !isErrorElNotShows(firstNameInput)
  ) {
    removeErrorStatus(firstNameInput)
  }

  if (isInputEmpty(lastNameInput) && isErrorElNotShows(lastNameInput)) {
    addErrorStatus(lastNameInput)
  } else if (
    !isInputEmpty(lastNameInput) &&
    !isErrorElNotShows(lastNameInput)
  ) {
    removeErrorStatus(lastNameInput)
  }

  if (
    isInputEmpty(emailInput) &&
    !isEmailValid(emailInput.value) &&
    isErrorElNotShows(emailInput)
  ) {
    addErrorStatus(emailInput, "Please enter a valid email address")
  } else if (
    !isInputEmpty(emailInput) &&
    isEmailValid(emailInput.value) &&
    !isErrorElNotShows(emailInput)
  ) {
    removeErrorStatus(emailInput)
  }

  if (isInputEmpty(msgInput) && isErrorElNotShows(msgInput)) {
    addErrorStatus(msgInput)
  } else if (!isInputEmpty(msgInput) && !isErrorElNotShows(msgInput)) {
    removeErrorStatus(msgInput)
  }

  if (
    !isRadioChecked(radioInputs) &&
    isErrorElNotShows(document.querySelector(".selections-container"))
  ) {
    addErrorStatus(
      radioInputs[0],
      "Please select a query type",
      ".selections-container"
    )
  } else if (
    isRadioChecked(radioInputs) &&
    !isErrorElNotShows(document.querySelector(".selections-container"))
  ) {
    removeErrorStatusText(document.querySelector(".selections-input"))
  }

  if (
    !isInputChecked(consentCheckboxInput) &&
    isErrorElNotShows(document.querySelector('label[for="consent"]'))
  ) {
    addErrorStatus(
      consentCheckboxInput,
      "To submit this form, please consent to being contacted",
      ".consent-section"
    )
  } else if (
    isInputChecked(consentCheckboxInput) &&
    !isErrorElNotShows(document.querySelector('label[for="consent"]'))
  ) {
    removeErrorStatusText(document.querySelector('label[for="consent"]'))
  }
})
