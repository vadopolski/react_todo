import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './calendar.css';
import {CalendarBody} from "./body";
import CalendarHeader from "./calendarHeader";
import {ArrowsButton} from "../form/arrows_button";

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

    reduceMonth = () => {
        this.setState(prevState => {
            return ({
                monthToOperate: prevState.monthToOperate - 1,
            });
        });
    };

    increaseMonth(){
        this.setState(prevState => {
            return ({
                monthToOperate: prevState.monthToOperate + 1,
            });
        });
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
                        <ArrowsButton
                            arrows={'left'}
                            onclick={this.reduceMonth}

                        />
                        <ArrowsButton
                            arrows={'right'}
                            onclick={this.increaseMonth}
                        />
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