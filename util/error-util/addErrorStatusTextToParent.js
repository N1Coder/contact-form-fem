export const addErrorStatusTextToParent = (el, msg, parentElement = null) => {
  if (parentElement === null) {
    el.parentElement.insertAdjacentHTML(
      "beforeend",
      `
      <p class="error-text visible">
        ${msg}
      </p
    `
    )
  } else {
    el.closest(parentElement).insertAdjacentHTML(
      "beforeend",
      `
      <p class="error-text visible">
        ${msg}
      </p
    `
    )
  }
}
