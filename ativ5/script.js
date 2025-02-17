function calcularnotas(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    var n3 = parseFloat(document.getElementById('n3').value);
    var mensagem = document.getElementById('mensagem');

    var media = (n1 + n2 + n3) / 3;
    mensagem.innerHTML = "Média: " + media.toFixed(2);
}