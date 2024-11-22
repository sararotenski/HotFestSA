
function adicionarAvaliacao() {
    const modal = document.getElementById('modalAvaliacao');
    modal.style.display = 'block';

}

function fecharModal() {
    const modal = document.getElementById('modalAvaliacao');
    modal.style.display = 'none';
}

window.onclick = function(event) {
     // função para se clicar fora do modal ele fecha
    if (event.target === modal) {
        fecharModal();
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

window.onload = exibirAvaliacao;