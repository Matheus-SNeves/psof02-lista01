function eleicao() {
    let numEleitores = Number(document.getElementById('numEleitores').value);

    let voto1 = Number(document.getElementById('voto1').value);
    let voto2 = Number(document.getElementById('voto2').value);
    let voto3 = Number(document.getElementById('voto3').value);
    let nulo = Number(document.getElementById('nulo').value);
    let eleitor = document.getElementById('eleitor');

    if (numEleitores < (voto1 + voto2 + voto3 + nulo)) {
        alert('O total de votos não pode ser maior que ' + numEleitores);

    } else {
        eleitor.innerHTML = `O X teve ${voto1}, o Y teve ${voto2}, o Z teve ${voto3} e nulos tiveram ${nulo}`;
    }


}