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
  } else if (unit === "celsius") {
    emoji = "🌡️";

    const toFahrenheit = round((value * 9) / 5 + 32);
    const toCelsius = round(((value - 32) * 5) / 9);
    result = `${value}°C = ${toFahrenheit}°F | ${value}°F = ${toCelsius}°C`;
  } else if (unit === "kmh") {
    emoji = "🚗";

    const toMph = round(value * 0.621371);
    const toKmh = round(value / 0.621371);
    result = `${value} km/h = ${toMph} mph | ${value} mph = ${toKmh} km/h`;
  } else if (unit === "joule") {
    emoji = "🔥";

    const toCalories = round(value * 0.239006);
    const toJoules = round(value / 0.239006);
    result = `${value} joules = ${toCalories} calories | ${value} calories = ${toJoules} joules`;
  } else if (unit === "megabyte") {
    emoji = "💾";

    const toGigabytes = round(value / 1024);
    const toMegabytes = round(value * 1024);
    result = `${value} MB = ${toGigabytes} GB | ${value} GB = ${toMegabytes} MB`;
  } else if (unit === "hour") {
    emoji = "🕒";

    const toMinutes = round(value * 60);
    const toHours = round(value / 60);
    result = `${value} hours = ${toMinutes} minutes | ${value} minutes = ${toHours} hours`;
  } else if (unit === "sqm") {
    emoji = "🧭";

    const toSqft = round(value * 10.7639);
    const toSqm = round(value / 10.7639);
    result = `${value} m² = ${toSqft} ft² | ${value} ft² = ${toSqm} m²`;
  }

  conversionEl.textContent = `${emoji} ${result}`;
  conversionEl.classList.add("glow");
  setTimeout(() => conversionEl.classList.remove("glow"), 600);
}

convertBtn.addEventListener("click", convertUnits);

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
  conversionEl.classList.add("fade-out");
  setTimeout(() => {
    inputEl.value = "";
    conversionEl.textContent = "";
    conversionEl.classList.remove("glow", "fade-out");
  }, 400);
});
