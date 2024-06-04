import { addErrorStatusTextToParent } from "./error-util/addErrorStatusTextToParent.js"
import { addErrorStatusToInput } from "./error-util/addErrorStatusToInput.js"

export const addErrorStatus = (el, msg, parent = null) => {
  if (parent === null) {
    addErrorStatusToInput(el)
    addErrorStatusTextToParent(el, (msg = "This field is required"))
  } else {
    addErrorStatusTextToParent(el, msg, parent)
  }
}
