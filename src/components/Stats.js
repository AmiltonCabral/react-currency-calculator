import './Stats.css';

function Stats(props) {
    // <button className="updateStats">Update Stats</button>
    return (
        <div className="Stats">
            <div>
                <p>1 {props.data.code} = {props.ask} {props.data.codein}</p>
            </div>
            <div>
                <p>Currency quote day: {props.create_date}</p>
            </div>
        </div>
        
    )
}

export default Stats