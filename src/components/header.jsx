import React from 'react';
import logo from "../images/logo.svg";
import {MenuList} from "./menu-list";

const H1_TITLE = 'Облако знаний'

export const Header = (props) => (
    <header className="header">
        <div className="header-wrapper">
            <h1 className="header-hidden-h1">{ H1_TITLE }</h1>
            <a href="/" className="header-logo"><img src={logo} className="header-logo-img" alt={H1_TITLE} /></a>

            <div className="header-dropdown-menu">
                <MenuList stateMenu={ props }/>
            </div>

            <nav className="header-top-menu">
                <a href="//imumk.ru/showcase" className="header-top-menu-btn pure-button pure-button-primary">Каталог</a>
                <a href="https://school.imumk.ru/regpin.html"
                   className="header-top-menu-btn pure-button pure-button-primary">Активация</a>

                <a href="https://school.imumk.ru" className="header-top-menu-btn pure-button pure-button-primary">Вход</a>
            </nav>
        </div>
    </header>
)
