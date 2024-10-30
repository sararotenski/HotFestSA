function cadastrarProduto(){

    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;

    const produtos = {
        nome: nome,
        preco: preco,
        descricao: descricao
    };

    if(produtos.nome && produtos.preco && produtos.descricao){
        let produtos = JSON.parse(localStorage.getItem('produtos')) ||[];

    }
}

function Modal(){
    modalCadastroDeProduto.style.display = block;
}

function fecharModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        fecharModal();
    }
}
