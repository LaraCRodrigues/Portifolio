document.getElementById("btn").addEventListener("click", function() {
    var texto = document.getElementById("texto");

    if (texto.classList.contains("mostrar")) {
        texto.classList.remove("mostrar");
        this.textContent = "Ver mais";
    } else {
        texto.classList.add("mostrar");
        this.textContent = "Ver menos";
    }

    
    document.getElementById("formContato").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o recarregamento da página
    
        // Captura os dados do formulário
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;
        let resposta = document.getElementById("resposta");
    
        // Simulação de envio (poderia ser uma requisição AJAX para um servidor real)
        setTimeout(() => {
            resposta.innerHTML = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
            resposta.style.color = "green";
    
            // Limpar os campos do formulário
            document.getElementById("formContato").reset();
        }, 1500);
    });
    
