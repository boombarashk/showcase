import React from 'react';
import {Filter} from "./filter";

const filterValues = [{
    name: 'subject',
    values: [
        'Все предметы', 'Алгебра', 'Английский язык', 'Биология', 'География', 'Геометрия', 'Демо-версия', 'Информатика', 'История', 'Литература', 'Математика', 'Обществознание', 'Окружающий мир', 'Робототехника', 'Русский язык', 'Физика', 'Химия'
    ]}, {
    name: 'genre',
    values: [
        'Все жанры','Демо','Задачник','Подготовка к ВПР','Подготовка к ЕГЭ','Рабочая тетрадь'
    ]
}]

export const FilterBlock = () => {

    return (
        <div className="filter">
            { filterValues.map( filter => (
                <Filter values={ filter.values } key={ filter.name }/>
            )) }
        </div>
    )
}
