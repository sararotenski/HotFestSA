
//FUNÇÕES DO MODAL DO CARRINHO
function abrirModalCarrinho() {
    const modalCarrinho = document.getElementById('modalCarrinho');
    modalCarrinho.style.display = 'block';

}

function fecharModalCarrinho() {
    const modalCarrinho = document.getElementById('modalCarrinho');
    modalCarrinho.style.display = 'none';
}

window.onclick = function(event) {
     // função para se clicar fora do modal ele fecha
    if (event.target === modalCarrinho) {
        fecharModalCarrinho();
    }
}

//FUNÇÃO DE IR PARA O CADASTRO
function abrirCadastro() {
window.location.href = "cadastro.html"
}

//FUNÇÕES PARA O MODAL DAS AVALIAÇÕES
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

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('estrela').value = '';
    document.getElementById('depoimento').value = '';
    document.getElementById('urlImage').value = '';
}

//Função que faz com que a avaliação seja exibida na tela inicial
function exibirAvaliacao() {
    const avaliacoes = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    const listaAvaliacoes = document.getElementById('listaAvaliacoes');
    listaAvaliacoes.innerHTML = '';

    avaliacoes.forEach((avaliacao, index) => { // O método forEach percorre cada item do array avaliacoes. Para cada item: 
        //O parâmetro avaliacao representa o elemento atual da interação.
 // O parâmetro index representa a posição do elemento dentro do array.
        const li = document.createElement('li');
        li.classList.add('avaliacoes-item');
        
        const img = document.createElement('img');
        img.classList.add('avaliacoes-img');
        img.src = avaliacao.urlImage;
        img.alt = `Imagem do produto avaliado`;
        img.style.margin = '10px';
        img.style.marginRight = '500px';
        img.style.width = '100px';
        img.style.height = '90px';


        const nome = document.createElement('p');
        nome.innerHTML = `<span> Nome: </span> ${avaliacao.nome}`;

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

//Função que guarda as informações de avaliação preenchidas pelo usuário

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

//Função que faz com que os produtos cadastrados pelo Admin sejam exibidos na tela inicial

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
        adicionarAoCarrinhoBtn.onclick = () => adicionarAoCarrinho(produto);
        
        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);
        li.appendChild(adicionarAoCarrinhoBtn);
        
        listaProdutos.appendChild(li);
    }
  }

//Função que oculta o texto que diz que o carrinho está vazio, o botão de ver cardápio e armazena a chave "carrinho" na const listaCarrinho
function adicionarAoCarrinho(produto) {
    const produtoQueOCaraClicou = produto;

   const textoCarrinhoVazio = document.getElementById('textoCarrinhoVazio');

    textoCarrinhoVazio.style.display = 'none';

    const verCardapio = document.getElementById('verCardapio');

    verCardapio.style.display = 'none';

    const listaCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    listaCarrinho.push(produtoQueOCaraClicou)
    localStorage.setItem('carrinho', JSON.stringify(listaCarrinho))
    exibirCarrinho();
}

//Função que faz com que os produtos adicionados no carrinho sejam exibidos nele e adiciona o botão de "finalizar pedido"
function exibirCarrinho() {
    const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaProdutosCarrinho = document.getElementById('listaProdutosCarrinho');
    listaProdutosCarrinho.innerHTML = '';
    for (let i in produtosCarrinho) {
        const produtoClicado = produtosCarrinho[i];
    if (produtoClicado) {
        const li = document.createElement('li');
        li.classList.add('produto-carrinho');

        const img = document.createElement('img');
        img.classList.add('produto-carrinho-img'); 
        img.src = produtoClicado.urlImage;
        img.style.margin = '10px'; 
        img.style.width = '100px'; 
        img.style.height = 'auto';

        const nome = document.createElement('p');
        nome.textContent = produtoClicado.nome; 

        const preco = document.createElement('p');
        preco.innerHTML = `<span>Preço:</span> R$${produtoClicado.preco}`; 

        const descricao = document.createElement('p');
        descricao.innerHTML = `<span>Descrição:</span> ${produtoClicado.descricao}`; 

        const botaoDeletarDoCarrinho = document.createElement('button');

        botaoDeletarDoCarrinho.textContent = 'Remover';
        botaoDeletarDoCarrinho.classList.add('delete-btn-carrinho');
        botaoDeletarDoCarrinho.onclick = () => deletarDoCarrinho(i);

        li.appendChild(img);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(descricao);
        li.appendChild(botaoDeletarDoCarrinho);
        
        listaProdutosCarrinho.appendChild(li);

        let btnFinalizarPedido = document.getElementById('btnFinalizarPedido');
        btnFinalizarPedido.style.display = 'block';
    }
}
}

//Função que permite que o usuário delete um produto do carrinho
function deletarDoCarrinho(index) {
    console.log(index);
    
    let produtosCarrinhoRemover = JSON.parse(localStorage.getItem('carrinho')) || [];
    produtosCarrinhoRemover.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(produtosCarrinhoRemover));
    // adicionarAoCarrinho();
    exibirCarrinho();
}

window.onload = exibirAvaliacao();
window.onload = exibirProdutos();
window.onload = exibirCarrinho();

//Função que faz com que o botão de "finalizar pedido", ao ser clicado, leve o usuário para a tela de entrega
function finalizarPedido () {
    window.location.href = 'motoboy.html';
}