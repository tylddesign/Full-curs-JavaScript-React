import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'allEmployees', label: 'Все сотрудники' },
        { name: 'onRise', label: 'На повышение' },
        { name: '1000', label: 'З/П больше 1000$' }
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                // onClick={this.filterEmp}
                key={name}
                onClick={() => props.onFilterSelect(name)}
            >
                {label}
            </button>
        )

    });




    return (
        <div className="btn-group" >
            {buttons}
        </div>
    )


}

export default AppFilter;