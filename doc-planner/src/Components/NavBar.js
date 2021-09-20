 import  './NavBar.css';
import { NavLink } from 'react-router-dom'
import react from 'react';
import logo from '../imgs/logo-default.svg';


const NavBar = (props) => {
    const AboutUs = () => {
       // window.location.href = "landing.html";
        close_menu ();
    }
    const Career = () => {
       // window.location.href = "html/Career.html";
        close_menu ();
    }
    const close_menu = () => {
        document.getElementById("Mobile_area").style.display="none";
        document.body.classList.remove("ddd");
    }
    const open_menu = () => {
        document.getElementById("Mobile_area").style.display="block";
        document.body.classList.add("ddd");
    }
    const ChangeColor2 = () => {
        document.getElementById("a2").style.color="#00b39b";
        document.getElementById("a1").style.color="#ababab";
    }
    const ChangeColor1 = () => {
        document.getElementById("a1").style.color="#00b39b";
        document.getElementById("a2").style.color="#ababab";
    }
    return (
        <div>
            <header>
                <div class="header_margin">
                    <div>
                        <img src={logo} alt="doc planner logo" />
                    </div>
                    <div className="header_a">
                        <NavLink to='/aboutus' id="a1" onClick={ChangeColor1}>About us</NavLink>
                        <NavLink to='/career' id="a2" onClick={ChangeColor2}>Carrer</NavLink>
                        {/* <NavLink href="#">Departements</NavLink> */}
                    </div>
                {/* <!-- This button below will be visible only on mobile--> */}
                <span className="mobile_button" onClick={open_menu}><i class="fas fa-bars fa-2x"></i></span>
                </div>
            </header>
            {/* <!-- This div below will be visible only on mobile by clicking on the menu button in the right of the screen. --> */}
            {/* <!-- To make mobile_area appears open_menu function will be called --> */}
            {/* <!-- To make mobile_area disappears close_menu function will be called --> */}
            <div className="mobile_area" id="Mobile_area">
                <div>
                    <img src={logo} alt="doc planner logo" />
                    <span className="mobile_button2" onClick={close_menu}><i className="fas fa-times fa-2x"></i></span>
                    <div className="mobile_links">
                        <NavLink to='/aboutus'  onClick={close_menu} className="line_height aaa">About us</NavLink>
                        <hr />
                        <NavLink to='/career'  onClick={close_menu} className="line_height aaa">Career</NavLink><hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;