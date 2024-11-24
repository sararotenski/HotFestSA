
    //Abre a janela modal
        function abrirModalCarrinho() {

            const modalCarrinho = document.getElementById("modalCarrinho");

            modalCarrinho.style.display = "block";
        }

    //Função para fechar a janela modal
        function fecharModalCarrinho() {

            const modalCarrinho = document.getElementById("modalCarrinho");

            modalCarrinho.style.display = "none";
        }

    //Fecha a janela modal quando o usário clica fora da tela
        window.onclick = function(event) {
            if (event.target === modalCarrinho) {
                fecharModalCarrinho();
            }
        }

    //Abre a página de cadastro 
 function abrirCadastro() {
    window.location.href = "cadastro.html"
    
}