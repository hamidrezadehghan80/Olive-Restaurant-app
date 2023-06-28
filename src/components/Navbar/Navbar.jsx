import React, {useState} from 'react';
import images from "../../constants/images"
import './Navbar.css';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";


const Navbar = () => {

    const [Toggle_menu, setToggle_menu] = useState(false);

    return(
        <nav className={"app__navbar"}>
            <div className={"app__navbar-logo"}>
                <img src={images.olive} alt={"navbar logo"}/>
            </div>
            <ul className={"app__navbar-links"}>
                <li className={"p__opensans"}><a href={"#home"}>Home</a></li>
                <li className={"p__opensans"}><a href={"#about"}>About</a></li>
                <li className={"p__opensans"}><a href={"#menu"}>Menu</a></li>
                <li className={"p__opensans"}><a href={"#awards"}>Awards</a></li>
                <li className={"p__opensans"}><a href={"#contact"}>Contact</a></li>
            </ul>
            <div className={"app__navbar-login"}>
                <a className={"p__opensans"} href={"#login"}>Register / Login</a>
                <div></div>
                <a className={"p__opensans"} href={"/"}>Book table</a>
            </div>
            <div className={"app__navbar-smallscreen"}>
                <GiHamburgerMenu color={"#ffffff"} fontSize={26} onClick={() => setToggle_menu(true)} style={{
                    cursor : "pointer"
                }}/>
                {
                    Toggle_menu &&
                    (<div className={"app__navbar-smallscreen-overlay flex__center slide-bottom"}>
                    <MdOutlineRestaurantMenu className={"overlay-close"} fontSize={26}
                                             onClick={() => setToggle_menu(false)}/>
                    <ul className={"app__navbar-smallscreen-links"}>
                        <li className={"p__opensans"}><a href={"#home"}>Home</a></li>
                        <li className={"p__opensans"}><a href={"#about"}>About</a></li>
                        <li className={"p__opensans"}><a href={"#menu"}>Menu</a></li>
                        <li className={"p__opensans"}><a href={"#awards"}>Awards</a></li>
                        <li className={"p__opensans"}><a href={"#contact"}>Contact</a></li>
                    </ul>
                    <div className={"app__navbar-smallscreen-login"}>
                        <a className={"p__opensans"} href={"#login"}>Register / Login</a>
                        <a className={"p__opensans"} href={"/"}>Book table</a>
                    </div>
                </div>)
                }
            </div>
        </nav>
    );
};

export default Navbar;
