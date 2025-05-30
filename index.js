const titulo = document.getElementById('titulo');

fetch('http://localhost:4000/')
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp);
    
function INSS() {
    let resultado = document.getElementById('resultado1');
    let dados = {
        salario: Number(document.getElementById('salario').value)
    };
    fetch('http://localhost:4000/inss',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(resp => resp.json())
        .then(resp => {
            resultado.innerHTML = `Desconto de INSS: R$ ${resp.inss}<br> Salário com desconto: R$ ${resp.salarioComDesconto}`;
        })
        .catch(error => {
            console.error('Erro ao obter INSS:', error);
            resultado.innerHTML = `Erro: ${error.message || 'Verifique o salário.'}`;
        });
}

function Triangulo() {
    const ladoA = Number(document.getElementById('ladoA').value);
    const ladoB = Number(document.getElementById('ladoB').value);
    const ladoC = Number(document.getElementById('ladoC').value);

    fetch('http://localhost:4000/classificar-triangulo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a: ladoA, b: ladoB, c: ladoC })
    })
        .then(resp => resp.json())
        .then(resp => {
            document.getElementById('resultadoTriangulo').innerHTML = `Tipo de triângulo: <strong>${resp.tipoTriangulo}</strong>`;
        })
        .catch(error => {
            console.error('Erro ao classificar triângulo:', error);
            document.getElementById('resultadoTriangulo').innerHTML = `Erro: ${error.message || 'Verifique os lados.'}`;
        });
}

function Mercadoria() {
    const nomeMercadoria = document.getElementById('nomeMercadoria').value;
    const precoOriginal = Number(document.getElementById('precoMercadoria').value);

    fetch('http://localhost:4000/reajuste-mercadoria', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nomeMercadoria, precoOriginal })
    })
        .then(resp => resp.json())
        .then(resp => {
            document.getElementById('resultadoReajuste').innerHTML = `Mercadoria: <strong>${resp.nomeMercadoria}</strong><br>Novo Preço: R$ <strong>${resp.novoPreco}</strong>`;
        })
        .catch(error => {
            console.error('Erro ao calcular reajuste:', error);
            document.getElementById('resultadoReajuste').innerHTML = `Erro: ${error.message || 'Verifique os valores.'}`;
        });
}

function MaiorNumero() {
    const numeros = [];
    for (let i = 1; i <= 6; i++) {
        numeros.push(Number(document.getElementById(`num${i}`).value));
    }

    fetch('http://localhost:4000/maior-numero', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numeros })
    })
        .then(resp => resp.json())
        .then(resp => {
            document.getElementById('resultadoMaiorNumero').innerHTML = `O maior número digitado é: <strong>${resp.maiorNumero}</strong>`;
        })
        .catch(error => {
            console.error('Erro ao encontrar maior número:', error);
            document.getElementById('resultadoMaiorNumero').innerHTML = `Erro: ${error.message || 'Verifique os números.'}`;
        });
}

function ordenarNumeros() {
    const numeros = [];
    for (let i = 1; i <= 5; i++) {
        numeros.push(Number(document.getElementById(`ordNum${i}`).value));
    }

    fetch('http://localhost:4000/ordenar-numeros', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numeros })
    })
        .then(resp => resp.json())
        .then(resp => {
            document.getElementById('resultadoOrdenacao').innerHTML = `Números em ordem crescente: <strong>${resp.numerosOrdenados.join(', ')}</strong>`;
        })
        .catch(error => {
            console.error('Erro ao ordenar números:', error);
            document.getElementById('resultadoOrdenacao').innerHTML = `Erro: ${error.message || 'Verifique os números.'}`;
        });
}

function compararNumeros() {
    const num1 = Number(document.getElementById('compNum1').value);
    const num2 = Number(document.getElementById('compNum2').value);

    fetch('http://localhost:4000/maior-menor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num1, num2 })
    })
        .then(resp => resp.json())
        .then(resp => {
            let resultadoTexto = '';
            if (resp.maior === resp.menor) {
                resultadoTexto = `Ambos os números são iguais: <strong>${resp.maior}</strong>`;
            } else {
                resultadoTexto = `Maior: <strong>${resp.maior}</strong><br>Menor: <strong>${resp.menor}</strong>`;
            }
            document.getElementById('resultadoComparacao').innerHTML = resultadoTexto;
        })
        .catch(error => {
            console.error('Erro ao comparar números:', error);
            document.getElementById('resultadoComparacao').innerHTML = `Erro: ${error.message || 'Verifique os números.'}`;
        });
}

function ReajusteSalarial() {
    const salarioAtual = Number(document.getElementById('salarioFuncionario').value);

    fetch('http://localhost:4000/reajuste-salarial', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ salarioAtual })
    })
        .then(resp => resp.json())
        .then(resp => {
            document.getElementById('resultadoReajusteSalarial').innerHTML = `Novo Salário: R$ <strong>${resp.novoSalario}</strong>`;
        })
        .catch(error => {
            console.error('Erro ao calcular reajuste salarial:', error);
            document.getElementById('resultadoReajusteSalarial').innerHTML = `Erro: ${error.message || 'Verifique o salário.'}`;
        });
}

function MediaNotas() {
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const nota3 = Number(document.getElementById('nota3').value);

    fetch('http://localhost:4000/media-notas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nota1, nota2, nota3 })
    })
        .then(resp => resp.json())
        .then(resp => {
            document.getElementById('resultadoMedia').innerHTML = `Média: <strong>${resp.media}</strong><br>Situação: <strong>${resp.situacao}</strong>`;
        })
        .catch(error => {
            console.error('Erro ao calcular média:', error);
            document.getElementById('resultadoMedia').innerHTML = `Erro: ${error.message || 'Verifique as notas.'}`;
        });
}

function DescontoPeca() {
    const tipoPeca = document.getElementById('tipoPeca').value;
    const precoPeca = Number(document.getElementById('precoPeca').value);

    fetch('http://localhost:4000/desconto-peca', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tipoPeca, precoPeca })
    })
        .then(resp => resp.json())
        .then(resp => {
            document.getElementById('resultadoDescontoPeca').innerHTML = `Valor Final: R$ <strong>${resp.valorFinal}</strong>`;
        })
        .catch(error => {
            console.error('Erro ao calcular desconto da peça:', error);
            document.getElementById('resultadoDescontoPeca').innerHTML = `Erro: ${error.message || 'Verifique os dados da peça.'}`;
        });
}

