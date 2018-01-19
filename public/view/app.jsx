let React = require('react');
let ReactDOM = require('react-dom');
let BrowserRouter = require('react-router-dom').BrowserRouter;
let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;

/*Components*/

let Cars = require('./cars').Cars;
let Home = require('./home').Home;
let Finance = require('./finance').Finance;
let Services = require('./services').Services;
let Contacts = require('./contact').Contacts;



class MainComponent extends React.Component{
    constructor(props){
        super(props);
    }

render(){
    return(
        <BrowserRouter>
          <div>
            <div className="container-fluid">
              <div className="row">
                  <div className="navbar navbar-inverse">
                    <div className="container">
                        <div className="navbar-header">

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
                                        <li><Link to="/">Nissan</Link></li>
                                        <li><Link to="/">Kia</Link></li>
                                        <li><Link to="/">Lada</Link></li>
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

            <div className="container-fluid" id="content">
                <div className="row">
                    <Route exact path = "/" component={Home}/>
                    <Route exact path = "/cars" component={Cars}/>
                    <Route exact path = "/services" component={Services}/>
                    <Route exact path = "/finance" component={Finance}/>
                    <Route exact path = "/contacts" component={Contacts}/>
                </div>
            </div>
          </div>
        </BrowserRouter>
        )
    }
}


ReactDOM.render(
    <MainComponent/>,
    document.getElementById('app')
);
