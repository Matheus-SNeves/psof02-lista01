function primo() {
    var fim = parseInt(document.getElementById('fim').value);
    var resposta = document.getElementById('resposta');
    var texto = '';

    for (var contagem = 2; contagem <= fim; contagem++) {
        var divisor = 0; 

        for (var auxiliar = 1; auxiliar <= contagem; auxiliar++) {
            if (contagem % auxiliar == 0) {
                divisor++;
            }
        }   

        if (divisor == 2) {
            texto += contagem + ' '; 
        }
    }

    resposta.innerHTML = texto; 
}