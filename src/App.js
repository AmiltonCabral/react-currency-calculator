import './App.css';
import Stats from './components/Stats.js';
import Calculator from './components/Calculator.js';
import { useEffect, useState } from "react"

function App() {

  const [exchangeData, setExchangeData] = useState({});

  useEffect(() => {
    fetch("https://economia.awesomeapi.com.br/last/USD-BRL")
    .then(res => res.json())
    .then(
        (result) => {
            setExchangeData(result.USDBRL);
            console.log(result);
        }
    )
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Currency Calculator</h1>
      </header>
      <Stats ask={exchangeData.ask} create_date={exchangeData.create_date}/>
      <Calculator ask={exchangeData.ask}/>
    </div>
  );
}

export default App;
