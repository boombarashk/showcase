import React from 'react';
import logo from "../images/logo.svg";

export const Header = () => (
    <header className="header">
        <div className="header-wrapper">
            <img src={logo} className="App-logo" alt="logo" />

            <nav className="header-dropdown-menu">
                *icon*
            </nav>

            <nav className="header-top-menu">
                <a href="//imumk.ru/showcase" className="header-top-menu-btn pure-button pure-button-primary">Каталог</a>
                <a href="https://school.imumk.ru/regpin.html"
                   className="header-top-menu-btn pure-button pure-button-primary">Активация</a>

                <a href="https://school.imumk.ru" className="header-top-menu-btn pure-button pure-button-primary">Вход</a>
            </nav>
        </div>
    </header>
)
