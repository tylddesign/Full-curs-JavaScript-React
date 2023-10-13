import Menu from '../../components/menu/menu'


import './header.scss';

const Header = ({ title, srcBgImg }) => {

    return (
        <section className="header" id="head" style={{
            backgroundImage: `url(${srcBgImg})`
        }}>
            <div className="container">
                <Menu />
                <h1>{title}</h1>
            </div>
        </section >
    )
}

export default Header;