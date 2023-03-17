var email = document.querySelector("#email");

var confirmarEmail = document.querySelector("#confirmar-email");

var senha = document.querySelector("#senha");

var btnCriarConta = document.getElementById("btnCriarConta");


function criarConta(){

    if (email.value !== confirmarEmail.value){
        btnCriarConta.disabled = true;
    }

    if (senha.value.length < 15){
        btnCriarConta.disabled = true;
    }
}

