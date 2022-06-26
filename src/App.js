import logo from './logo.svg';
import './App.css';
import Stats from './components/Stats.js';
import Calculator from './components/Calculator.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Currency Calculator</h1>
      </header>
      <Stats/>
      <Calculator />
    </div>
  );
}

export default App;
