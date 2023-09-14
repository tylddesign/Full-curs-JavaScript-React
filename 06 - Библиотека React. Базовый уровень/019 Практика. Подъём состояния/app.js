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
                { name: 'John C', salary: 800, increase: true, rise: true, id: 1 },
                { name: 'Alex M', salary: 3000, increase: false, rise: false, id: 2 },
                { name: 'Carl W', salary: 5000, increase: false, rise: false, id: 3 },
            ]
        }
    }

    addEmployee = (employee) => {
        console.log('Добавление сотрудника');
        this.setState(({ data }) => {
            const after = [...data];
            after.push({
                name: employee.name,
                salary: +employee.salary,
                increase: false,
                rise: false,
                id: Math.floor(Math.random() * 1000)
            });
            return { data: after };
        });
    }

    deleteItem = (id) => {
        console.log('Удалить сотрудника');
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

    // onToggleIncrease = (id) => {
    //     this.setState(({ data }) => {
    //         const index = data.findIndex(elem => elem.id === id);

    //         const old = data[index];
    //         const newItem = { ...old, increase: !old.increase };
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

    //         return {
    //             data: newArr
    //         }
    //     })
    // }

    // Вариант с map
    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }


    toRecieveBonus = () => {
        console.log('Получить бонус');
        let employeeNames = [];
        this.state.data.forEach(obj => {
            for (const [key, value] of Object.entries(obj)) {
                if (key === 'increase' && value === true) {
                    employeeNames.push(obj.name);
                }
            }
        })
        return employeeNames.join(", ");

    }

    render() {
        const { data } = this.state;
        return (
            <div className="app">
                <AppInfo numberOfEmployees={this.state.data.length} recieveBonus={this.toRecieveBonus()} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm addEmployee={this.addEmployee} />
            </div>
        )
    }
}


export default App;