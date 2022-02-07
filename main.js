function mostrarSenha(){
    var senha = document.getElementById('mostrar');
    if(senha.type="password"){
        senha.type ="text";
    }else{
        senha.type = "password";
    }
}