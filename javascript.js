const button = document.querySelector("button");

button.addEventListener("click", updateName);

button.addEventListener("click", function () {
  document.body.style.backgroundColor = "lavender";
});

function updateName() {
  const text = prompt("Skriv noget tekst her!");
  button.textContent = `${text}`;
}
