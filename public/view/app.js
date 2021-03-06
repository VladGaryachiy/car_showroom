let React = require('react');
let ReactDOM = require('react-dom');
let BrowserRouter = require('react-router-dom').BrowserRouter;
let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

/*Pages*/

let Cars = require('./cars').Cars;
let Home = require('./home').Home;
let Finance = require('./finance').Finance;
let Services = require('./services').Services;
let Contacts = require('./contact').Contacts;

/*Type cars*/

let Pickups = require('./type_cars/pickup').Pickups;
let SUVS = require('./type_cars/suv').SUVS;
let VANS = require('./type_cars/van').VANS;

/*Components*/

let Navbar = require('./component/navbar').Navbar;
let Footer = require('./component/footer').Footer;

/*Services*/
let TestDrive = require('./services/test-drive').TestDrive;
let TradeIn = require('./services/trade-in').TradeIn;

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                BrowserRouter,
                null,
                React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(Navbar, null),
                    React.createElement(
                        React.Fragment,
                        null,
                        React.createElement(Route, { exact: true, path: '/', component: Home }),
                        React.createElement(Route, { path: '/cars', component: Cars }),
                        React.createElement(Route, { exact: true, path: '/services', component: Services }),
                        React.createElement(Route, { exact: true, path: '/finance', component: Finance }),
                        React.createElement(Route, { exact: true, path: '/contacts', component: Contacts }),
                        React.createElement(Route, { path: '/pickups', component: Pickups }),
                        React.createElement(Route, { path: '/suvs', component: SUVS }),
                        React.createElement(Route, { path: '/vans', component: VANS }),
                        React.createElement(Route, { path: '/test-drive', component: TestDrive }),
                        React.createElement(Route, { path: '/trade-in', component: TradeIn })
                    )
                )
            ),
            React.createElement(Footer, null)
        );
    }
}

module.exports.MainComponent = MainComponent;
