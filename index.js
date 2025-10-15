const inputEl = document.getElementById("input-value");
const unitSelect = document.getElementById("unit-select");
const convertBtn = document.getElementById("convert-btn");
const conversionEl = document.getElementById("conversion-el");

function round(value) {
  return Math.floor(value * 1000) / 1000;
}

function convertUnits() {
  const value = Number(inputEl.value);
  const unit = unitSelect.value;

  let result = "";
  let emoji = "";

  if (unit === "meter") {
    emoji = "📏";

    const toFeet = round(value * 3.281);
    const toMeters = round(value / 3.281);
    result = `${value} meters = ${toFeet} feet | ${value} feet = ${toMeters} meters`;
  } else if (unit === "liter") {
    emoji = "🧪";

    const toGallons = round(value * 0.264);
    const toLiters = round(value / 0.264);
    result = `${value} liters = ${toGallons} gallons | ${value} gallons = ${toLiters} liters`;
  } else if (unit === "kilogram") {
    emoji = "🏋️";

    const toPounds = round(value * 2.204);
    const toKilos = round(value / 2.204);
    result = `${value} kilos = ${toPounds} pounds | ${value} pounds = ${toKilos} kilos`;
  }

  conversionEl.textContent = `${emoji} ${result}`;
  conversionEl.classList.add("glow");
  setTimeout(() => conversionEl.classList.remove("glow"), 600);
}

convertBtn.addEventListener("click", convertUnits);
