function primo(){
    var numero = parseInt(document.getElementById('num').value);
    var resposta = document.getElementById('resposta');
    var divisor=0;
  
    for(var count=1 ; count<=numero ; count++)
     if(numero % count == 0)
         divisor++;
    
    if(divisor==2)
        resposta.innerHTML='É primo';
    else
        resposta.innerHTML='Não é primo';
  }
  