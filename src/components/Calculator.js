import { useState } from "react"

function Calculator(props) {
    const [valueCoinA, setValueCoinA] = useState();
    const [valueCoinB, setValueCoinB] = useState(updateCoin(valueCoinA));
    const [coinA, setCoinA] = useState('Dollar');
    const [coinB, setCoinB] = useState('Real');

    function updateCoin(valueBase, valueB=false) {
        if (valueB) {
            return valueBase / props.ask;
        }
        return valueBase * props.ask;
    }

    function swap() {
        setValueCoinA(valueCoinB);
        setValueCoinB(updateCoin(valueCoinB));
    }
    
    require('./Calculator.css');
    return (
        <div className="calculator">
            <div className="setCoins">
                <div>
                    <input type="number" name="fstCoin" className="inCoin" placeholder="Dollar" min={0}
                     value={valueCoinA}
                     onChange={e => setValueCoinA(e.target.value) & setValueCoinB(updateCoin(e.target.value))}/>
                    <p className="pCoin">{coinA}</p>
                </div>
                <div>
                    <input type="number" name="scdCoin" className="inCoin" placeholder="Real" min={0}
                     value={valueCoinB}
                     onChange={e => setValueCoinB(e.target.value) & setValueCoinA(updateCoin(e.target.value, true))}/>
                    <p className="pCoin">{coinB}</p>
                </div>
            </div>
            <button className="swap" onClick={swap}>Swap</button>
        </div>
    )
}

export default Calculator