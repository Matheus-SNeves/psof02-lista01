function i(){
    var i1 = parseFloat(document.getElementById('i1').value);
    var i2 = parseFloat(document.getElementById('i2').value);
    var i3 = parseFloat(document.getElementById('i3').value);
    var resposta = document.getElementById('resposta');

    var media = (i1 + i2 + i3) / 3;

    if (media <= 25){
        resposta.innerHTML = "Jovem";
    } else if (media <= 60){
        resposta.innerHTML = "Adulto";
    } else {
        resposta.innerHTML = "Idoso";
    }
}