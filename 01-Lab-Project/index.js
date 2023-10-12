// Troque o nome ou a quantidade de XP por nome ou númeor que desejar.

const nomeDoHeroi = "Dylan007";

const quantidadeXP = 100;

let nivelDoHeroi = "";

// Usando a estrutura dos IF Else

if (quantidadeXP < 1000) {
  nivelDoHeroi = "Ferro";
} else if (quantidadeXP >= 1001 && quantidadeXP <= 2000) {
  nivelDoHeroi = "Bronze";
} else if (quantidadeXP >= 2001 && quantidadeXP <= 6000) {
  nivelDoHeroi = "Prata";
} else if (quantidadeXP >= 2001 && quantidadeXP <= 5000) {
  nivelDoHeroi = "Prata";
} else if (quantidadeXP >= 6001 && quantidadeXP <= 7000) {
  nivelDoHeroi = "Ouro";
} else if (quantidadeXP >= 7001 && quantidadeXP <= 8000) {
  nivelDoHeroi = "Platina";
} else if (quantidadeXP >= 8001 && quantidadeXP <= 9000) {
  nivelDoHeroi = "Ascendente";
} else if (quantidadeXP >= 9001 && quantidadeXP <= 10000) {
  nivelDoHeroi = "Imortal";
} else {
  nivelDoHeroi = "Radiante";
}

console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
