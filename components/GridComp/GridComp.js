import { Grid } from '@material-ui/core'

const GridComp =(props) => {
    return(
        <Grid {...props}>
            {props.children}
        </Grid>
    )
}
export default GridComp