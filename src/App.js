import React, {useState} from 'react'
import styled from 'styled-components'

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000;
`
const Black = styled.p`
  font-weight: bolder;
  color: #000;
`

function App(){
  const [conta, setConta] = useState('0')
  const [gorjeta, setGorjeta] = useState('10')

  return (
    <>
      <h1>Calculadora de Gorjeta</h1>
      <p>Quanto deu a conta?</p>
      <Input type="number" value={conta} onChange={(e)=>setConta(parseFloat(e.target.value))}/>
      <p>Qual a porcentagem de gorjeta?</p>
      <Input type="number" value={gorjeta} onChange={(e)=>setGorjeta(parseFloat(e.target.value))}/>
      <hr/>
      {conta > 0 &&
        <>
          <p>Sub-total: R$ {conta.toFixed(2)}</p>
          <p>Gorjeta({gorjeta}%): R$ {((gorjeta/100) * conta).toFixed(2)}</p>
          <Black>Total: R$ {(conta + (gorjeta/100 * conta)).toFixed(2)}</Black>
        </>
      }
    </>
  )
}

export default App
