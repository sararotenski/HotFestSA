
const modal = document.getElementById('modalCadastroDeProduto')

function adicionarProduto(){

    modal.style.display = "block";

}

function fecharModal() {

    modal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target === modal) {
        fecharModal();
    }
}

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
        produtos.push(produtos);
        localStorage.setItem('produtos', JSON.stringify(produtos));

        limparFormulario();
        exibirProdutos();
    } else {
        alert('Preencha todos os campos para cadastrar o produto!');
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('descricao').value = '';
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    for (let i in produtos) {
        const produto = produtos[i];
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;
       
    }
}