import { useState } from "react"

function Calculator() {

    const [dollarRealQuote, setDollarRealQuote] = useState(5.24);

    require('./Calculator.css');
    return (
        <div className="calculator">
            <div className="setCoins">
                <div>
                    <input type="number" name="fstCoin" className="inCoin" placeholder="Dollar" min={0} defaultValue={1}/>
                    <p className="pCoin">Dollar</p>
                </div>
                <div>
                    <input type="number" name="scdCoin" className="inCoin" placeholder="Real" min={0}/>
                    <p className="pCoin">Real</p>
                </div>
            </div>
            <button className="swap">Swap</button>
        </div>
    )
}

export default Calculator