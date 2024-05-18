const prompt = require('prompt-sync')();

console.log('\x1b[1;31m%s\x1b[0m', '-'.repeat(40));
console.log('\x1b[1;30;41m%s\x1b[0m', ' >>>>>> CALCULADORA <<<<<< ');
console.log('\x1b[1;31m%s\x1b[0m', '-'.repeat(40));

while (true) {
    console.log(`\x1b[1;32m>>>>>> Escolha sua Opção <<<<<<
    [1] - Adição 
    [2] - Subtração
    [3] - Multiplicação
    [4] - Divisão 
    [5] - Potência 
    [6] - Raiz Quadrada
    [7] - Sair do programa \x1b[0m`);

    let operacao = parseInt(prompt('\x1b[1;30;43m Qual operador deseja utilizar [1, 2, 3, 4, 5, 6, 7]: \x1b[0m'));

    if (operacao === 7) {
        console.log('\x1b[1;30;41m Saindo do programa.... \x1b[0m');
        break;
    }

    let n1 = parseFloat(prompt('\x1b[1;36m Digite o 1º número: \x1b[0m'));
    let n2 = parseFloat(prompt('\x1b[1;36m Digite o 2º número: \x1b[0m'));

    // Verificando se alguma das variáveis é 0
    if (n1 === 0 || n2 === 0) {
        console.log('\x1b[1;34m Operação não é válida! Digite um número válido. \x1b[0m');
        break;
    }

    while (true) {
        let resultado;
        if (operacao === 1) {
            resultado = n1 + n2;
            console.log(`\x1b[1;31m O resultado é: ${resultado.toFixed(0)} \x1b[0m`);
            break;
        } else if (operacao === 2) {
            resultado = n1 - n2;
            console.log(`\x1b[1;31m O resultado é: ${resultado.toFixed(0)} \x1b[0m`);
            break;
        } else if (operacao === 3) {
            resultado = n1 * n2;
            console.log(`\x1b[1;31m O resultado é: ${resultado.toFixed(0)} \x1b[0m`);
            break;
        } else if (operacao === 4) {
            resultado = n1 / n2;
            console.log(`\x1b[1;31m O resultado é: ${resultado.toFixed(0)} \x1b[0m`);
            break;
        } else if (operacao === 5) {
            resultado = Math.pow(n1, n2);
            console.log(`\x1b[1;31m O resultado de ${n1} elevado a ${n2} é: ${resultado.toFixed(0)} \x1b[0m`);
            break;
        } else if (operacao === 6) {
            resultado = Math.sqrt(n1);
            console.log(`\x1b[1;31m A raiz quadrada de ${n1} é: ${resultado.toFixed(1)} \x1b[0m`);
            resultado = Math.sqrt(n2);
            console.log(`\x1b[1;31m A raiz quadrada de ${n2} é: ${resultado.toFixed(1)} \x1b[0m`);
            break;
        } else {
            console.log('Opção inválida! Informe o operador correto.');
        }
    }

    let resp = '';
    while (resp !== 'S' && resp !== 'N') {
        resp = prompt('\x1b[1;35m Quer Continuar? [S/N]: \x1b[0m').trim().toUpperCase();
    }
    if (resp === 'N') {
        console.log('\x1b[1;30;41m Saindo do programa.... \x1b[0m');
        break;
    }
}