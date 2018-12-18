import React, { Component } from 'react';
import { TaskForm } from './components/task_form';
import { TaskList } from './components/task_list';

const msItems = [
    {
        id: 23,
        title: 'First Item',
        date: '15.12.2018',
    },
    {
        id: 11,
        title: 'Seccond  Item',
        date: '25.12.2018',
    },
    {
        id: 16,
        title: 'One more Item',
        date: '31.12.2018',
        urgent: true,
    },
];

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            list: msItems,
            errState: false,
        }
    }

    handleAddItem = (newItem) => { // обработчик события - нажатие клавиши
        // const list = this.state.list.slice();
        // list.push(newItem);
        // this.setState({ list });
        this.setState(prevState => ({
            list: prevState.list.push(newItem),
        }));
    };

    handleDeleteItem = (id) => {
        console.log('>> handleDeleteItem:', id);
        this.setState(prevState => ({
                list: prevState.list
                    .filter((item) => (item.id !== id)),
            }),
        );
    };

    render() {
        const ms = '';
        console.log('ms=', !!ms);
        return (
            <React.Fragment>
                <div className='container' style={ { marginTop: '40px' } }>
                    <div className='row'>
                        <h1>React TODO LIST</h1>
                    </div>
                    <br />
                    <div className='row'>
                        <TaskForm
                            handleAdd={ this.handleAddItem }
                        />
                        <TaskList
                            dataList={ this.state.list }
                            handleDelete={ this.handleDeleteItem }
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default App;