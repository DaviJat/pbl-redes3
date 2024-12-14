// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Apostas {
    struct Evento {
        address criador;
        string nome;
        uint resultado; // 0 - Não resolvido, 1 - Cara, 2 - Coroa
        mapping(address => uint) apostas; // Mapeia o endereço do apostador para o valor da aposta
        mapping(address => bool) apostadorCorreto; // Mapeia os apostadores corretos
    }

    mapping(uint => Evento) public eventos;
    uint public eventoCount;

    // Função para criar um evento de aposta
    function criarEvento(string memory _nome) public {
        eventoCount++;
        Evento storage novoEvento = eventos[eventoCount];
        novoEvento.criador = msg.sender;
        novoEvento.nome = _nome;
    }

    // Função para apostar no evento
    function apostar(uint _eventoId) public payable {
        Evento storage evento = eventos[_eventoId];
        require(evento.resultado == 0, "Evento resolvido");
        require(msg.value > 0, "Valor da aposta deve ser maior que 0");

        evento.apostas[msg.sender] = msg.value;
    }

    // Função para resolver o evento e determinar o resultado
    function resolverEvento(uint _eventoId, uint _resultado) public {
        Evento storage evento = eventos[_eventoId];
        require(msg.sender == evento.criador, "Somente o criador pode resolver");
        require(evento.resultado == 0, "Evento resolvido");
        require(_resultado == 1 || _resultado == 2, "Resultado invalido");

        evento.resultado = _resultado;

        // Aqui você pode distribuir o prêmio para os apostadores corretos (exemplo simples)
        for (uint i = 0; i < 2; i++) {
            address apostador = i == 0 ? msg.sender : address(0); // Apenas como exemplo
            if (evento.apostas[apostador] > 0) {
                payable(apostador).transfer(evento.apostas[apostador] * 2); // Multiplica por 2 como prêmio
            }
        }
    }
}
