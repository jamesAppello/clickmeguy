import './Score.css'
import { Card, Badge } from '@material-ui/core'


const Score = (props) => {

    return (
        <Card className="score" style={{ padding: '6.18%', backgroundColor: '#37AEF5', borderRadius: 20 }}>
            <h2 style={{color:'yellow'}}>Current Score: {props.score}</h2>
            <h2 style={{color:'white'}}>Score to WIN: 12</h2>
        </Card>
    )
}
export default Score