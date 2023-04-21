function validarForm() 
{
    var nome        = document.forms["formulario"]["nome"].value;
    var sobrenome   = document.forms["formulario"]["sobrenome"].value;
    var telefone    = document.forms["formulario"]["telefone"].value;
    var email       = document.forms["formulario"]["email"].value;
    var mensagem    = document.forms["formulario"]["mensagem"].value;
    var turno       = document.forms["formulario"]["turno"].value;
    var data        = document.forms["formulario"]["data"].value;
   
    
    if (nome == "" || sobrenome == "" || telefone == "" || email == "" || mensagem == "" || turno == "" || data == "" ) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }
    else
    {
        alert("Enviado!");
    }
}