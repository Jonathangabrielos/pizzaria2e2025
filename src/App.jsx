import { useState } from "react"

function App(){

const [nome, setNome] = useState('ronaldo')

  const Formulario = ()=>{
    return (
  <div>
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

  return (
<div>
  <h3>Pizzaria 2E Let's go!!!</h3>

  <Formulario />
  <Formulario />
  <Formulario />

   

</div>
  )
}

export default App
