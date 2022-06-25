import logo from './logo.svg';
import './App.css';
import Stats from './components/Stats';
import Calculator from './components/Calculator';

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
