import './App.css';

function App() {

  const name = "Silvan"
  const newName = name.toUpperCase()
  function sum (a, b) {
    return a + b
  }

  const url = "https://i.redd.it/haaland-after-letting-his-hair-down-v0-ahlbacmqnawa1.jpg?width=614&format=pjpg&auto=webp&s=c6edbf10fd33b389c8570c1c9c5568fc2fa5fb5c"

  return (
    <div className="App">
      <h2>O {newName} é tchola!</h2>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"></img>
    </div>
  );
}

export default App;
