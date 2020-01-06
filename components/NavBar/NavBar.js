import Link from 'next/link';

const NavBar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="#">Click-Me-Guy</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav m1-auto">
                    <li className="nav-item">
                        <Link href='/'>
                            <a className="nav-link">HOME</a>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link href='/data'>
                            <a className="nav-link">DATA</a>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    </nav>
)
export default NavBar;

    // <ul>
    //     <li>
    //         <Link href='/'><a>HOME</a></Link>
    //     </li>
    //     <li>
    //         <Link href='/about'><a>ABOUT</a></Link>
    //     </li>
    // </ul>
    // <style jsx>{`
    //     ul {
    //         background: #333;
    //         color: #fff;
    //         list-style: none;
    //         display: flex;
    //     }
    //     ul li {
    //         font-size: 18px;
    //         margin-right: 20px;
    //     }
    //     ul li a {
    //         color: #fff;
    //         text-decoration: none;
    //     }
    // `}</style>