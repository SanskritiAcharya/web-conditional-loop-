const colorBox = document.getElementById("colorBox");
const colorPicker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");
const defaultColor = "#e0e0e0";

const savedColor = localStorage.getItem("selectedColor");
if (savedColor) {
  colorBox.style.backgroundColor = savedColor;
  colorPicker.value = savedColor;
}

colorPicker.addEventListener("input", () => {
  const selectedColor = colorPicker.value;
  colorBox.style.backgroundColor = selectedColor;
  localStorage.setItem("selectedColor", selectedColor);
});

resetBtn.addEventListener("click", () => {
  colorBox.style.backgroundColor = defaultColor;
  colorPicker.value = defaultColor;
  localStorage.removeItem("selectedColor");
});
