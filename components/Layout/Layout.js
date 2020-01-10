import NavBar from '../NavBar';
import Head from 'next/head';
// import fetch from 'isomorphic-unfetch'



const Layout = (props) => (
    <div>
        <Head>
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
// fetch(`https://api.giphy.com/v1/gifs/search?api_key=6mGQ0OeZECHu2KHo52M4KZ5UnTRDOtaS&q=family guy&limit=12&offset=0&rating=R&lang=en`)
//     .then(res => res.json())
//     .then(giphy => {
//         // console.log(giphy.data)
//         gifs.push(giphy.data)
//     })

//     const gifs = []


// Layout.props =  {
//     testProp: {gifs}
// }
// console.log(Layout.props)

export default Layout