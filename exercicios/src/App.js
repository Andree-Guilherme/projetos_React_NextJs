import Nome from './components/Nome'
import Idade from './components/Idade'

function App() {
  return (
    <div>
      <h1>Bem - vindo ao meu primeiro App com React!</h1>
      <Nome aluno = "André" />
      <Idade aluno = {30} />
    </div>
  );
}

export default App;
