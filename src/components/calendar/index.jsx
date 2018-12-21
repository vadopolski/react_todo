import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './calendar.css';
import {CalendarBody} from "./body";
import CalendarHeader from "./calendarHeader";

export class Calendar extends Component {
    static propTypes = {
        handleAdd: PropTypes.func, // метод добавления напоминания  в список
    };

    constructor(props, context) {
        super(props, context);

        const today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();

        this.state = {
            monthToOperate: month,
            yearToOperate: year
        };
    }

    render() {
        return (
            <div id='calendar' className='micalendar' style={{display: 'block'}}>
                <div className='header_wrap'>
                    <CalendarHeader
                        month={this.state.monthToOperate}
                        year={this.state.yearToOperate}
                    />
                    <div className='arrows'>
                        <div id='prevButton' className='arrows_left'>
                            <i className='fa fa-angle-left'/>
                        </div>
                        <div id='nextButton' className='arrows_right'>
                            <i className='fa fa-angle-right'/>
                        </div>
                    </div>
                </div>
                <table id='calendar_table'>
                    <thead>
                    <tr>
                        <th>Пн</th>
                        <th>Вт</th>
                        <th>Ср</th>
                        <th>Чт</th>
                        <th>Пт</th>
                        <th>Сб</th>
                        <th>Вс</th>
                    </tr>
                    </thead>
                    <tbody>
                    <CalendarBody
                        monthToOperate={this.state.monthToOperate}
                        yearToOperate={this.state.yearToOperate}
                    />
                    </tbody>
                </table>
                <hr/>
                <div className='btn-group'>
                    <input
                        type='button'
                        onClick={null  /*'hideCalendar(event)'*/}
                        value='Отмена'
                        className='btn btn-sm btn-outline-secondary'
                    />
                </div>
            </div>);
    }
}