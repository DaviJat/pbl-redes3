// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Apostas {

    uint constant PRECISION = 1e18; // Constante de precisão

    struct Evento {
        address criador;
        string nome;
        uint resultado; // 0 - Não resolvido, 1 - Cara, 2 - Coroa
        uint totalBet1; // Total apostado em Cara
        uint totalBet2; // Total apostado em Coroa
        bool finalizado; // Indica se o evento foi finalizado
    }

    struct Bet {
        address apostador;
        uint amount;
        uint outcome; // 1 - Cara, 2 - Coroa
    }

    mapping(uint => Evento) public eventos;
    mapping(uint => Bet[]) public apostasPorEvento;
    uint public eventoCount;

    // Eventos Solidity para notificação no front-end
    event EventoCriado(uint eventoId, address criador, string nome);
    event ApostaRealizada(uint eventoId, address apostador, uint amount, uint outcome);
    event ResultadoDefinido(uint eventoId, uint resultado);
    event DistribuicaoRealizada(uint eventoId, uint totalApostas, uint taxa, uint distribuicao);

    // Função para criar um evento de aposta
    function criarEvento(string memory _nome) public {
        eventoCount++;
        Evento storage novoEvento = eventos[eventoCount];
        novoEvento.criador = msg.sender;
        novoEvento.nome = _nome;
        novoEvento.resultado = 0; // Inicializa como "não resolvido"
        novoEvento.totalBet1 = 0;
        novoEvento.totalBet2 = 0;
        novoEvento.finalizado = false;

        emit EventoCriado(eventoCount, msg.sender, _nome);
    }

    // Função para mostrar todos os eventos criados
    function mostrarEventos() public view returns (
        string[] memory nomes,
        address[] memory criadores,
        uint[] memory resultados,
        uint[] memory totalBet1s,
        uint[] memory totalBet2s,
        bool[] memory finalizados
    ) {
        nomes = new string[](eventoCount);
        criadores = new address[](eventoCount);
        resultados = new uint[](eventoCount);
        totalBet1s = new uint[](eventoCount);
        totalBet2s = new uint[](eventoCount);
        finalizados = new bool[](eventoCount);
        
        for (uint i = 1; i <= eventoCount; i++) {
            nomes[i - 1] = eventos[i].nome;
            criadores[i - 1] = eventos[i].criador;
            resultados[i - 1] = eventos[i].resultado;
            totalBet1s[i - 1] = eventos[i].totalBet1;
            totalBet2s[i - 1] = eventos[i].totalBet2;
            finalizados[i - 1] = eventos[i].finalizado;
        }

        return (nomes, criadores, resultados, totalBet1s, totalBet2s, finalizados);
    }

    // Função para apostar em um evento
    function apostar(uint _eventoId, uint _outcome) public payable {
        require(_eventoId > 0 && _eventoId <= eventoCount, "Evento invalido.");
        Evento storage evento = eventos[_eventoId];
        require(!evento.finalizado, "Evento ja finalizado.");
        require(_outcome == 1 || _outcome == 2, "Resultado invalido. Use 1 para Cara ou 2 para Coroa.");
        require(msg.sender != evento.criador, "Criador do evento nao pode apostar neste evento.");
        require(msg.value > 0, "Valor da aposta deve ser maior que zero.");

        // Atualizar o total apostado com base no resultado escolhido
        if (_outcome == 1) {
            evento.totalBet1 += msg.value;
        } else {
            evento.totalBet2 += msg.value;
        }

        // Registrar a aposta
        apostasPorEvento[_eventoId].push(Bet({
            apostador: msg.sender,
            amount: msg.value,
            outcome: _outcome
        }));

        emit ApostaRealizada(_eventoId, msg.sender, msg.value, _outcome);
    }

    // Função para definir o resultado de um evento
    function definirResultado(uint _eventoId, uint _resultado) public {
        require(_eventoId > 0 && _eventoId <= eventoCount, "Evento invalido.");
        Evento storage evento = eventos[_eventoId];
        require(msg.sender == evento.criador, "Apenas o criador pode definir o resultado.");
        require(evento.resultado == 0, "Resultado ja definido.");
        require(_resultado == 1 || _resultado == 2, "Resultado invalido. Use 1 para Cara ou 2 para Coroa.");
        require(!evento.finalizado, "Evento ja finalizado.");

        evento.resultado = _resultado;
        evento.finalizado = true;

        emit ResultadoDefinido(_eventoId, _resultado);

        // Calcular total de apostas
        uint totalApostas = evento.totalBet1 + evento.totalBet2;
        require(totalApostas > 0, "Nao ha apostas para distribuir.");

        // Calcular taxa de 10%
        uint taxa = (totalApostas * PRECISION) / 10 / PRECISION; // 10% de taxa

        // Calcular total para distribuicao
        uint totalDistribuir = totalApostas - taxa;

        // Enviar taxa para o criador
        payable(evento.criador).transfer(taxa);

        // Determinar qual resultado venceu
        uint totalVencedores = (_resultado == 1) ? evento.totalBet1 : evento.totalBet2;
        require(totalVencedores > 0, "Nao ha vencedores para distribuir.");

        // Distribuir os fundos aos vencedores
        for (uint i = 0; i < apostasPorEvento[_eventoId].length; i++) {
            Bet storage aposta = apostasPorEvento[_eventoId][i];
            if (aposta.outcome == _resultado) {
                // Calcular a parcela do vencedor com maior precisão
                uint parcela = (aposta.amount * totalDistribuir * PRECISION) / totalVencedores / PRECISION;
                payable(aposta.apostador).transfer(parcela);
            }
        }

        emit DistribuicaoRealizada(_eventoId, totalApostas, taxa, totalDistribuir);
    }

    // Função para obter todas as apostas de um evento específico
    function getApostas(uint _eventoId) public view returns (Bet[] memory) {
        require(_eventoId > 0 && _eventoId <= eventoCount, "Evento invalido.");
        return apostasPorEvento[_eventoId];
    }
}
