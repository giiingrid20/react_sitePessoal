import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SobreMim from './components/SobreMim';
import Curiosidade from './components/Curiosidade';
import Projetos from './components/Projetos';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <SobreMim></SobreMim>
      <Curiosidade></Curiosidade>
      <Projetos></Projetos>
    </div>
  );
}


export default App;
