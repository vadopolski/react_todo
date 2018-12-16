import React, { Component } from 'react';
import {TaskNameInput} from "../form/task_name_jsx/task_name_input";
import {UrgentInput} from "../form/urgent_input";
import GroupFormCheck from "../form/group_form_check";
import {Button} from "../form/button";
import NewButton from "../form/new_button";
import PropTypes from 'prop-types';



export class TaskForm  extends Component {
    static propTypes = {
        dataList: PropTypes.array,
        handleAdd: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: {},
            errState: false
        }
    }

    calendarClick = (e) => {
        console.log(e);
        return null;
    };

    handleChange = (e) => { // обработчик события - нажатие клавиши
        const {target} = e;
        const {name} = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            data: {...this.state.data, [name]: value},
        });
    };

    render(){
        const classForApp = 'ddd';
        const inputName = 'taskName';
        const inputDate = 'taskDate';
        const inputCheckBox = 'some data';
        const urgent = 'imporatnt';

        return (
            <div className='col-md-6'>
                <form id='form1' action=''>
                    <TaskNameInput
                        value={ this.state.data[inputName]}
                        name='taskName'
                        placeholder='Task Name'
                        onChange={ this.handleChange }
                        label='Enter task Name'
                        errHint='Enter task name for remember.'
                    />
                    <TaskNameInput
                        value={ this.state.data[inputDate]}
                        name='remindDate'
                        placeholder='Remind'
                        onChange={ this.handleChange }
                        label='When remind'
                        errHint='Enter the date task and reminder.'
                        calendarClick={ this.calendarClick }
                        readOnly
                    />
                    {/*<InputFormGroup*/}
                    {/*inputName={inputName}*/}
                    {/*className='form-group'*/}
                    {/*value={this.state.data[inputName] || ''}*/}
                    {/*labelName='Название напоминания'*/}
                    {/*placeholder='Введите название'*/}
                    {/*smallValue='Введите название занятия на завтра.'*/}
                    {/*isCalendarPicture={false}*/}
                    {/*/>*/}

                    {/*<InputFormGroup*/}
                    {/*inputName={inputName}*/}
                    {/*className='form-group'*/}
                    {/*value={this.state.data[inputDate] || ''}*/}
                    {/*labelName='Когда напомнить'*/}
                    {/*placeholder='Напомнить'*/}
                    {/*smallValue='Введите дату и время напоминания.'*/}
                    {/*isCalendarPicture={true}*/}
                    {/*/>*/}

                    <UrgentInput
                        name='urgent'
                        label='Check as important'
                        checked={ this.state.data[urgent] || false}
                        onChange={ this.handleChange }
                    />
                    <GroupFormCheck
                        value={this.state.data[inputCheckBox]}
                        labelValue='Важно'
                    />

                    <Button
                        label='Add task'
                        className='primary'
                        onclick={ this.handleClickAdd }
                    />
                    <Button
                        label='Clear Form'
                        onclick={ this.handleClickClear }
                    />                </form>
            </div>
        );
    }


}