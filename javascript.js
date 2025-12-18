fetch("http://localhost:4567/books")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });

const button = document.querySelector("button");

button.addEventListener("click", function () {
document.body.classList.toggle("dark-mode");
});
