
function adicionarAvaliacao() {
    const modalAvaliacao = document.getElementById('modalAvaliacao');
    modalAvaliacao.style.display = 'block';

}

function fecharModalAvaliacao() {
    const modalAvaliacao = document.getElementById('modalAvaliacao');
    modalAvaliacao.style.display = 'none';
}

window.onclick = function(event) {
     // função para se clicar fora do modal ele fecha
    if (event.target === modalAvaliacao) {
        fecharModalAvaliacao();
    }
}

function Avaliar() {
    const nome = document.getElementById('nome').value;
    const estrelas = document.getElementById('estrela').value;
    const depoimento = document.getElementById('depoimento').value;
    const imagem = document.getElementById('urlImage').value;

    if (nome && estrelas && depoimento && imagem) {
        const lista = document.getElementById('listaAvaliacoes');
        const novaAvaliacao = document.createElement('li');
        novaAvaliacao.innerHTML = `
            <p><strong>${nome}</strong> (${estrelas} estrelas)</p>
            <p>${depoimento}</p>
            <img src="${imagem}" alt="Imagem do produto" width="100">
        `;
        lista.appendChild(novaAvaliacao);
        fecharModal();
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('estrela').value = '';
    document.getElementById('depoimento').value = '';
    document.getElementById('urlImage').value = '';
}

function exibirAvaliacao() {
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    const listaAvaliacoes = document.getElementById('listaAvaliacoes');
    listaAvaliacoes.innerHTML = '';

    avaliacoes.forEach((avaliacao, index) => { // O método forEach percorre cada item do array avaliacoes. Para cada item: 
        //O parâmetro avaliacao representa o elemento atual da iteração.
 // O parâmetro index representa a posição do elemento dentro do array.
        const li = document.createElement('li');
        li.classList.add('avaliacoes-item');

        const img = document.createElement('img');
        img.classList.add('avaliacoes-img');
        img.src = avaliacao.urlImage;
        img.alt = `Imagem do produto avaliado`;
        img.style.margin = '10px';
        img.style.width = '100px';
        img.style.height = 'auto';

        const nome = document.createElement('p');
        nome.textContent = `Nome: ${avaliacao.nome}`;

        const estrela = document.createElement('p');
        estrela.innerHTML = `<span>Estrelas:</span> ${avaliacao.estrela}`;

        const depoimento = document.createElement('p');
        depoimento.innerHTML = `<span>Depoimento:</span> ${avaliacao.depoimento}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Deletar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deletarAvaliacao(index);

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(estrela);
        li.appendChild(depoimento);
        li.appendChild(deleteBtn);

        listaAvaliacoes.appendChild(li);
    });
}

function deletarAvaliacao(index) {
    let avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    avaliacoes.splice(index, 1);
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));
    exibirAvaliacao();
}

function salvarAvaliacao() {
    const nome = document.getElementById('nome').value;
    const estrela = document.getElementById('estrela').value;
    const depoimento = document.getElementById('depoimento').value;
    const urlImage = document.getElementById('urlImage').value;

    if (!nome || !estrela || !depoimento || !urlImage) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const novaAvaliacao = { nome, estrela, depoimento, urlImage };
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    avaliacoes.push(novaAvaliacao);
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoes));

    limparFormulario();
    exibirAvaliacao();
    fecharModal();
}

function limparAvaliacao() {
    localStorage.removeItem('avaliacoes');
    exibirAvaliacao();
}

function exibirProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';
  
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
                
        const adicionarAoCarrinhoBtn = document.createElement('button');
        
        adicionarAoCarrinhoBtn.textContent = 'Adicionar ao carrinho +';
        adicionarAoCarrinhoBtn.classList.add('adicionar-btn');
        adicionarAoCarrinhoBtn.onclick = () => adicionarAoCarrinho();
        
        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);
        li.appendChild(adicionarAoCarrinhoBtn);
        
        listaProdutos.appendChild(li);
    }
  }

window.onload = exibirAvaliacao();
window.onload = exibirProdutos();

function adicionarAoCarrinho(i) {

  //  const textoCarrinhoVazio = document.getElementById('textoCarrinhoVazio');

  //  textoCarrinhoVazio.style.display = 'none';

  //  const verCardapio = document.getElementById('verCardapio');

   // verCardapio.style.display = 'none';

    const listaProdutos = JSON.parse(localStorage.getItem('produtos')) || [];

    console.log(listaProdutos)

    const produtoQueOCaraClicou = listaProdutos[i];

    localStorage.setItem('carrinho', JSON.stringify(produtoQueOCaraClicou))

    const produtosCarrinho = JSON.parse(localStorage.getItem('produtos')) || [];

    console.log(produtosCarrinho);

    const listaProdutosCarrinho = document.getElementById('listaProdutosCarrinho');
    listaProdutosCarrinho.innerHTML = '';

    for (let i in produtosCarrinho) {
        const produtoAdicionado = produtosCarrinho[i];
        const li = document.createElement('li');
        li.classList.add('produto-carrinho');
  
        const img = document.createElement('img');
        img.classList.add('produto-carrinho-img'); 
        img.src = produtoAdicionado.urlImage;
        img.style.margin = '10px'; 
        img.style.width = '100px'; 
        img.style.height = 'auto';

        const nome = document.createElement('p');
        nome.textContent = produtoAdicionado.nome; 

        const preco = document.createElement('p');
        preco.innerHTML = `<span>Preço:</span> R$${produtoAdicionado.preco}`; 

        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produtoAdicionado.descricao}`; 

        const botaoDeletarDoCarrinho = document.createElement('button');

        botaoDeletarDoCarrinho.textContent = 'Remover';
        botaoDeletarDoCarrinho.classList.add('delete-btn-carrinho');
        botaoDeletarDoCarrinho.onclick = () => deletarDoCarrinho(index);

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);
        li.appendChild(botaoDeletarDoCarrinho);
        
        listaProdutosCarrinho.appendChild(li);

}
}

window.onload = adicionarAoCarrinho();
