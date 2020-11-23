// import Link from 'next/link';
import { 
    AppBar, 
    Toolbar, 
    Typography } from '@material-ui/core'
    

const NavBar = (props) => {
    return(
        <>
            <AppBar position='static' {...props}>
                <Toolbar>
                    <Typography 
                        variant='h2' 
                        color='inherit' 
                        align='center' 
                        style={{color:'yellow', fontWeight:'bolder', padding: "0.2em"}}>
                       Welcome to ClickMe'Guy!
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
} 
export default NavBar
