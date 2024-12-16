// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Apostas {

    struct Evento {
        address criador;
        string nome;
        uint resultado; // 0 - Não resolvido, 1 - Cara, 2 - Coroa
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

    // Função para mostrar todos os eventos criados
    function mostrarEventos() public view returns (string[] memory nomes, address[] memory criadores, uint[] memory resultados) {
        string[] memory _nomes = new string[](eventoCount);
        address[] memory _criadores = new address[](eventoCount);
        uint[] memory _resultados = new uint[](eventoCount);
        
        for (uint i = 1; i <= eventoCount; i++) {
            _nomes[i - 1] = eventos[i].nome;
            _criadores[i - 1] = eventos[i].criador;
            _resultados[i - 1] = eventos[i].resultado;
        }

        return (_nomes, _criadores, _resultados);
    }
}
