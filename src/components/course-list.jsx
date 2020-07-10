import React from 'react';
import {Course} from './course'

const fishData = {
    courseHash: "318195250115271701719214121150250168217123912252217",
    courseId: "80",
    description: "280 интерактивных заданий, ↵4 тематические контрольные работы",
    extId: "Physicon_IMUMK_Course_267727",
    genre: "Рабочая тетрадь",
    google_id: "ru.fizikon.physicon_imumk_course_267727",
    grade: "7",
    isNew: false,
    itunes_id: "ru.physicon.imumk.Physicon_IMUMK_Course_267727",
    lang: "ru",
    price: 400,
    priceBonus: 5000,
    progress: 0,
    requireUpdate: false,
    shopUrl: "https://multiring.ru/shop/details/103",
    size: 0,
    status: "free",
    subject: "Алгебра",
    title: "Рабочая тетрадь. Алгебра, 7 класс",
    winstore_id: ""
}

export class CourseList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [fishData, fishData],
            bonusPrice: false
        };
    }

    componentDidMount() {
/*        fetch("http://krapipl.imumk.ru:8082/api/mobilev1/update", {
            method: 'POST',
            body: JSON.stringify({data: ''})
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )*/
    }

    render() {

        if (this.state.data.length === 0) return (
            <p>Загрузка..</p>
        )

        return (
        <div className="courses">
            { this.state.data.map( course => (
                <Course data={ course }
                        key={course.courseHash}
                        bonusPrice = {this.state.bonusPrice}
                />
            )) }
        </div>
    )}
}
