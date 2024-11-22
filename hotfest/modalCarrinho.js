//Representa a janela modal
const modal = document.getElementById("modalCarrinho");

    //Abre a janela modal
        function abrirModal() {
            modal.style.display = "block";
        }

    //Função para fechar a janela modal
        function fecharModal() {
            modal.style.display = "none";
        }

    //Fecha a janela modal quando o usário clica fora da tela
        window.onclick = function(event) {
            if (event.target === modal) {
                fecharModal();
            }
        }

    //Abre a página de cadastro 
 function abrirCadastro() {
    window.location.href = "cadastro.html"
    
}


window.onload = exibirProdutos;
