import React from 'react';

export class Filter extends React.Component {

    render() {
        const values = this.props.values

        return (
            <div className="filter-item">
               <select className="select">
                   { values.map( value => <option> {value} </option> ) }
               </select>
            </div>
        )
    }
}
