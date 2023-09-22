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
            ],
            term: '',
            filter: 'allEmployees'
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
            return {
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

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

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term //сокращённая запись объектов term: term
        })
    }

    filterEmp = (filter) => {
        let searchItems = this.searchEmp(this.state.data, this.state.term);

        switch (filter) {
            case 'allEmployees':
                console.log('Все сотрудники');
                return searchItems;
            case 'onRise':
                console.log('На повышение');
                return searchItems.filter(item => item.rise); // item.rise === true тож самое
            case '1000':
                console.log('З/П больше 1000$');
                return searchItems.filter(item => item.salary > 1000);
            default:
                console.log('Нет такого фильтра');
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter })
    }

    render() {
        const { data, filter } = this.state;
        const recieveBonus = this.toRecieveBonus();
        const visibleData = this.filterEmp(filter);

        return (
            <div className="app">
                <AppInfo numberOfEmployees={data.length} recieveBonus={recieveBonus} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter onFilterSelect={this.onFilterSelect} filter={filter} />
                </div>

                <EmployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm addEmployee={this.addEmployee} />
            </div>
        )
    }
}


export default App;