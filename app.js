let string = "Hello World";
let number = 10;
let boolean = true;

let arrayNumber = [1, 2, 3, 4, 5];
let arrayString = ["Hello", "World"];
let arrayBoolean = [true, false];

let object = { string: "Hello", number: 10, boolean: true };
let person = {
  name: "Hernan",
  age: 20,
  married: true,
};



console.log(person.name);

const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

// // Eventos de botones

btn.addEventListener("click", function () {
  console.log(input.value);
  output.innerHTML = `<p>Tu edad es: ${input.value}</p>`;
});

// btn.addEventListener("mouseover", function () {
//   console.log("Mouse over");
// });

// btn.addEventListener("mouseleave", function () {
//   console.log(`Mouse leave`);
// });

// // Eventos de input

// input.addEventListener("input", function () {
//   console.log(input.value);
// });
