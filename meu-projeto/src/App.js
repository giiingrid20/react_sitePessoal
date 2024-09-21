import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SobreMim from './components/SobreMim';
import Curiosidade from './components/Curiosidade';
import Projetos from './components/Projetos';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <SobreMim></SobreMim>
      <Curiosidade></Curiosidade>
      <h1 id='tituloProjetos' >Meus Projetos</h1>
      <Projetos></Projetos>
      <Footer></Footer>
    </div>
  );
}


export default App;
