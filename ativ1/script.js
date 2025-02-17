function verificarNum(){
    let numero = Number(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if(numero <= 1000){
        mensagem.innerHTML = 'O número é menor que 1000';
    } else{
        alert('O número é maior que 1000, escolha outro');
    }
}