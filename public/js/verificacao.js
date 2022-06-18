function feedback(){
    var res = document.getElementById("dados_empresa");

    alert("Seus dados foram enviados para análise de cadastro");

}

function validarsenha(){
    var senha1 = document.getElementById("senha").value;
    var senha2 = document.getElementById("confirmarsenha").value;
    if(senha1.length < 8){
        alert("A senha deve conter 8 dígitos ou mais")
    }else{
        if(senha1 != senha2){
            alert("As senhas estão diferentes, por favor verifique");
        }
    }
}

function validarlogin(){
    var login = document.getElementById("login").value;
    var senha_login = document.getElementById("senha_login").value;
    if(login.length < 14){
        alert("Verifique seu login");
    } else{
        if(senha_login.length<8){
            alert("Verifique sua senha");
        }
    }
}

function aceitarempresa(){
    var confirmar = document.getElementById("aceitar_empresa"); 
    alert("Empresa cadastrada"); 
}





