// import AppInfo from '../app-info/app-info'
// import SearchPanel from '../search-panel/search-panel';
// import AppFilter from '../app-filter/app-filter';
// import EmployeesListItem from '../employees-list/employees-list';
// import EmployeesAddForm from '../emoloyees-add-form/employees-add-form';
import { Component } from 'react';

import './app.css';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++'
        }
    }

    nextYear = () => {
        console.log('+++');
        // this.setState({
        //     years: this.state.years + 1
        // })
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    render() {
        const { name, surname, link } = this.props;
        return (
            <div >
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}

function App() {
    return (
        <div className="App">
            <WhoAmI name='John' surname="Smith" link="vk.com" />
            <WhoAmI name="Alex" surname="Lesli" link="vk.com" />
        </div>
    );
}

export default App;