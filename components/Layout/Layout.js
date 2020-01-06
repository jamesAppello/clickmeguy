import NavBar from '../NavBar';
import Head from 'next/head';


const Layout = (props) => (
    <div>
        <Head>
            <title>ClickMeGuy</title>
            <link 
                rel="stylesheet"
                href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
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