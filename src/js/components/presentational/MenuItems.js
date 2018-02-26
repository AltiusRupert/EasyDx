import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuItems extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container ">
                    <a className="navbar-brand" href="#"><img src="img/easydxlogo.png" height="30" width="41"/></a>
                    <div className="navbar-collapse collapse" id="conFunMenu">
                        <ul className="navbar-nav mr-auto" >
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="active" className="nav-link">
                                    <span className="fa fa-home fa-lg"></span> Org
                                </NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Project" activeClassName="active" className="nav-link">
                                    <span className="fa fa-home fa-lg"></span> Project
                                </NavLink> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MenuItems;