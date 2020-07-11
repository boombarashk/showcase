import React from "react";

const baseUrl = 'https://www.imumk.ru'

export function MenuList(props) {
    return (
        <nav className="main-wrapper">
            <div className="menu-burger" onClick={ props.stateMenu.toggleMenuBurger }>Меню<span></span></div>
            { props.stateMenu.stateMenuBurger && (
            <ul className="menu-list menu-list__show">
                <li><a href={`${baseUrl}/showcase`}>Витрина</a></li>
                <li><a href={`${baseUrl}/pages/about`}>О проекте</a></li>
                <li><a href={`${baseUrl}/news`}>Новости</a></li>
                <li><a href={`${baseUrl}/feedback`}>Помощь</a></li>
                <li><a href={`${baseUrl}/pages/apps`}>Скачать</a></li>
            </ul>
            )}
        </nav>
    )

}
