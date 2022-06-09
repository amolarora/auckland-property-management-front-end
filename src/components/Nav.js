import logoImg from '../images/logo.png';
//import { Link } from 'react-router-dom';
//import MobileNav from './MobileNav.js';

function Nav() {
    return (
        <header>
            <div className="wrapper">
                <div className="logo">
                    <a href="/">
                        <img src={logoImg} href="/" width="100" height="109.42" alt=""></img>
                    </a>
                </div>

                <nav className="leftNav">
                    <a href="/">Property Management</a>
                    <a href="/search-results">Property Search</a>
                    <a href="/">Body Corporate</a>
                    <a href="/">FAQ</a>
                    <a href="/">Contact Us</a>
                </nav>

                <div className="rightNav">
                    <button type="button" className="signIn"><p>Sign In</p></button>
                </div>

            </div>
        </header>
    );
}

export default Nav;