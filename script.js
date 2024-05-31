import { isEmailValid } from "./util/isEmailValid.js"

const firstNameInput = document.querySelector("#first-name"),
  lastNameInput = document.querySelector("#last-name"),
  emailInput = document.querySelector("#email"),
  radioInput = document.querySelector('input[type="radio"]'),
  msgInput = document.querySelector("#message"),
  consentCheckboxInput = document.querySelector("#consent")

const errorMsg = document.querySelector(".error-text")

const btnSubmit = document.querySelector("#submit")

console.log(firstNameInput)
console.log(firstNameInput.parentElement.contains(errorMsg))

const isInputEmpty = (el) => {
  return el.value === ""
}

const isInputChecked = (el) => {
  return el.checked
}

const addErrorStatusToInput = (el) => {
  return el.classList.add("error")
}

const addErrorStatusText = (el, msg) => {
  el.parentElement.insertAdjacentHTML(
    "beforeend",
    `
    <p class="error-text visible">
      ${msg}
    </p
  `
  )
}

btnSubmit.addEventListener("click", () => {
  if (isInputEmpty(firstNameInput)) {
    addErrorStatusToInput(firstNameInput)

    if (!firstNameInput.parentElement.contains(errorMsg))
      addErrorStatusText(firstNameInput, "This field is required")
  }

  if (isInputEmpty(lastNameInput)) {
    addErrorStatusToInput(lastNameInput)

    if (!lastNameInput.parentElement.contains(errorMsg))
      addErrorStatusText(lastNameInput, "This field is required")
  }

  if (isInputEmpty(emailInput) || !isEmailValid(emailInput.value)) {
    addErrorStatusToInput(emailInput)

    if (!emailInput.parentElement.contains(errorMsg))
      addErrorStatusText(emailInput, "Please enter a valid email address")
  }

  if (isInputEmpty(msgInput)) {
    addErrorStatusToInput(msgInput)

    if (!msgInput.parentElement.contains(errorMsg))
      addErrorStatusText(msgInput, "This field is required")
  }

  if (!isInputChecked(radioInput)) {
    // todo: add error text below
    // addErrorStatusText(radioInput, "Please select a query type")
  }

  if (!isInputChecked(consentCheckboxInput)) {
    // todo: add error text below
    // addErrorStatusText(
    //   consentCheckboxInput,
    //   "To submit this form, please consent to being contacted"
    // )
  }
})
