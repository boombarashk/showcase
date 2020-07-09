import React from 'react';
import {Filter} from "./filter";
import {Search} from "./search-block";

const filterValues = [{
    name: 'subject',
    values: [
        'Все предметы', 'Алгебра', 'Английский язык', 'Биология', 'География', 'Геометрия', 'Демо-версия', 'Информатика', 'История', 'Литература', 'Математика', 'Обществознание', 'Окружающий мир', 'Робототехника', 'Русский язык', 'Физика', 'Химия'
    ]}, {
    name: 'genre',
    values: [
        'Все жанры','Демо','Задачник','Подготовка к ВПР','Подготовка к ЕГЭ','Рабочая тетрадь'
    ]}, {
    name: 'grade',
    values: Array.from(Array(11), (_, i) => i + 1)
}]
const countFilters = filterValues.length

export class FilterBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ filter: {
            names: Array.from(Array(countFilters), (_, index) => filterValues[index].name),
            positions: Array.from(Array(countFilters), () => 0)
        }}
        this.onChangeSeleted = this.onChangeSeleted.bind(this)
    }

    render() {
    return (
        <div className="filter">
            { filterValues.map( (filter, index) => (
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
    }
}
