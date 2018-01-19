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

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            BrowserRouter,
            null,
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'container-fluid' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'navbar navbar-inverse' },
                            React.createElement(
                                'div',
                                { className: 'container' },
                                React.createElement('div', { className: 'navbar-header' }),
                                React.createElement(
                                    'div',
                                    { className: 'collapse navbar-collapse' },
                                    React.createElement(
                                        'ul',
                                        { className: 'nav navbar-nav' },
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                Link,
                                                { to: '/', className: 'MainPage' },
                                                '\u0413\u043E\u043B\u043E\u0432\u043D\u0430'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            { className: 'dropdown' },
                                            React.createElement(
                                                'a',
                                                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                                '\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456',
                                                React.createElement('b', { className: 'caret' })
                                            ),
                                            React.createElement(
                                                'ul',
                                                { className: 'dropdown-menu' },
                                                React.createElement(
                                                    'li',
                                                    null,
                                                    React.createElement(
                                                        Link,
                                                        { to: '/cars' },
                                                        '\u0412\u0441\u0456 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456'
                                                    )
                                                ),
                                                React.createElement('hr', null),
                                                React.createElement(
                                                    'li',
                                                    null,
                                                    React.createElement(
                                                        Link,
                                                        { to: '/' },
                                                        'Nissan'
                                                    )
                                                ),
                                                React.createElement(
                                                    'li',
                                                    null,
                                                    React.createElement(
                                                        Link,
                                                        { to: '/' },
                                                        'Kia'
                                                    )
                                                ),
                                                React.createElement(
                                                    'li',
                                                    null,
                                                    React.createElement(
                                                        Link,
                                                        { to: '/' },
                                                        'Lada'
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            { className: 'dropdown' },
                                            React.createElement(
                                                'a',
                                                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                                '\u0421\u0435\u0440\u0432\u0456\u0441\u0438',
                                                React.createElement('b', { className: 'caret' })
                                            ),
                                            React.createElement(
                                                'ul',
                                                { className: 'dropdown-menu' },
                                                React.createElement(
                                                    'li',
                                                    null,
                                                    React.createElement(
                                                        Link,
                                                        { to: '/services' },
                                                        '\u0421\u0435\u0440\u0432\u0456\u0441\u0438'
                                                    )
                                                ),
                                                React.createElement('hr', null),
                                                React.createElement(
                                                    'li',
                                                    null,
                                                    React.createElement(
                                                        Link,
                                                        { to: '/' },
                                                        '\u0406\u043D\u0448\u0435'
                                                    )
                                                ),
                                                React.createElement(
                                                    'li',
                                                    null,
                                                    React.createElement(
                                                        Link,
                                                        { to: '/' },
                                                        '\u0406\u043D\u0448\u0435'
                                                    )
                                                ),
                                                React.createElement(
                                                    'li',
                                                    null,
                                                    React.createElement(
                                                        Link,
                                                        { to: '/' },
                                                        '\u0406\u043D\u0448\u0435'
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                Link,
                                                { to: '/finance' },
                                                '\u0424\u0456\u043D\u0430\u043D\u0441\u043E\u0432\u0456 \u043F\u043E\u0441\u043B\u0443\u0433\u0438'
                                            )
                                        ),
                                        React.createElement(
                                            'li',
                                            null,
                                            React.createElement(
                                                Link,
                                                { to: '/contacts' },
                                                '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'container-fluid', id: 'content' },
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
        );
    }
}

ReactDOM.render(React.createElement(MainComponent, null), document.getElementById('app'));
