let pepito = 10;
pepito = 8;
const b = 10;

const btn = document.querySelector("#btn");
const input = document.querySelector("#input");

// Eventos de botones

btn.addEventListener("click", function () {
  console.log(input.value);
});

btn.addEventListener("mouseover", function () {
  console.log(`Mouse over`);
});

btn.addEventListener("mouseleave", function () {
  console.log(`Mouse leave`);
});

// Eventos de input

input.addEventListener("input", function () {
  console.log(input.value);
});
