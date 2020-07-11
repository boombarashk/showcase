import React from "react";
import PropTypes from 'prop-types';

const baseUrl = 'https://www.imumk.ru'

export class Course extends React.PureComponent {
    render() {
        const {subject, grade, genre, courseId, shopUrl, bonusPrice, price, priceBonus} = this.props.data
        const label = bonusPrice ? priceBonus : price

        return (
          <div className="courses-item">
            <div className="courses-item-promo">
                <img src={`${baseUrl}/svc/coursecover/${courseId}`} alt="Демо-версия"/>
            </div>

            <div className="courses-item-info">
                <p className="courses-item-info-title">{ subject }</p>
                <p className="courses-item-info-grade">{ this.formatGradeString(grade) }</p>
                <p className="courses-item-info-genre">{ genre }</p>

                <p className="courses-item-info-link"><a href={ shopUrl }>Подробнее</a></p>

                {label && (<div className="courses-item-info-label pure-button pure-button-secondary">
                    {label}
                </div>)}
            </div>
          </div>
        )
    }

    formatGradeString(grade) {
        if (grade.indexOf(';') < 0) {
            return `${grade} класс`
        }
        return `${grade.replace(/;/g, '-')} классы`
    }
}

Course.propTypes = {
    data: PropTypes.object,
    bonusPrice: PropTypes.bool
}
