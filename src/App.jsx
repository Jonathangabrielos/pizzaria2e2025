import { useState } from "react"

function App(){

const [nome, setNome] = useState('ronaldo')

  return (
<div>
  <h3>Pizzaria 2E Let's go!!!</h3>

    <input 
      className = "nome"
      onChange={(e)=>{setNome(e.target.value)}}   
    type="text" />

    <button
      className="botao"
    onClick={()=>{alert(nome)}}
    >
      Clique aqui
    </button>

</div>
  )
}

export default App
