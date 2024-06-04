export const isErrorElNotShows = (el) => {
  return !el.parentElement.contains(
    el.parentElement.querySelector(".error-text")
  )
}
