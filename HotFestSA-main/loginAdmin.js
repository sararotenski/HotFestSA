

function enviarLoginAdmin() {

    let nomeLoginAdmin = document.getElementById('nomeLoginAdmin').value;
let senhaLoginAdmin = document.getElementById('senhaLoginAdmin').value;

console.log(nomeLoginAdmin);
console.log(senhaLoginAdmin);
    if (nomeLoginAdmin == "admin" && senhaLoginAdmin == "admin") {
        window.location.href = "telaAdmin.html";
    }

    else if (nomeLoginAdmin !== "admin" && senhaLoginAdmin == "admin") {
        alert("Usuário incorreto!");
    }

    else if (nomeLoginAdmin == "admin" && senhaLoginAdmin !== "admin") {
        alert("Senha incorreta!");
    }

    else if (nomeLoginAdmin !== "admin" && senhaLoginAdmin !== "admin") {
        alert("Usuário e senha incorretos!");
    }

}