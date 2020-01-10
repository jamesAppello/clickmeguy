import './Score.css'
import { Card, Badge } from '@material-ui/core'


const Score = (props) => {

    return (
        <Card className="score" style={{ padding: '6.18%', backgroundColor: '#37AEF5', borderRadius: 20 }}>
            {/* <Badge badgeContent={props.score} color='primary'>
                <Card style={{ borderRadius: 12, padding: 10 }}>
                    <h4>CurrentScore</h4>
                </Card>

            </Badge> */}
            <h2 style={{color:'yellow'}}>Current Score: {props.score}</h2>
            {/* <br /> */}
            {/* <br /> */}
            <h2 style={{color:'white'}}>Score to WIN: 12</h2>
            {/* <Badge badgeContent={12} color='secondary'>
                <Card style={{ borderRadius: 12, padding: 10 }}>
                    <h4>POINTS TO WIN</h4>
                </Card>
            </Badge> */}
        </Card>
    )
}
export default Score