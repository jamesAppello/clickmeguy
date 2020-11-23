import NavBar from '../NavBar';
import Head from 'next/head';


const Layout = (props) => (
    <div>
        <Head>
            <meta charSet='UTF-8'/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>ClickMeGuy</title>
            <link 
                rel="stylesheet" 
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

            <link 
                rel="stylesheet" 
                href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            
        </Head>
        {/* <BODY> */}
        <NavBar />
        <div className="container">
            {props.children}
        </div>
        {/* </BODY> */}

    </div>
);

export default Layout