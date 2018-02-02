let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

const DataVans = {
    vans: [],

    get: function (name) {
        return this.vans.filter(function (item) {
            return item.name === name;
        });
    }

};

(function () {
    $.ajax({
        url: '/vans',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (result) {

            for (let i = 0; i < result.result.length; i++) {
                DataVans.vans.push(result.result[i]);
            }
        },
        error: function (error) {
            return error;
        }
    });
})();

class AllVans extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return React.createElement(
            'div',
            { className: 'cars-container', id: 'cars-container' },
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    DataVans.vans.map((item, i) => React.createElement(
                        Link,
                        { to: `/vans/${item.name}`, key: item.key },
                        React.createElement(
                            'div',
                            { className: "col-md-5 car  van" + i, key: item.key, 'data-name': item.name },
                            React.createElement(
                                'div',
                                { className: 'banner' },
                                React.createElement(
                                    'div',
                                    null,
                                    React.createElement(
                                        'p',
                                        { className: 'carName' },
                                        item.name
                                    )
                                )
                            )
                        )
                    ))
                )
            )
        );
    }

}

class Van extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Van = DataVans.get(this.props.match.params.van);
        return React.createElement(
            'div',
            { className: 'cars-container', id: 'cars-container' },
            React.createElement(
                React.Fragment,
                null,
                React.createElement(AboutCar, { infoCar: Van }),
                React.createElement(
                    Link,
                    { to: '/vans' },
                    'Back'
                )
            )
        );
    }

}

class VANS extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                Switch,
                null,
                React.createElement(Route, { exact: true, path: '/vans', component: AllVans }),
                React.createElement(Route, { path: '/vans/:van', component: Van })
            )
        );
    }

}

module.exports.VANS = VANS;
