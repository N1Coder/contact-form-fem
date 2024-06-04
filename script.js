import { addErrorStatusToInput } from "./util/addErrorStatusToInput.js"
import { addErrorStatusTextToParent } from "./util/addErrorStatusTextToParent.js"
import { isEmailValid } from "./util/isEmailValid.js"
import { isErrorElShows } from "./util/isErrorElShows.js"
import { isInputEmpty } from "./util/isInputEmpty.js"

const firstNameInput = document.querySelector("#first-name"),
  lastNameInput = document.querySelector("#last-name"),
  emailInput = document.querySelector("#email"),
  radioInput = document.querySelector('input[type="radio"]'),
  msgInput = document.querySelector("#message"),
  consentCheckboxInput = document.querySelector("#consent")

const btnSubmit = document.querySelector("#submit")

btnSubmit.addEventListener("click", () => {
  if (isInputEmpty(firstNameInput)) {
    addErrorStatusToInput(firstNameInput)

    if (isErrorElShows(firstNameInput)) {
      addErrorStatusTextToParent(firstNameInput, "This field is required")
    }
  }

  if (isInputEmpty(lastNameInput)) {
    addErrorStatusToInput(lastNameInput)

    if (isErrorElShows(lastNameInput)) {
      addErrorStatusTextToParent(lastNameInput, "This field is required")
    }
  }

  if (isInputEmpty(emailInput) || !isEmailValid(emailInput.value)) {
    addErrorStatusToInput(emailInput)

    if (isErrorElShows(emailInput)) {
      addErrorStatusTextToParent(
        emailInput,
        "Please enter a valid email address"
      )
    }
  }

  if (isInputEmpty(msgInput)) {
    addErrorStatusToInput(msgInput)

    if (isErrorElShows(msgInput)) {
      addErrorStatusTextToParent(msgInput, "This field is required")
    }
  }

  if (!isInputChecked(radioInput)) {
    if (isErrorElShows(radioInput)) {
      addErrorStatusTextToParent(
        radioInput,
        "Please select a query type",
        ".selections-container"
      )
    }
  }

  if (!isInputChecked(consentCheckboxInput)) {
    if (isErrorElShows(consentCheckboxInput)) {
      addErrorStatusTextToParent(
        consentCheckboxInput,
        "To submit this form, please consent to being contacted",
        ".consent-section"
      )
    }
  }
})
