fetch("http://localhost:4567/books")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
