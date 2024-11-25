const modal = document.getElementById('modalCadastroDeProduto')

function adicionarProduto() {
    const modal = document.getElementById('modalCadastroDeProduto');
    modal.style.display = "block"; 

    const BtnSave = document.getElementById("btnsalvarAlteracao");
    BtnSave.style.display = 'none'; 

    const BtnCadastro = document.getElementById("btnCadastrarProduto");
    BtnCadastro.style.display = 'block';
}

function limparProdutos(){
    
    localStorage.removeItem('produtos');

    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = "";

}

function fecharModal() {
 // pega o modal e fecha ele

    const modal = document.getElementById('modalCadastroDeProduto');
    modal.style.display = 'none'; 
}

window.onclick = function(event) {
    const modal = document.getElementById('modalCadastroDeProduto');
    if (event.target === modal) {
        fecharModal(); // Fecha o modal quando clicar fora dele
    }
};

function cadastrarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const urlImage = document.getElementById('urlImage').value;
    
    const produto = {
        nome,
        preco,
        descricao,
        urlImage
    };

    if (produto.nome && produto.preco && produto.descricao) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtos.push(produto);
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
    document.getElementById('urlImage').value = '';
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';  // Limpa a lista atual de produtos

    for (let i in produtos) {
        const produto = produtos[i];
        const li = document.createElement('li');
        li.classList.add('produto-item');

        const img = document.createElement('img');
        img.classList.add('produto-img');
        img.src = produto.urlImage;
        img.style.margin = '10px';
        img.style.width = '100px';
        img.style.height = 'auto';

        const nome = document.createElement('p');
        nome.textContent = produto.nome;

        const preco = document.createElement('p');
        preco.innerHTML = `<span>Preço:</span> R$${produto.preco}`;

        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produto.descricao}`;

        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');

        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarProduto(i);

        editBtn.textContent = 'Editar';
        editBtn.classList.add('edit-btn');
        editBtn.onclick = () => editarProduto(i);

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        listaProdutos.appendChild(li);
    }
}

  
  function deletarProduto(index) {
      let produtos = JSON.parse(localStorage.getItem('produtos'));
      produtos.splice(index, 1);
      localStorage.setItem('produtos', JSON.stringify(produtos));
      exibirProdutos();
  }

  function editarProduto(index) {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    const produto = produtos[index];

    const BtnSave = document.getElementById("btnsalvarAlteracao");
    BtnSave.style.display = 'block';

    const BtnCadastro = document.getElementById("btnCadastrarProduto");
    BtnCadastro.style.display = 'none';

    document.getElementById('nome').value = produto.nome;
    document.getElementById('preco').value = produto.preco;
    document.getElementById('descricao').value = produto.descricao;
    document.getElementById('urlImage').value = produto.urlImage;

    const modal = document.getElementById('modalCadastroDeProduto');
    modal.style.display = "block";

    // Salva o índice do produto sendo editado no atributo 'data-editing-index'
    modal.setAttribute('data-editing-index', index);
    
}


// Função para salvar a alteração de um produto
function salvarAlteracao() {
    // Recupera o índice do produto sendo editado
    const index = document.getElementById('modalCadastroDeProduto').getAttribute('data-editing-index');
    let produtos = JSON.parse(localStorage.getItem('produtos'));

    if (index === null || index === undefined) {
        alert('Erro: Não foi possível encontrar o índice do produto.');
        return;
    }

    produtos[index] = {
        nome: document.getElementById('nome').value,
        preco: document.getElementById('preco').value,
        descricao: document.getElementById('descricao').value,
        urlImage: document.getElementById('urlImage').value,
    };

    localStorage.setItem('produtos', JSON.stringify(produtos));

    fecharModal();

    exibirProdutos();
}
