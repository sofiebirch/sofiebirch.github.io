const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const text = prompt("Skriv noget tekst her!");
  button.textContent = `Player 1: ${text}`;
}
