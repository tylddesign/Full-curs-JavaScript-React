import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css'

const EmployeesList = ({ data }) => {

    const elements = data.map(item => {
        console.log('Item 1')
        console.log(item);
        const { id, ...itemProps } = item
        console.log('itemProps')
        console.log(itemProps);
        const gg = { ...itemProps };
        console.log('gg')
        console.log(gg);
        return (
            // <EmployeesListItem name={item.name} salary={item.salary} />
            <EmployeesListItem key={id} {...item} /> // используем спред оператор
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;