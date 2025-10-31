import { useState } from 'react'

function App() {
  const [aluno, setAluno] = useState('André')

  function handleChangeName() {
  setAluno('Matheus');
}
  
  return (
    <div>
        <h1>Bem-vindo ao meu primeiro App com React!</h1>
        <h2>Olá: {aluno}</h2>
        <button onClick={handleChangeName}>
          Mudar nome
        </button>
      </div>
  );
}

export default App;
