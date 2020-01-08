// import Link from 'next/link';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const NavBar = (props) => {
    return(
        <>
            <AppBar position='static' {...props}>
                <Toolbar style={{backgroundColor:'blue'}}>
                    <Typography variant='h1' color='inherit' align='center' style={{color:'yellow', fontWeight:'bolder'}}>
                       Welcome to ClickMe'Guy!
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
} 
export default NavBar

// const NavBar = () => (
//     <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
//         <div className="container">
//             <a className="navbar-brand" href="#">Click-Me-Guy</a>
//             <div className="collapse navbar-collapse">
//                 <ul className="navbar-nav m1-auto">
//                     <li className="nav-item">
//                         <Link href='/'>
//                             <a className="nav-link">HOME</a>
//                         </Link>
//                     </li>
                    
//                 </ul>
//             </div>
//         </div>
//     </nav>
// )
// export default NavBar;
