


// Função de ir para a página de login

function login() {

    window.location.href = "login.html"

}

//Função de ir para a página de cadastro

function cadastro() {

    window.location.href = "cadastro.html"

}


//Subindo as informações de cadastro no Local Storage

function enviarCadastro() {

    let nomeCadastro = document.getElementById('nomeCadastro').value;
    let emailCadastro = document.getElementById('emailCadastro').value;
    let senhaCadastro = document.getElementById('senhaCadastro').value;
    let confirmarSenhaCadastro = document.getElementById('confirmarSenhaCadastro').value;

    if (senhaCadastro === confirmarSenhaCadastro) {
        // Armazenando o cadastro no localStorage com a chave correta
        const cadastro = {
            nome: nomeCadastro,
            email: emailCadastro,
            senha: senhaCadastro
        };

        localStorage.setItem("infosUsuario", JSON.stringify(cadastro));

        console.log(cadastro);

        window.location.href = "login.html";
    } else {
        alert('As senhas não correspondem!');
    }
}

function enviarLogin() {

    let nomeLogin = document.getElementById('nomeLogin').value;
    let senhaLogin = document.getElementById('senhaLogin').value;

    // Recuperando o cadastro do localStorage com a chave correta
    const cadastro = JSON.parse(localStorage.getItem('infosUsuario')) || {};

    // Verifica se as informações preenchidas no login correspondem às armazenadas
    if (cadastro.nome === nomeLogin && cadastro.senha === senhaLogin) {
        alert('Login bem-sucedido!');
        window.location.href = "inicio.html";
    } 
    
    // Verifica se o nome de usuário e a senha estão corretos para admin
    else if (nomeLogin === "admin" && senhaLogin === "admin") {
        window.location.href = "telaAdmin.html";
    } 
    
    // Verifica se o nome de usuário está incorreto e a senha está correta
    else if (nomeLogin !== "admin" && senhaLogin === "admin") {
        alert("Usuário incorreto!");
    }

    // Verifica se o nome de usuário está correto e a senha está incorreta
    else if (nomeLogin === "admin" && senhaLogin !== "admin") {
        alert("Senha incorreta!");
    }

    // Verifica se o nome de usuário e a senha estão incorretos
     else {
        alert('Nome de usuário ou senha incorretos!');
    }
}

