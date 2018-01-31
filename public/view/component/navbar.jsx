
let React = require('react');
let ReactDOM = require('react-dom');
let Link = require('react-router-dom').Link;
let AllCars = require('../cars').AllCars;
let PickupsVol2 = require('../type_cars/pickup').PickupsVol2;
let SUVVol2 = require('../type_cars/suv').SUVVol2;
let VansVol2 = require('../type_cars/van').VansVol2;

class Navbar extends React.Component{

    constructor(props){
       super(props);
       this.ShowAllCars = this.ShowAllCars.bind(this);
       this.ShowPickups = this.ShowPickups.bind(this);
       this.ShowSUV = this.ShowSUV.bind(this);
       this.ShowVans = this.ShowVans.bind(this);
    }

    ShowAllCars(){
        ReactDOM.render(
            <AllCars/>,
            document.getElementById('cars-container')
        )
    }

    ShowPickups(){
        ReactDOM.render(
            <PickupsVol2/>,
            document.getElementById('cars-container')
        )
    }
    ShowSUV(){
        ReactDOM.render(
            <SUVVol2/>,
            document.getElementById('cars-container')
        )
    }
    ShowVans(){
        ReactDOM.render(
            <VansVol2/>,
            document.getElementById('cars-container')
        )
    }



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
                                            <li  onClick={this.ShowAllCars}><Link to="/cars">Всі автомобілі</Link></li>
                                            <hr/>
                                            <li onClick={this.ShowPickups}><Link to="/pickups">Пікапи</Link></li>
                                            <li onClick={this.ShowSUV}><Link to="/suvs">Позашляховики</Link></li>
                                            <li onClick={this.ShowVans}><Link to="/vans">Фургони</Link></li>
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








