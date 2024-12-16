import Web3 from 'web3';
import ContractApostas from '../../../build/contracts/Apostas.json';

const ContractAdress = '0x027DaD116b3fb779C7F75f978cb6505c3bA8fb7A';

const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545");
const web3 = new Web3(provider);

const ContractHandler = new web3.eth.Contract(ContractApostas.abi, ContractAdress);

// Função para criar evento
export async function criarEvento(nome_evento: string, conta_cliente: number) {
    try {
        const conta = await web3.eth.getAccounts();

        ContractHandler.methods.criarEvento(nome_evento).send({ from: conta[conta_cliente] });
    } catch (error) {
        console.error("Erro ao criar evento:", error);
    }
}

// Função para mostrar todos os eventos
export async function mostrarEventos() {
    try {
        const eventos = await ContractHandler.methods.mostrarEventos().call();
        console.log(eventos);
        return eventos;  // Retorna nome, criador e resultado dos eventos
    } catch (error) {
        console.error("Erro ao buscar eventos:", error);
    }
}
