// Gera um número randômico entre 0 e 10
const numeroSecreto = Math.floor(Math.random() * 11); // Multiplica por 11 para incluir o 10
let tentativas = 3;

alert("Bem-vindo ao Jogo de Adivinhação!");
alert("Tente adivinhar o número secreto entre 0 e 10. Você tem 3 tentativas!");

for (let i = 1; i <= tentativas; i++) {
    // Pede ao usuário para chutar um número
    let chute = parseInt(prompt(`Tentativa ${i}: Qual é o número?`));

    // Verifica se o chute está correto
    if (chute === numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}) na tentativa ${i}!`);
        return; // Encerra o jogo
    } else {
        alert(`Errou! Tente novamente.`);
    }
}

// Se o usuário não acertar após as tentativas
alert(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}.`);