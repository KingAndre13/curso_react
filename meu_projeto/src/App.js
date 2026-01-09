import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
function App() {

  const nome = "Maria"

  const url = "https://i.redd.it/haaland-after-letting-his-hair-down-v0-ahlbacmqnawa1.jpg?width=614&format=pjpg&auto=webp&s=c6edbf10fd33b389c8570c1c9c5568fc2fa5fb5c"

  return (
    <div className="App">
      <SayMyName nome="André" />
      <SayMyName nome="Davi" />
      <SayMyName nome={nome} />
      <Pessoa nome="Rodrigo" idade="25" profissao="Assistente em TI" foto="https://s2-oglobo.glbimg.com/ne-pa7bKMxi0uOzmacyTbY3Bkkg=/0x0:984x554/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2026/u/x/qRHRwATwi4qMYzUnADfg/primeira-foto-de-maduro-preso-pelos-eua.avif"/>
    </div>
  );
}

export default App;
