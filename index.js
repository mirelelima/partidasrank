let SaldoJogadas = [
    { nome: "jogador 1", vitorias: 110, derrotas: 10 },
    { nome: "jogador 2", vitorias: 95, derrotas: 5 },
    { nome: "jogador 3", vitorias: 85, derrotas: 5 },
    { nome: "jogador 4", vitorias: 55, derrotas: 7 },
    { nome: "jogador 5", vitorias: 30, derrotas: 2 },
    { nome: "jogador 6", vitorias: 15, derrotas: 1 },
    { nome: "jogador 7", vitorias: 5, derrotas: 3 }
];

// Função para classificar o nível com base na experiência
function classificarNivel(experiencia) {
    if (experiencia < 9) {
        return "Ferro";
    } else if (experiencia <= 15) {
        return "Bronze";
    } else if (experiencia <= 40) {
        return "Prata";
    } else if (experiencia <= 60) {
        return "Ouro";
    } else if (experiencia <= 85) {
        return "Diamante";
    } else if (experiencia <= 99) {
        return "Lendário";
    } else if (experiencia <= 120) {
        return "Imortal";
    }
}

// Loop para percorrer todos os jogadores e exibir o saldo e o nível
SaldoJogadas.forEach(jogador => {
    let saldoVitorias = jogador.vitorias - jogador.derrotas; // Calcula o saldo de vitórias
    let nivel = classificarNivel(saldoVitorias); // Classifica o nível com base no saldo
    console.log(`O ${jogador.nome} tem de saldo de **${saldoVitorias}** e está no nível de ${nivel}`);
});
