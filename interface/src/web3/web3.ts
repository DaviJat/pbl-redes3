import Web3 from 'web3';
import ContractApostas from '../../../build/contracts/Apostas.json';

const ContractAdress = '0x027DaD116b3fb779C7F75f978cb6505c3bA8fb7A';

const provider = new Web3.providers.HttpProvider(
  "http://127.0.0.1:7545"
);

const web3 = new Web3(provider);

const ContractHandler = new web3.eth.Contract(
    ContractApostas.abi,
    ContractAdress
)

export function criarEvento() {
    try {
        ContractHandler.methods.criarEvento('PrimeiroEvento').send({from: '0xAd54e611C4424004DE91439Fd7849e4D310ecF5c',
            gas: '129999'
        });
    } catch (error) {
        console.log('catch')
    }
}