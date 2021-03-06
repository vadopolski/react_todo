import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CalendarCell  from './one_cell';
import { getFirstDayOfMonth, getLastDay } from './fn';
import './calendar.css';

export class CalendarBody extends Component {
	static propTypes = {
		handleAdd: PropTypes.func, // метод добавления напоминания  в список
        yearToOperate : PropTypes.number,
		monthToOperate: PropTypes.number
	};

	constructor(props, context) {
		super(props, context);
	}

	buildCalendar(yearToOperate, monthToOperate) { //
		console.log('yearToOperate' + yearToOperate);
		const dateToOperate = new Date(yearToOperate, monthToOperate);
		const year = dateToOperate.getFullYear();
		const month = dateToOperate.getMonth(); // месяц от 0 до 11, нужно прибавлять 1
		const dayMonth = new Date().getDate(); // какое число месяца
		let dayWeek = dateToOperate.getDay(); // от 0 до 6, причем 0 - это воскресение
		const maximumDaysInPrevMonth = getLastDay(year, month - 1);
		dayWeek = dayWeek === 0 ? 7 : dayWeek;
		const firstDay = getFirstDayOfMonth(year, month);
		let j = 1; // это счетчик недель, которые выводятся в календарь
		let dayCounter = 1;
		let dayCounterAfter = 1;
		let str_out_week = [];

		while (j < 7) {
			let str_out = [];
			for (let i = 1; i < 8; i++) {
				let tmpCellObject = {};
				if ((firstDay.dayWeek > i && j == 1)) { // если меньше чем 1е число текущего месяца - ячейки для предыдущего месяца
					const tmpDayMonth = (maximumDaysInPrevMonth + i + 1 - firstDay.dayWeek);
					tmpCellObject = {
						className: 'not_current',
						dataFullDate: (tmpDayMonth + '.' + (month === 0 ? 12 : month) + '.' + (month === 0 ? yearToOperate - 1 : yearToOperate)),
						dataDayMonth: tmpDayMonth,
					};
				} else if (dayCounter > firstDay.maxDays) { // ячейки для следующего месяца
					tmpCellObject = {
						className: 'not_current',
						dataFullDate: (dayCounterAfter + '.' + (month === 11 ? 1 : month + 2) + '.' + (month == 11 ? yearToOperate + 1 : yearToOperate)),
						dataDayMonth: dayCounterAfter++,
					};

				} else { // ЯЧЕЙКИ для ТЕКУЩЕГО МЕСЯЦА
					let todayClass = '';
					const currrentDt = new Date();

					if (yearToOperate === currrentDt.getFullYear() && monthToOperate === currrentDt.getMonth()) {
						todayClass = dayCounter === dayMonth ? 'today' : '';
					}

					tmpCellObject = {
						className: todayClass,
						dataFullDate: (dayCounter + '.' + (month + 1) + '.' + yearToOperate),
						dataDayMonth: dayCounter++,
					};
				}
				str_out.push(<CalendarCell
					{ ...tmpCellObject }
				/>);
			}
			str_out_week.push(<tr key={ j }> { str_out }</tr>);
			j++;
		}

		return str_out_week;
	}

	render() {
		return (this.buildCalendar(this.props.yearToOperate,
									this.props.monthToOperate));
	}
}