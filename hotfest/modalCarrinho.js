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

function exibirProduto() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    const listaProdutos = document.getElementById('listaProdutos');
    
    listaProdutos.innerHTML = '';

    for (let produto of produtos) {
        const li = document.createElement('li');
        li.classList.add('produto-item'); 

        const img = document.createElement('img');
        img.src = produto.urlImage; 
        img.alt = produto.nome; 
        img.classList.add('produto-img'); 

        const nome = document.createElement('p');
        nome.textContent = produto.nome; 

        const preco = document.createElement('p');
        preco.innerHTML = `<span>Preço:</span> R$${produto.preco}`; 

        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produto.descricao}`; 

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);

        listaProdutos.appendChild(li);
    }
}
window.onload = exibirProduto;

