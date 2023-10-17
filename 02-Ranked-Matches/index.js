const numeroVictorias = 400;

const numeroDerrotas = 10;

let nivelDoHeroi = "";

function calculoDeRank(victorias, derrotas) {
  let resultadoDoRank;
  resultadoDoRank = victorias - derrotas;
  return resultadoDoRank;
}

//Correndo a função e obtendo a o saldo
const saldoVitorias = calculoDeRank(numeroVictorias, numeroDerrotas);

// Validando o número de victórias
if (saldoVitorias < 0) {
  return console.log("O saldo de vitórias é menor que 0!");
}

// Estrutura de decisão para atribuição do Rank
if (saldoVitorias < 10) {
  nivelDoHeroi = "Ferro";
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
  nivelDoHeroi = "Bronze";
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
  nivelDoHeroi = "Prata";
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
  nivelDoHeroi = "Ouro";
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
  nivelDoHeroi = "Diamante";
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
  nivelDoHeroi = "Lendário";
} else {
  nivelDoHeroi = "Imortal";
}

console.log(
  `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivelDoHeroi}`
);
