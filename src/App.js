import React, {Component} from 'react';
import {TaskForm} from "./components/task_form";
import {TaskList} from "./components/task_list";
import {Greeting} from "./components/greeting";

class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            list: [{
                id:4,
                title: 'First Task',
                date:'18.18.2018',
            }],
            data: {},
            errState: false,
        }
    }

    handleAddItem = (newItem) => {
        // const list = this.state.list.slice();
        // list.push(newItem);
        // this.setState({list});
        this.setState(prevState => ({
            list: prevState.list.push(newItem),
        }))

    };

    handleDeleteItem = (id) => {
        this.setState(prevState => ({
                list: prevState.list
                    .filter((item) => (item.id !== id)),
            }),
        );
    };

    render() {

        return (
            <React.Fragment>
                <div className='container' style={{marginTop: '40px'}}>
                    <div className='row'>
                        <h1>React TODO LIST</h1>
                    </div>
                    <br/>
                    <div className='row'>
                        <TaskForm
                            handleAdd = {this.handleAddItem}
                        />
                        <TaskList
                            dataList={this.state.list}
                            handleDelete = {this.handleDeleteItem}
                        />
                        <Greeting/>
                        {/* <TasksList listHeader='Список дел на завтра:' /> */}
                    </div>
                </div>

            </React.Fragment>
        );
    }
}


export default App;
