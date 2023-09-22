import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'allEmployees', label: 'Все сотрудники', colored: false },
        { name: 'onRise', label: 'На повышение', colored: false },
        { name: '1000', label: 'З/П больше 1000$', colored: true }
    ];

    const buttons = buttonsData.map(({ name, label, colored }) => {
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