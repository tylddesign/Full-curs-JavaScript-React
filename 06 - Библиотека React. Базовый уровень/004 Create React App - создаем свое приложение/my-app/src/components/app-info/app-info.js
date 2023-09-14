import './app-info.css'

const AppInfo = (props) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Vkontakte</h1>
            <h2>Общее число сотрудников: {props.numberOfEmployees}</h2>
            <h2>Премию получат: {props.recieveBonus}</h2>
        </div>
    )
}

export default AppInfo;