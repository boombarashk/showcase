import React from 'react';
import {Course} from './course'
import {ALL_GRADE_STR, ALL_GENRE_STR, ALL_SUBJECT_STR} from "./filter-constants";

export class CourseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            countCourses: 0
        };
        this.filterData = this.filterData.bind(this)
    }

    componentDidMount() {
        fetch("http://krapipl.imumk.ru:8082/api/mobilev1/update", {
            method: 'POST',
            body: JSON.stringify({data: ''})
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.items,
                        countCourses: result.items.length
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        if (!this.state.isLoaded) return (
            <p>Загрузка..</p>
        )

        const nodataMsg = <div className="courses-nodata">Курсы не найдены</div>
        if (this.state.countCourses === 0) return (
            nodataMsg
        )

        const filteredData = this.filterData(this.props.stateFilter)
        const countFilteredCourses = filteredData.length

        const subtitle = (<h2 className="content-subheader">&nbsp;
                {(this.state.countCourses > countFilteredCourses) && 'Результаты поиска:'}
            </h2>)

        return (
            <>
                {subtitle}
                <div className="courses">
                    { filteredData.length === 0
                        ? nodataMsg
                        : filteredData.map( course => (
                            <Course data={ course }
                                    key={course.courseHash}
                                    viewPriceBonus = {this.props.stateViewPriceBonus}
                            />
                        )) }
                </div>
                </>
    )}

    /*
     * структура фильтров src/components/filter-constants.js:19
     * */
    filterData(filter){
        const {data} = this.state
        const searchString = filter.search.trim()

        if (searchString.length === 0
            && filter.filter.join('') === [ALL_SUBJECT_STR,ALL_GENRE_STR, ALL_GRADE_STR].join('')) return data;

        return data.filter( course => {
            if (searchString.length > 0 && course.title.indexOf(searchString) === -1) return false

            if (filter.filter[0] !== ALL_SUBJECT_STR && filter.filter[0] !== course.subject) return false

            if (filter.filter[1] !== ALL_GENRE_STR && filter.filter[1] !== course.genre) return false

            if (filter.filter[2] !== ALL_GRADE_STR && course.grade.indexOf(filter.filter[2]) === -1) return false
            return true
        } )
    }

    checkDefaultFilter(filtr){
    }
}
