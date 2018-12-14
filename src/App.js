import React, {Component} from 'react';
import NewButton from "./components/form/new_button";
import InputFormGroup from "./components/form/input_form_group";
import GroupFormCheck from "./components/form/group_form_check";

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: {},
            errState: false,
        }
    }

    handleChange = (e) => { // обработчик события - нажатие клавиши
        const {target} = e;
        const {name} = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            data: {...this.state.data, [name]: value},
        });
    };

    render() {
        const classForApp = 'ddd';
        const inputName = 'taskName';
        const inputDate = 'taskDate';
        const inputCheckBox = 'some data';

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
                                <InputFormGroup
                                    inputName={inputName}
                                    className='form-group'
                                    value={this.state.data[inputName] || ''}
                                    labelName='Название напоминания'
                                    placeholder='Введите название'
                                    smallValue='Введите название занятия на завтра.'
                                    isCalendarPicture={false}
                                />

                                <InputFormGroup
                                    inputName={inputName}
                                    className='form-group'
                                    value={this.state.data[inputDate] || ''}
                                    labelName='Когда напомнить'
                                    placeholder='Напомнить'
                                    smallValue='Введите дату и время напоминания.'
                                    isCalendarPicture={true}
                                />

                                <GroupFormCheck
                                    value={this.state.data[inputCheckBox]}
                                    labelValue='Важно'
                                />

                                <NewButton
                                    type='button'
                                    className='btn btn-primary'
                                    onclick={null}
                                    value='Add task'
                                />
                                <NewButton
                                    type='button'
                                    className='btn btn-light'
                                    onclick={null}
                                    value='Clear Form'
                                />
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


export default App;
