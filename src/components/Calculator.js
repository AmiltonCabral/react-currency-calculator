import { useState } from "react"
import Select from "react-select";

function Calculator(props) {
    const [valueCoinA, setValueCoinA] = useState(0);
    const [valueCoinB, setValueCoinB] = useState(updateCoin(valueCoinA));
    const options = [
        {value: 'USD', label: 'US Dollar'},
        {value: 'EUR', label: 'Euro'},
        {value: 'BRL', label: 'Brazilian Real'},
        {value: 'XAF', label: 'CFA Franc BCEAO'},
        {value: 'ARS', label: 'Argentine Peso'},
        {value: 'AUD', label: 'Australian Dollar'},
        {value: 'CAD', label: 'Canadian Dollar'},
        {value: 'CHF', label: 'Swiss Franc'},
        {value: 'CLP', label: 'Chilean Peso'},
        {value: 'CNY', label: 'Yuan'},
        {value: 'COP', label: 'Colombian Peso'},
        {value: 'GBP', label: 'Pound Sterling'},
        {value: 'JPY', label: 'Yen'},
        {value: 'KRW', label: 'South Korean Won'},
        {value: 'MXN', label: 'Mexican Peso'},
        {value: 'NZD', label: 'New Zealand Dollar'},
        {value: 'PEN', label: 'Nuevo Sol'},
        {value: 'PYG', label: 'Guarani'},
        {value: 'RUB', label: 'Russian Ruble'},
        {value: 'TRY', label: 'Turkish Lira'},
        {value: 'UYU', label: 'Peso Uruguayo'},
        {value: 'VEF', label: 'Bolivar Fuerte'},
        {value: 'XCD', label: 'East Caribbean Dollar'},
        {value: 'ZAR', label: 'Rand'}
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
                     onChange={e => setValueCoinA(e.target.value) & setValueCoinB(updateCoin(e.target.value).toFixed(2))}/><Select
                        className="select" options={options} defaultValue={options[0]} onChange={e => props.setCA(e.value)}/>
                </div>
                <div className="setCoins">
                    <input type="number" name="scdCoin" className="inCoin" placeholder="0" min={0}
                     value={valueCoinB}
                     onChange={e => setValueCoinB(e.target.value) & setValueCoinA(updateCoin(e.target.value, true).toFixed(2))}/><Select
                        className="select" options={options} defaultValue={options[2]} onChange={e => props.setCB(e.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator