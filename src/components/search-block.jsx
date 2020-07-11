import React from 'react';

export class Search extends React.Component {
    render() {
        return (
            <div className="filter-search">
                <input className="filter-search-input" type="text" placeholder="Поиск"/>
                <button className="filter-search-button">Найти</button>
            </div>
        )
    }
}
