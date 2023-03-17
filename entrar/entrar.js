function criarConta(){
    var email = document.querySelector("#email").value;
    var senha = document.querySelector("#senha");

    if(senha.value.length >= 5 && email.value !== ""){
        window.location.reload(true);
    }
}