let React = require('react');
let ReactDOM = require('react-dom');
let BrowserRouter = require('react-router-dom').BrowserRouter;
let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;

/*Pages*/

let Cars = require('./cars').Cars;
let Home = require('./home').Home;
let Finance = require('./finance').Finance;
let Services = require('./services').Services;
let Contacts = require('./contact').Contacts;

/*Components*/

let Navbar = require('./component/navbar').Navbar;
let Footer = require('./component/footer').Footer;

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
                        'div',
                        { className: 'container-fluid contentContainer', id: 'content' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(Route, { exact: true, path: '/', component: Home }),
                            React.createElement(Route, { exact: true, path: '/cars', component: Cars }),
                            React.createElement(Route, { exact: true, path: '/services', component: Services }),
                            React.createElement(Route, { exact: true, path: '/finance', component: Finance }),
                            React.createElement(Route, { exact: true, path: '/contacts', component: Contacts })
                        )
                    )
                )
            )
        );
    }
}

module.exports.MainComponent = MainComponent;
