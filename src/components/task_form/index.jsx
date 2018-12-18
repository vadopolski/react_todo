import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TaskNameInput from '../form/task_name_input';
import UrgentInput from '../form/urgent_input';
import Button from '../form/button';

export class TaskForm extends Component {
	static propTypes = {
		handleAdd: PropTypes.func, // метод добавления напоминания  в список
	};

	constructor(props, context) {
		super(props, context);

		this.state = {
			data: {},
			errState: false,
		}
	}

	handleChange = (e) => { // обработчик события - нажатие клавиши
		const { target } = e;
		const { name } = target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			data: { ...this.state.data, [name]: value },
		});
	};
	handleAddLocal = () => {
        const taskName = this.state.data['taskName'];
        if(!taskName) throw new Error('Incorrect task name');
        const taskDate = this.state.data['remindDt'];
        if(!taskDate) throw new Error('Incorrect Remind Date');
        const urgent = this.state.data.urgent;

        const item = {
            id: 18,
            title: taskName,
            date: taskDate,
            urgent: urgent,
        };

        this.props.handleAdd(item);
	};

	calendarClick = (e) => {
		console.log(e);
		return null;
	};

	render() {
		return (
			<div className='col-md-6'>
					<TaskNameInput
						value={ this.state.data['taskName'] || '' }
						name='taskName'
						placeholder='Название задачи'
						onChange={ this.handleChange }
						label='Введите название задачи'
						errHint='Введите название задачи для напоминания'
					/>
					<TaskNameInput
						value={ this.state.data['remindDt'] || '' }
						name='remindDt'
						placeholder='Напомнить'
						onChange={ this.handleChange }
						label='Когда напомнить'
						errHint='Введите дату и время напоминания'
						calendarClick={ this.calendarClick }
					/>
					<UrgentInput
						name='urgent'
						label='Отметить как важная'
						checked={ this.state.data.urgent || false }
						onChange={ this.handleChange }
					/>
					<Button
						label='Add task'
						className='primary'
						onclick={ this.handleAddLocal }
					/>
					<Button
						label='Clear Form'
						onclick={ this.handleClickClear }
					/>
			</div>
		);
	}
}