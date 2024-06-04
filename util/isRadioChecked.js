export const isRadioChecked = (radioInputs) => {
  for (const radioButton of radioInputs) {
    if (radioButton.checked) {
      return radioButton.value
    }
  }
}
