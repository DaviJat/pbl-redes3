import { useEffect } from 'react'
import './App.css'
import { criarEvento, mostrarEventos } from './web3/web3'
import Button from '@mui/material/Button';

function App() {
useEffect(() => {
  mostrarEventos();
}, [])

  return (
    <>
    <div>
      <p>Hello, World!!</p>
      <Button onClick={() => {
        criarEvento(nome_evento, conta_cliente)
      }}>
        TESTE
      </Button>
    </div>
    </>
  )
}

export default App
