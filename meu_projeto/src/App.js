import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const podium = ['1° - Massa', '2° - Alonso', '3° - Hamilton']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={podium}/>
      <OutraLista itens={[]}/>
    </div>
  );
}

export default App;
