// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Determinando o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Heroi
const mago = new Heroi('Merlin', 100, 'mago');
const guerreiro = new Heroi('Arthur', 30, 'guerreiro');
const monge = new Heroi('Li', 40, 'monge');
const ninja = new Heroi('Hanzo', 25, 'ninja');

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
