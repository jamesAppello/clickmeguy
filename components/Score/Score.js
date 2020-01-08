// import './Score.css'

const Score = (props) => {
    return(
        <div className="score">
            {props.type}: {props.Score}
            <br/>
            Current score : {props.currentScore}

        </div>
    )
} 
export default Score