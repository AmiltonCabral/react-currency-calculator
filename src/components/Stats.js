function Stats(props) {
    return (
        <div className="Stats">
            <div>
                <p>1 Dólar vale: {props.ask}</p>
            </div>
            <div>
                <p>Cotação do dia: {props.create_date}</p>
            </div>
        </div>
        
    )
}

export default Stats