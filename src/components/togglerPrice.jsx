import React from 'react';

export function TogglerPrice(props) {
    return (
        <div className="toggler-price">
            <button className="pure-button pure-button-secondary toggler-price-button"
                 onClick={ props.onToggleView }
            >Отобразить цену в { props.stateViewPriceBonus ? 'рублях' : 'бонусах' }</button>
        </div>
    )
}
