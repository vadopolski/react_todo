import React, {Component} from 'react';
import {TaskForm} from './components/task_form';
import {TaskList} from './components/task_list';
import {Greeting} from "./components/greeting";
import {Clients} from "./components/clients/clents";

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <React.Fragment>
                <div className='container' style={{marginTop: '40px'}}>
                    <div className='row'>
                        <Greeting/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;