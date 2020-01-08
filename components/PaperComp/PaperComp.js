import { Paper } from '@material-ui/core';

const PaperComp = (props) => {
    return(
        <Paper>
            {props.children}
        </Paper>
    )
}
export default PaperComp