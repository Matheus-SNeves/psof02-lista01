const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Bem vindo à Lista de Exercícios!');
});

app.post('/inss', (req, res) => {
    const { salario } = req.body;
    let inss = 0;
    if (salario <= 1212) {
        inss = salario * 0.075;
    } else if (salario < 2427.35) {
        inss = salario * 0.09;
    } else if (salario < 3641.03) {
        inss = salario * 0.12;
    } else if (salario < 7087.22) {
        inss = salario * 0.14;
    } else {
        inss = 992.21;
    }
    let salarioComDesconto = salario - inss;
    res.json({ inss: inss.toFixed(2), salarioComDesconto: salarioComDesconto.toFixed(2) });
});


app.post('/classificar-triangulo', (req, res) => {
    const { a, b, c } = req.body;
    let tipoTriangulo = '';

    if (a === b && b === c) {
        tipoTriangulo = 'EQUILÁTERO';
    } else if (a !== b && a !== c && b !== c) {
        tipoTriangulo = 'ESCALENO';
    } else {
        tipoTriangulo = 'ISÓSCELES';
    }
    res.json({ tipoTriangulo });
});

app.post('/reajuste-mercadoria', (req, res) => {
    const { nomeMercadoria, precoOriginal } = req.body;
    let percentualAumento = 0;

    if (precoOriginal < 1000) {
        percentualAumento = 0.05;
    } else {
        percentualAumento = 0.07;
    }

    const novoPreco = precoOriginal * (1 + percentualAumento);
    res.json({ nomeMercadoria, novoPreco: novoPreco.toFixed(2) });
});

app.post('/maior-numero', (req, res) => {
    const { numeros } = req.body; 
    let maiorNumero = numeros[0]; 

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    res.json({ maiorNumero });
});

app.post('/ordenar-numeros', (req, res) => {
    const { numeros } = req.body;
    const numerosOrdenados = [...numeros].sort((a, b) => a - b);
    res.json({ numerosOrdenados });
});

app.post('/maior-menor', (req, res) => {
    const { num1, num2 } = req.body;
    let maior = 0;
    let menor = 0;

    if (num1 > num2) {
        maior = num1;
        menor = num2;
    } else {
        maior = num2;
        menor = num1;
    }
    res.json({ maior, menor });
});

app.post('/reajuste-salarial', (req, res) => {
    const { salarioAtual } = req.body;
    let percentualAumento = 0;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        percentualAumento = 0.15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        percentualAumento = 0.12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        percentualAumento = 0.09;
    } else if (salarioAtual >= 3000) {
        percentualAumento = 0.06;
    }

    const novoSalario = salarioAtual * (1 + percentualAumento);
    res.json({ novoSalario: novoSalario.toFixed(2) });
});

app.post('/media-notas', (req, res) => {
    const { nota1, nota2, nota3 } = req.body;
    const media = (nota1 + nota2 + nota3) / 3;
    let situacao = '';

    if (media >= 6) {
        situacao = 'Aprovado';
    } else if (media >= 4) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }
    res.json({ media: media.toFixed(2), situacao });
});

app.post('/desconto-peca', (req, res) => {
    const { tipoPeca, precoPeca } = req.body;
    let percentualDesconto = 0;

    switch (tipoPeca.toLowerCase()) {
        case 'camisa':
            percentualDesconto = 0.20;
            break;
        case 'bermuda':
            percentualDesconto = 0.10;
            break;
        case 'calça':
            percentualDesconto = 0.15;
            break;
        default:
            percentualDesconto = 0;
            break;
    }

    const valorFinal = precoPeca * (1 - percentualDesconto);
    res.json({ valorFinal: valorFinal.toFixed(2) });
});

app.listen(4000, () => {
    console.log('Servidor rodando em http://localhost:4000');
});