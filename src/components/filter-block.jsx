import React from 'react';
import {Filter} from "./filter";
import {Search} from "./search-block";
import { FILTER_VALUES } from "./filter-constants";

const countFilters = FILTER_VALUES.length

export class FilterBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ filter: {
            names: Array.from(Array(countFilters), (_, index) => FILTER_VALUES[index].name),
            positions: Array.from(Array(countFilters), () => 0)
        }}
        this.onChangeSeleted = this.onChangeSeleted.bind(this)
        this.collectFilterArray = this.collectFilterArray.bind(this)
    }

    render() {
    return (
        <div className="filter">
            { FILTER_VALUES.map( (filter, index) => (
                <Filter name={ filter.name }
                        values={ filter.values }
                        value={ this.state.filter.positions[index] }
                        key={ filter.name }
                        onChangeSelected = { this.onChangeSeleted }/>
            )) }

            <Search />
        </div>
    )}



    onChangeSeleted(event, name){
        let {filter} = this.state
        filter.positions[filter.names.indexOf(name)] = event.target.value
        this.setState({filter})

        const filterArray = this.collectFilterArray()
        this.props.onChangeFilter(filterArray)
    }

    collectFilterArray(){
        const {filter} = this.state
        return filter.positions.map( (position, index) => FILTER_VALUES[index].values[+position])
    }
}
