import { addErrorStatusToInput } from "./util/addErrorStatusToInput.js"
import { addErrorStatusTextToParent } from "./util/addErrorStatusTextToParent.js"
import { isEmailValid } from "./util/isEmailValid.js"
import { isErrorElNotShows } from "./util/isErrorElNotShows.js"
import { isInputEmpty } from "./util/isInputEmpty.js"
import { isInputChecked } from "./util/isInputChecked.js"

const firstNameInput = document.querySelector("#first-name"),
  lastNameInput = document.querySelector("#last-name"),
  emailInput = document.querySelector("#email"),
  radioInput = document.querySelector('input[type="radio"]'),
  msgInput = document.querySelector("#message"),
  consentCheckboxInput = document.querySelector("#consent")

const btnSubmit = document.querySelector("#submit")

btnSubmit.addEventListener("click", () => {
  if (isInputEmpty(firstNameInput)) {
    console.log(isInputEmpty(firstNameInput))
    addErrorStatusToInput(firstNameInput)

    if (isErrorElNotShows(firstNameInput)) {
      addErrorStatusTextToParent(firstNameInput, "This field is required")
    }
  } else {
    if (!isInputEmpty(firstNameInput) && !isErrorElNotShows(firstNameInput)) {
      firstNameInput.parentElement.removeChild(
        document.querySelector(".error-text")
      )

      firstNameInput.classList.remove("error")
    }
  }

  if (isInputEmpty(lastNameInput)) {
    addErrorStatusToInput(lastNameInput)

    if (isErrorElNotShows(lastNameInput)) {
      addErrorStatusTextToParent(lastNameInput, "This field is required")
    }
  }

  if (isInputEmpty(emailInput) || !isEmailValid(emailInput.value)) {
    addErrorStatusToInput(emailInput)

    if (isErrorElNotShows(emailInput)) {
      addErrorStatusTextToParent(
        emailInput,
        "Please enter a valid email address"
      )
    }
  }

  if (isInputEmpty(msgInput)) {
    addErrorStatusToInput(msgInput)

    if (isErrorElNotShows(msgInput)) {
      addErrorStatusTextToParent(msgInput, "This field is required")
    }
  }

  if (!isInputChecked(radioInput)) {
    if (isErrorElNotShows(radioInput)) {
      addErrorStatusTextToParent(
        radioInput,
        "Please select a query type",
        ".selections-container"
      )
    }
  }

  if (!isInputChecked(consentCheckboxInput)) {
    if (isErrorElNotShows(consentCheckboxInput)) {
      addErrorStatusTextToParent(
        consentCheckboxInput,
        "To submit this form, please consent to being contacted",
        ".consent-section"
      )
    }
  }
})
