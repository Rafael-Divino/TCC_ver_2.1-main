import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "../MenuItems";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => { this.setState({ clicked: !this.state.clicked }) }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="Navbar-logo">Pet Feliz</h1>

                <div className="menu_icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ?
                    "Nav-menu active" : "Nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} to={item.url}><i></i>{item.title}
                                </a>
                            </li>

                        );
                    })}
                    <button className="button-navbar">Cadastre-se</button>
                </ul>

            </nav>
        )
    }
}
export default Navbar;