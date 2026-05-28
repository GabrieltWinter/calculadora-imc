const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById("weight").value); // sumiu do código
  const height = parseFloat(document.getElementById("height").value) / 100; // faltou o /100

  const bmi = (weight / (height * height)).toFixed(2);

  const value = document.getElementById("value");
  let description = "";

  document.getElementById("infos").classList.remove("hidden");
  value.classList.remove("attention", "normal");

  if (bmi < 18.5) {
    description = "Cuidado! Você está abaixo do peso!";
    value.classList.add("attention");
  } else if (bmi >= 18.5 && bmi <= 25) {
    description = "Você está no peso ideal!";
    value.classList.add("normal");
  } else if (bmi > 25 && bmi <= 30) {
    description = "Cuidado! Você está em sobrepeso!";
    value.classList.add("attention");
  } else if (bmi > 30 && bmi <= 35) {
    description = "Obesidade grau I!";
    value.classList.add("attention");
  } else {
    description = "Obesidade grau II ou mais!";
    value.classList.add("attention");
  }

  document.querySelector("#description span").textContent = description;
  value.textContent = bmi.replace(".", ",");
});
