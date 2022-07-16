import { useState } from "react"
import Select from "react-select";

function Calculator(props) {
    const [valueCoinA, setValueCoinA] = useState(0);
    const [valueCoinB, setValueCoinB] = useState(updateCoin(valueCoinA));
    const options = [
        {value: 'USD', label: 'Dollar'},
        {value: 'BRL', label: 'Real'},
        {value: 'EUR', label: 'Euro'}
    ]

    function updateCoin(valueBase, valueB=false) {
        if (valueB) {
            return valueBase / props.ask;
        }
        return valueBase * props.ask;
    }
    
    require('./Calculator.css');
    return (
        <div className="calculator">
            <div>
                <div className="setCoins">
                    <input type="number" name="fstCoin" className="inCoin" placeholder="0" min={0}
                     value={valueCoinA}
                     onChange={e => setValueCoinA(e.target.value) & setValueCoinB(updateCoin(e.target.value))}/><Select
                     className="select" options={options} defaultValue={options[0]} onChange={e => props.setCA(e.value)}/>
                </div>
                <div className="setCoins">
                    <input type="number" name="scdCoin" className="inCoin" placeholder="0" min={0}
                     value={valueCoinB}
                     onChange={e => setValueCoinB(e.target.value) & setValueCoinA(updateCoin(e.target.value, true))}/><Select
                     className="select" options={options} defaultValue={options[1]} onChange={e => props.setCB(e.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator