import { Paper } from '@material-ui/core';

const PaperComp = (props) => {
    return(
        <Paper style={{display:'block', textAlign:'center'}}>
            {props.children}
        </Paper>
    )
}
export default PaperComp