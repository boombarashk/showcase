export const ALL_GRADE_STR = 'Все классы'
export const ALL_GENRE_STR = 'Все жанры'
export const ALL_SUBJECT_STR = 'Все предметы'

export const FILTER_VALUES = [{
    name: 'subject',
    values: [
        ALL_SUBJECT_STR, 'Алгебра', 'Английский язык', 'Биология', 'География', 'Геометрия', 'Демо-версия', 'Информатика', 'История', 'Литература', 'Математика', 'Обществознание', 'Окружающий мир', 'Робототехника', 'Русский язык', 'Физика', 'Химия'
    ]}, {
    name: 'genre',
    values: [
        ALL_GENRE_STR,'Демо','Задачник','Подготовка к ВПР','Подготовка к ЕГЭ','Рабочая тетрадь'
    ]}, {
    name: 'grade',
    values: [ALL_GRADE_STR].concat(Array.from(Array(11), (_, i) => i + 1))
}]

export const  initialFilter = {
    filter: [ALL_SUBJECT_STR, ALL_GENRE_STR, ALL_GRADE_STR],
    search: '',
}

export function filterReducer(state, action) {
    switch (action.type) {
        case 'filter':
            return { ...initialFilter, filter: action.payload }
        case 'search':
            return { ...initialFilter, search: action.payload.trim() }
        default:
            throw new Error('Error update filters')
    }
}
