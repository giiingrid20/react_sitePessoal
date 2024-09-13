import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
function App() {
  const name = 'mateus'

  function sum(a, b){
    return a + b
  }

  const url = "https://via.placeholder.com/150"
  return (
    <div className="App">
      <h1> ola react</h1>
      <p>ola, {name}</p>
      <p>soma: {sum(3, 3)}</p>
      <img src={url} alt="minha imagem"/>
      <HelloWorld></HelloWorld>
      <Frase></Frase>
    </div>
  );
}



export default App;
