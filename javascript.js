const button = document.querySelector("button");

button.addEventListener("click", function () {
  const currentColor = document.body.style.backgroundColor;

  if (currentColor === "lavender") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "lavender";
  }
});
