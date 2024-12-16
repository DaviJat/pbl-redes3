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
        novoEvento.resultado = 0; // Inicializa como "não resolvido"
    }
}
