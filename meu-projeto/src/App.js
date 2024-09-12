import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'mateus'

  function sum(a, b){
    return a + b
  }
  return (
    <div className="App">
      <h1> ola react</h1>
      <p>ola, {name}</p>
      <p>soma: {sum(3, 3)}</p>
    </div>
  );
}

export default App;
