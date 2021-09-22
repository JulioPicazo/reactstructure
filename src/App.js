import logo from './logo.svg';
import './App.css';
import HolaMundo from "./components/HolaMundo";
import AdiosMundo from "./components/AdiosMundo";
import Saludar from './components/Saludar';

function App() {

  const anos = 22;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar data="Julio Picazo" anios={anos} />
        <Saludar data="Alexis Marinez" anios="19" />
      </header>
    </div>
  );
}

export default App;

