
function adicionarProduto(){

    const modal = document.getElementById('modalCadastroDeProduto')

    modal.style.display = "block";

}

function fecharModal() {
 // pega o modal e fecha ele
    const modal = document.getElementById('modalCadastroDeProduto')

    modal.style.display = "none";

}

window.onclick = function(event) {
     // função para se clicar fora do modal ele fecha
    if (event.target === modal) {
        fecharModal();
    }
}

function cadastrarProduto(){
// pega os valores que foram colocados
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const urlImage = document.getElementById('urlImage').value;

     // cria um objeto com os dados do produto
    const produto = {
        nome,
        preco,
        descricao,
        urlImage  // coloca a URL da imagem do objeto
    };
        //  confere se tudo esta preenchido
    if(produto.nome && produto.preco && produto.descricao){
        // pega a lista de produtos do localStorageou 
        let produtos = JSON.parse(localStorage.getItem('produtos')) ||[];
        produtos.push(produto);  // adiciona o novo produto na lista
        localStorage.setItem('produtos', JSON.stringify(produto)); // salva a lista de volta no localStorage


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
    document.getElementById('urlImage').value = '';
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    for (let i in produtos) {
        const produto = produtos[i];
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = produto.urlImage;
        img.style.margin = '10px'; 
        img.style.width = '100px'; 
        img.style.height = 'auto';
        
        li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarProduto(i);
        
        li.appendChild(img);
        li.appendChild(deleteBtn);
        listaProdutos.appendChild(li);
    }

    function deletarProduto(index) {
        let produtos = JSON.parse(localStorage.getItem('produtos'));
        produtos.splice(index, 1);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        exibirProdutos();
    }
    
    function limparProdutos() {
        localStorage.removeItem('produtos');
        exibirProdutos();
    }
        
}

window.onload = exibirProdutos;

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