const usuario = {
    nome: "ReiDosNaldos",
    senha: "reinaldo123"
}

function login(){
    let nome = document.getElementById ('nome').value ;
    let senha = document.getElementById ('senha').value ;

if ((usuario.nome == nome) && (usuario.senha == senha)){
    alert('autenticado');
    window.location.pathname = "/../Visual/pagina2.html"
}

else{
    alert('falhou');
}
}