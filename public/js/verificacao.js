function feedback(){
    var res = document.getElementById("dados_empresa");

    alert("Seus dados foram enviados para análise de cadastro");

}

function validartamanhosenha(){
    var sen = document.getElementById("senha").value;

    if(sen.length < 8){
        alert("A senha deve conter 8 dígitos ou mais")
    } 
}




