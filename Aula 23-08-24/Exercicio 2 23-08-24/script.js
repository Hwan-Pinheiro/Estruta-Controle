var botao = document.getElementById('verificarButton');

botao.onclick = function(){
    var ano = document.getElementById('anoInput').value;
    var anoAtual = 2024;
    var resultado = console.log(anoAtual - ano);
   
    if (resultado >= 18) {
        console.log('Voce e maior de Idade!');
        resultado.textContent = "Maior de Idade";
    } else {
         console.log('Voce e menor de idade!');
         resultado.textContent = "Menor de Idade";
        }
    
}