import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesListItem from '../employees-list/employees-list';
import EmployeesAddForm from '../emoloyees-add-form/employees-add-form';
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
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, surname, link } = this.props;
        const { position, years } = this.state;
        return (
            <>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={this.commitInputChanges} />
                </form>
            </>
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