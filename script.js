document.getElementById("btn").addEventListener("click", function() {
    var texto = document.getElementById("texto");

    if (texto.classList.contains("mostrar")) {
        texto.classList.remove("mostrar");
        this.textContent = "Ver mais";
    } else {
        texto.classList.add("mostrar");
        this.textContent = "Ver menos";
    }
});