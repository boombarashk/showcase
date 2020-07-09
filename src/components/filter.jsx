import React from 'react';

export class Filter extends React.PureComponent {
    render() {
        const {name, values} = this.props

        return (
            <div className="filter-item">
               <select className="select"
                       value={this.props.value}
                       onChange={(event) => this.props.onChangeSelected(event, name)}
               >
                   { values.map( (value, index) => <option
                           value={`${index}`}
                           key={`option-${name}${index}`}> {value} </option>
                   ) }
               </select>
            </div>
        )
    }
}
