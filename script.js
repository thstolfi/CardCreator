function criarCard() {
    // Coleta o elemento de input
    const inputTexto = document.getElementById("texto");

    // Coleta o valor do elemento do input
    const textoInput = inputTexto.value;

    // Associa novoCard com a criacao de um div
    const novoCard = document.createElement("div");

    // Associa novoCard com a classe "card"
    novoCard.className = "card";
    
    // Define que o conteúdo do novoCard será o valor do elemento de input
    novoCard.textContent = textoInput

    // Cria o botão remover juntamente com o card
    const botaoRemover = document.createElement("img");

    // Define os atributos e classes do botão
    botaoRemover.src = "assets/close.svg";
    botaoRemover.alt = "Remover";
    botaoRemover.className = "close";

    // Adiciona o evento de clique ao botão "X" (imagem) para remover o div pai
    botaoRemover.addEventListener("click", function() {
        novoCard.remove();
    });

    // Adiciona o botão "X" (imagem) ao card
    novoCard.appendChild(botaoRemover);

    // Obtém o container e o associa com o appendChild de novoCard
    const container = document.getElementById("container");
    container.appendChild(novoCard);

    // Limpa a caixa de texto após a inserção do value
    inputTexto.value = "";

}