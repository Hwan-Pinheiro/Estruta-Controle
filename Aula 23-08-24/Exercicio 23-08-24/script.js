//Estrutura de Controle -->  If e Else
var botao = document.getElementById('verificarButton');

botao.onclick = function(){
    var idade = document.getElementById('idadeInput').value;
    

    var resultado = document.getElementById('resultado');
    if (idade >= 18) {
        //console.log("Voce e maior de Idade!");
        //alert("Voce e maior de Idade!")
        resultado.textContent = "Maior de Idade";
    } else {
         //console.log("Voce e menor de idade!");
         //alert("Voce e menor de idade!")
         resultado.texContent = "Menor de Idade";
        }
}

