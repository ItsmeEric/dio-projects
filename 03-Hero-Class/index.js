class Hero {
  constructor(nome, idade, tipoDeHeroi) {
    this.name = nome;
    this.idade = idade;
    this.tipoDeHeroi = tipoDeHeroi;
  }

  atacar() {
    let ataque;
    switch (this.tipoDeHeroi) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque não definido";
        break;
    }
    console.log(`O ${this.tipoDeHeroi} atacou usando ${ataque}`);
  }
}

let heroi = new Hero("Eric", 25, "guerreiro");
heroi.atacar();
