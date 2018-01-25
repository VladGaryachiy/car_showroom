
let React = require('react');
let Link = require('react-router-dom').Link;


class Navbar extends React.Component{

    render(){
        return(
            <div className="container-fluid NavbarContainer" id="navbar" >
                <div className="row">
                    <div className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header">
                               <img alt="" src="../../img/logo1.png" width="80px" height="30px" className="brandStyle"/>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li ><Link to="/"  className ="MainPage">Головна</Link></li>
                                    <li className="dropdown">
                                        <a href="#"  className="dropdown-toggle" data-toggle="dropdown">Автомобілі
                                            <b className="caret"/>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/cars">Всі автомобілі</Link></li>
                                            <hr/>
                                            <li><Link to="/finance">Пікапи</Link></li>
                                            <li><Link to="/finance">Позашляховики</Link></li>
                                            <li><Link to="/">Фургони</Link></li>
                                            <li><Link to="/">Мінівени</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#"  className="dropdown-toggle" data-toggle="dropdown">Сервіси
                                            <b className="caret"/>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/services">Сервіси</Link></li>
                                            <hr/>
                                            <li><Link to="/">Інше</Link></li>
                                            <li><Link to="/">Інше</Link></li>
                                            <li><Link to="/">Інше</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/finance">Фінансові послуги</Link></li>
                                    <li><Link to="/contacts">Контакти</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

module.exports.Navbar = Navbar;








