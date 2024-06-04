export const removeErrorStatusText = (el) => {
  console.log(el)
  console.log(el.parentElement)

  el.parentElement.removeChild(el.parentElement.querySelector(".error-text"))
}
