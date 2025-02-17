function calcularnotas(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var mensagem = document.getElementById('mensagem');

    var media = (n1 + n2) / 2;
    mensagem.innerHTML = "Média: " + media.toFixed(2);

    if (media >= 7 && media <=9){
        mensagem.innerHTML="Aprovado"
    }else if(media < 7){
        mensagem.innerHTML="Reprovado"
    }else{
        mensagem.innerHTML="Aprovado com distinção"
    }
}