import './Score.css'
import { Card } from '@material-ui/core'

const Score = (props) => {
    return(
        <Card className="score">

            <Card>
                {props.type}: {props.score}
                
                </Card>
            <br/>
            <Card>
            ToWin : 12
            </Card>

        </Card>
    )
} 
export default Score