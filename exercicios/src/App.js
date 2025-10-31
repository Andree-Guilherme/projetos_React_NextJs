import { useState } from 'react'

function App() {
  const [aluno, setAluno] = useState('André')

  function handleChangeName(nome) {
  setAluno(nome);
}
  
  return (
    <div>
        <h1>Bem-vindo ao meu primeiro App com React!</h1>
        <h2>Olá: {aluno}</h2>
        <button onClick={ () => handleChangeName('Guilherme') }>
          Mudar nome
        </button>
      </div>
  );
}

export default App;
