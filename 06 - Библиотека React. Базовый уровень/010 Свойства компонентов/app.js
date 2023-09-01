import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesListItem from '../employees-list/employees-list';
import EmployeesAddForm from '../emoloyees-add-form/employees-add-form';

import './app.css';

function App() {
    return (
        // <div className="app">
        //     <AppInfo />

        //     <div className="search-panel">
        //         <SearchPanel />
        //         <AppFilter />
        //     </div>

        //     <EmployeesListItem />
        //     <EmployeesAddForm />
        // </div>

        <div>
            <WhoAmI name={() => { return 'John' }} surname="Smith" link="vk.com" />
            <WhoAmI name={() => { return 'Alex' }} surname="Lesli" link="vk.com" />
        </div>
    );
}

function WhoAmI({ name, surname, link }) {
    return (
        <div>
            <h1>My name is {name()}, surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

export default App;