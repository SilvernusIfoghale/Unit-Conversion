/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btn = document.querySelector(".convertBtnEl");
const input = document.querySelector(".inputTextEl");
const lengthText = document.querySelector(".length");
const volumeText = document.querySelector(".volume");
const massText = document.querySelector(".mass");
let length;
let volume;
let mass;

btn.addEventListener("click", (e) => {
  let inputData = input.value;

  if (inputData == "" || inputData < 0) {
    alert("Invalid Input");
  } else {
    length = `${inputData} meters = ${(inputData * 3.281).toFixed(
      2
    )} feet | ${inputData} feet = ${(inputData / 3.281).toFixed(2)} meters  `;
    lengthText.textContent = length;

    volume = `${inputData} liters = ${(inputData * 0.264).toFixed(
      2
    )} gallons | ${inputData} gallons = ${(inputData / 0.264).toFixed(
      2
    )} liters  `;
    volumeText.textContent = volume;

    mass = `${inputData} kilos = ${(inputData * 2.204).toFixed(
      2
    )} pounds | ${inputData} pounds = ${(inputData / 2.204).toFixed(
      2
    )} kilos  `;
    massText.textContent = mass;
  }
});
