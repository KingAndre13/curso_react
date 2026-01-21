import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Item from './components/Item';
import Evento from './components/Evento';
import Form from './components/Form';
function App() {

  const nome = "Maria"

  const url = "https://i.redd.it/haaland-after-letting-his-hair-down-v0-ahlbacmqnawa1.jpg?width=614&format=pjpg&auto=webp&s=c6edbf10fd33b389c8570c1c9c5568fc2fa5fb5c"

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <Form />
    </div>
  );
}

export default App;
