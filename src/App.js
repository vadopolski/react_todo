import React, {Component} from 'react';
import TextInput from './components/form/input'

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: {},
        }
    }

    handleChange = (e) => {
        const {target = 'default value'} = e;
        const {name} = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        console.log('>>>>>handleField', name, value);
        this.setState({
            data: {...this.state.data, [name]: value}
        });

        // const stateCopy = Object.assign({}, this.state);
        // stateCopy.data[name] = value;
        // this.setState(stateCopy);

    };

    render() {
        const classForApp = 'ddd';
        const inputName = 'taskName';

        return (
            <React.Fragment>
                <div className='container' style={{marginTop: '40px'}}>
                    <div className='row'>
                        <h1>React TODO LIST</h1>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-md-6'>
                            <form id='form1' action=''>

                                <div className='form-group'>
                                    <label htmlFor='taskData'>Название напоминания</label>
                                    <TextInput
                                        name='taskName'
                                        ariaDescribedby='taskDataHelp'
                                        placeholder='Enter the name'
                                        value={this.state.data[inputName] || ''}
                                        onChange={this.handleChange}
                                    />
                                    <small id='taskDataHelp' className='form-text text-muted'>Введите название занятия
                                        на завтра.
                                    </small>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='reminderData'>Когда напомнить</label>
                                    <div className='input-group'>
                                        <div onClick={null} className='input-group-prepend'>
								      <span
                                          style={{cursor: 'pointer !important'}}
                                          className='input-group-text'
                                          id='calendarOpener'
                                      >
									      <i className='fa fa-calendar'></i>
								      </span>
                                        </div>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='reminderData'
                                            aria-describedby='reminderDataHelp'
                                            placeholder='Напомнить'
                                        />
                                    </div>
                                    <small id='reminderDataHelp' className='form-text text-muted'>Введите дату и время
                                        напоминания.
                                    </small>
                                </div>

                                <div className='form-group form-check'>
                                    <input
                                        type='checkbox'
                                        className='form-check-input'
                                        id='Check1'
                                        value='some data'/>
                                    <label className='form-check-label' htmlFor='exampleCheck1'>Важно</label>
                                </div>

                                <button type='button' className='btn btn-primary' onClick={null}>Add task</button>
                                <button type='button' className='btn btn-light' onClick={null}>Clear Form</button>

                            </form>
                        </div>
                        <div className='col-md-6'>
                            <div className='card' style={{width: '100%'}}>
                                some data
                            </div>

                        </div>
                        {/* <TasksList listHeader='Список дел на завтра:' /> */}
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

// sdfsdf
export default App;
