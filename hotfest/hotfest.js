


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

    let nomeCadastro = document.getElementById('nomeCadastro').value
    let emailCadastro = document.getElementById('emailCadastro').value
    let senhaCadastro = document.getElementById('senhaCadastro').value
    let confirmarSenhaCadastro = document.getElementById('confirmarSenhaCadastro').value

    if (senhaCadastro == confirmarSenhaCadastro) {

        JSON.parse(localStorage.getItem("infosUsuario")) || {};

        const cadastro = {

            nome: nomeCadastro,
            email: emailCadastro,
            senha: senhaCadastro

        }

        localStorage.setItem("infosUsuario", JSON.stringify(cadastro))

        console.log(cadastro)

        window.location.href = "login.html"

    }

    else {

        alert('As senhas não correspondem!')
        
    }

}

//Verificando se as informações de login preenchidas pelo usuário correspondem às informações já cadastradas no Local Storage

function enviarLogin() {

    let nomeLogin = document.getElementById('nomeLogin').value
    let senhaLogin = document.getElementById('senhaLogin').value

    const cadastro = JSON.parse(localStorage.getItem('infosUsuario'))

    if (cadastro.nome === nomeLogin && cadastro.senha === senhaLogin) {

        alert('Login bem-sucedido!')

        window.location.href = "inicio.html"

    }

    else {

        alert('Nome de usuário ou senha incorretos!')

    }
    
}

function abrirTelaAdmin() {

    window.location.href = "telaAdmin.html"

}

function abrirCadastro() {

    window.location.href = "cadastro.html"
    
}