

function enviarLoginAdmin() {

    let nomeLoginAdmin = document.getElementById('nomeLoginAdmin').value;
    let senhaLoginAdmin = document.getElementById('senhaLoginAdmin').value;

console.log(nomeLoginAdmin);
console.log(senhaLoginAdmin);

    // Verifica se o nome de usuário e a senha estão corretos
    if (nomeLoginAdmin == "admin" && senhaLoginAdmin == "admin") {
    // Redireciona para a página telaAdmin.html     
        window.location.href = "telaAdmin.html";
    }

    // Verifica se o nome de usuário está incorreto e a senha está correta
    else if (nomeLoginAdmin !== "admin" && senhaLoginAdmin == "admin") {
        alert("Usuário incorreto!");
    }

    // Verifica se o nome de usuário está correto e a senha está incorreta
    else if (nomeLoginAdmin == "admin" && senhaLoginAdmin !== "admin") {
        alert("Senha incorreta!");
    }

    // Verifica se o nome de usuário e a senha estão incorretos
    else if (nomeLoginAdmin !== "admin" && senhaLoginAdmin !== "admin") {
        alert("Usuário e senha incorretos!");
    }

}