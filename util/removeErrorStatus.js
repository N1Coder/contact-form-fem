import { removeErrorStatusFromInput } from "./error-util/removeErrorStatusFromInput.js"
import { removeErrorStatusText } from "./error-util/removeErrorStatusText.js"

export const removeErrorStatus = (el) => {
  removeErrorStatusFromInput(el)
  removeErrorStatusText(el)
}
