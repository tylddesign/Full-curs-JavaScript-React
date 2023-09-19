import { Component } from 'react';

import './app-filter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    filterEmp = (e) => {
        document.querySelectorAll('.btn-group .btn').forEach(item => {
            item.classList.remove('active');
        });
        e.target.classList.add('active');
        const filter = e.target.getAttribute('data-filter');
        const dataFiltred = this.props.filterEmp(filter);
        return dataFiltred;
    }

    render() {
        return (
            <div className="btn-group" >
                <button
                    className="btn btn-outline-light active"
                    type="button"
                    onClick={this.filterEmp}
                    data-filter='allEmployees'>
                    Все сотрудники
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    onClick={this.filterEmp}
                    data-filter='onRise'>
                    На повышение
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    onClick={this.filterEmp}
                    data-filter='1000'>
                    З/П больше 1000$
                </button>
            </div>
        )
    }

}

export default AppFilter;