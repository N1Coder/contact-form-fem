export const isErrorElShows = (el) => {
  return !el.parentElement.contains(
    el.parentElement.querySelector(".error-text")
  )
}
