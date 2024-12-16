import { useEffect } from 'react'
import './App.css'
import { criarEvento } from './web3/web3'
import Button from '@mui/material/Button';

function App() {
useEffect(() => {
  console.log('teste')
}, [])

  return (
    <>
    <div>
      <p>Hello, World!!</p>
      <Button onClick={() => {
        criarEvento()
      }}>
        TESTE
      </Button>
    </div>
    </>
  )
}

export default App
