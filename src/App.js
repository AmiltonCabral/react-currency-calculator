import './App.css';
import Stats from './components/Stats.js';
import Calculator from './components/Calculator.js';
import { useEffect, useState } from "react"

function App() {

  const [exchangeData, setExchangeData] = useState({});
  const [coinA, setCoinA] = useState('USD');
  const [coinB, setCoinB] = useState('BRL');

  useEffect(() => {
    setDataAPI();
  }, [])

  function setDataAPI(cA=coinA, cB=coinB) {
    fetch("https://economia.awesomeapi.com.br/last/"+cA+"-"+cB)
    .then(res => res.json())
    .then(
      (result) => {
        setExchangeData(result[cA+cB]);
      }
    )
  }

  function setCA(cv) {
    setDataAPI(cv, coinB);
    setCoinA(cv);
    console.log(exchangeData);
  }

  function setCB(cv) {
    setDataAPI(coinA, cv);
    setCoinB(cv);
  }

  return (
    <div className="App">
      <header>
        <h1>Currency Calculator</h1>
      </header>
      <Stats ask={exchangeData.ask} data={exchangeData} create_date={exchangeData.create_date}/>
      <Calculator ask={exchangeData.ask} setCA={setCA} setCB={setCB}/>
    </div>
  );
}

export default App;
