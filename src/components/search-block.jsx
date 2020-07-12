import React, { useRef } from 'react';

export default function SearchBlock(props) {
    const inputSearch = useRef(null);

    return (
        <div className="filter-search">
            <input className="filter-search-input" type="text" placeholder="Поиск" ref={inputSearch}/>
            <button className="filter-search-button"
                    onClick={() => props.onChangeSearch(inputSearch.current.value)}
            >Найти</button>
        </div>
    )
}
