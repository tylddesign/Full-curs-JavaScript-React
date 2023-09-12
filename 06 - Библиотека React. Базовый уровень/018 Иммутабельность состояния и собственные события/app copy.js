import { Component } from 'react';

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../emoloyees-add-form/employees-add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John C', salary: 800, increase: true, id: 1 },
                { name: 'Alex M', salary: 3000, increase: false, id: 2 },
                { name: 'Carl W', salary: 5000, increase: false, id: 3 },
            ]
        }
    }

    addEmployee = (employee) => {
        this.setState(({ data }) => {
            const after = [...data];
            after.push({
                name: employee.name,
                salary: +employee.salary,
                increase: false,
                id: Math.floor(Math.random() * 1000)
            });
            return { data: after };
        });
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm addEmployee={this.addEmployee} />
            </div>
        )
    }
}


export default App;