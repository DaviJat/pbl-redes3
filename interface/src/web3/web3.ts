// src/web3/web3.ts
import Web3 from 'web3';
import ApostasABI from '../../../build/contracts/Apostas.json'; // Verifique o caminho

/**
 * Interface representando um Evento.
 */
export interface Evento {
  eventoId: number;
  nome_evento: string;
  criador: string;
  resultado: number;
  totalBet1: string; // Usando string para lidar com grandes valores de ETH
  totalBet2: string;
  finalizado: boolean;
}

/**
 * Interface representando uma Aposta.
 */
export interface Bet {
  apostador: string;
  amount: string; // Usando string para lidar com grandes valores de ETH
  outcome: number;
}

const ContractAddress = '0xa1b3974D7B827406F863195437202fae880522F5'; // Atualize com o endereço do seu contrato
const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545"); // Endereço do Ganache
const web3 = new Web3(provider);

// Cria uma instância do contrato
const ContractHandler = new web3.eth.Contract(ApostasABI.abi as any, ContractAddress);

/**
 * Função para criar um evento.
 * @param nome_evento - Nome do evento a ser criado.
 * @param conta_cliente - Índice da conta (0-9) no Ganache.
 */
export async function criarEvento(nome_evento: string, conta_cliente: number): Promise<void> {
  try {
    const contas = await web3.eth.getAccounts();

    if (conta_cliente < 0 || conta_cliente >= contas.length) {
      throw new Error("Índice da conta inválido.");
    }

    const contaEndereco = contas[conta_cliente]; // Converte número para endereço

    await ContractHandler.methods.criarEvento(nome_evento).send({ from: contaEndereco, gas: '200000' });

    console.log(`Evento "${nome_evento}" criado pela conta ${contaEndereco}`);
  } catch (error) {
    console.error("Erro ao criar evento:", error);
    throw error;
  }
}

/**
 * Função para buscar todos os eventos.
 * @returns Promise<Evento[]>
 */
export async function mostrarEventos(): Promise<Evento[]> {
  try {
    const result: any = await ContractHandler.methods.mostrarEventos().call();

    // Log para depuração
    console.log("Raw mostrarEventos result:", result);

    // Verifique se o retorno é um objeto com propriedades 'nomes', 'criadores', etc.
    let nomes: string[] = [];
    let criadores: string[] = [];
    let resultados: number[] = [];
    let totalBet1s: string[] = [];
    let totalBet2s: string[] = [];
    let finalizados: boolean[] = [];

    if (
      result.nomes && 
      result.criadores && 
      result.resultados && 
      result.totalBet1s && 
      result.totalBet2s && 
      result.finalizados
    ) {
      nomes = result.nomes;
      criadores = result.criadores;
      resultados = result.resultados;
      totalBet1s = result.totalBet1s;
      totalBet2s = result.totalBet2s;
      finalizados = result.finalizados;
    } else if (Array.isArray(result) && result.length === 6) {
      // Alternativamente, se o retorno for um array com seis elementos
      nomes = result[0];
      criadores = result[1];
      resultados = result[2];
      totalBet1s = result[3];
      totalBet2s = result[4];
      finalizados = result[5];
    } else {
      throw new Error("Estrutura de retorno inesperada.");
    }

    const eventos: Evento[] = nomes.map((nome, index) => ({
      eventoId: index + 1, // IDs começam em 1
      nome_evento: nome,
      criador: criadores[index],
      resultado: resultados[index],
      totalBet1: web3.utils.fromWei(totalBet1s[index], 'ether'),
      totalBet2: web3.utils.fromWei(totalBet2s[index], 'ether'),
      finalizado: finalizados[index],
    }));

    console.log("Eventos obtidos:", eventos);
    return eventos;
  } catch (error) {
    console.error("Erro ao buscar eventos:", error);
    return [];
  }
}

/**
 * Função para apostar em um evento.
 * @param eventoId - ID do evento em que deseja apostar.
 * @param outcome - Resultado no qual deseja apostar (1 - Cara, 2 - Coroa).
 * @param conta_cliente - Índice da conta (0-9) no Ganache.
 * @param valor - Valor da aposta em ETH.
 */
export async function apostar(eventoId: number, outcome: number, conta_cliente: number, valor: string): Promise<void> {
  try {
    const contas = await web3.eth.getAccounts();

    if (conta_cliente < 0 || conta_cliente >= contas.length) {
      throw new Error("Índice da conta inválido.");
    }

    const contaEndereco = contas[conta_cliente];
    const valorWei = web3.utils.toWei(valor, 'ether'); // Converter ETH para wei

    await ContractHandler.methods.apostar(eventoId, outcome).send({ from: contaEndereco, value: valorWei, gas: '200000' });

    console.log(`Aposta de ${valor} ETH no evento ${eventoId} por ${contaEndereco} no resultado ${outcome}`);
  } catch (error) {
    console.error("Erro ao apostar:", error);
    throw error;
  }
}

/**
 * Função para definir o resultado de um evento.
 * @param eventoId - ID do evento cujo resultado deseja definir.
 * @param resultado - Resultado do evento (1 - Cara, 2 - Coroa).
 * @param conta_cliente - Índice da conta (0-9) no Ganache (deve ser o criador do evento).
 */
export async function definirResultado(eventoId: number, resultado: number, conta_cliente: number): Promise<void> {
  try {
    const contas = await web3.eth.getAccounts();

    if (conta_cliente < 0 || conta_cliente >= contas.length) {
      throw new Error("Índice da conta inválido.");
    }

    const contaEndereco = contas[conta_cliente];

    await ContractHandler.methods.definirResultado(eventoId, resultado).send({ from: contaEndereco, gas: '200000' });

    console.log(`Resultado ${resultado} definido para o evento ${eventoId} pelo criador ${contaEndereco}`);
  } catch (error) {
    console.error("Erro ao definir resultado:", error);
    throw error;
  }
}

/**
 * Função para obter todas as apostas de um evento específico.
 * @param eventoId - ID do evento.
 * @returns Promise<Bet[]>
 */
export async function getApostas(eventoId: number): Promise<Bet[]> {
  try {
    const apostas: Bet[] = await ContractHandler.methods.getApostas(eventoId).call();

    // Converter valores de Wei para ETH
    const apostasConvertidas: Bet[] = apostas.map(aposta => ({
      apostador: aposta.apostador,
      amount: web3.utils.fromWei(aposta.amount, 'ether'),
      outcome: aposta.outcome,
    }));

    console.log(`Apostas do evento ${eventoId}:`, apostasConvertidas);
    return apostasConvertidas;
  } catch (error) {
    console.error("Erro ao obter apostas:", error);
    return [];
  }
}

/**
 * Função para obter as contas disponíveis.
 * @returns Promise<string[]>
 */
export async function getContas(): Promise<string[]> {
  try {
    const contas = await web3.eth.getAccounts();
    return contas;
  } catch (error) {
    console.error("Erro ao obter contas:", error);
    return [];
  }
}

// Exporta a instância do web3 para uso no front-end
export { web3 };
