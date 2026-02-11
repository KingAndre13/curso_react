import './App.css';
import Condicional from './components/Condicional';

function App() {

  const nome = "Maria"

  const url = "https://i.redd.it/haaland-after-letting-his-hair-down-v0-ahlbacmqnawa1.jpg?width=614&format=pjpg&auto=webp&s=c6edbf10fd33b389c8570c1c9c5568fc2fa5fb5c"

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional />
    </div>
  );
}

export default App;
