let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

const DataPickups = {
    pickups: [],

    get: function (name) {
        return this.pickups.filter(function (item) {
            return item.name === name;
        });
    }

};

(function () {
    $.ajax({
        url: '/pickups',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (result) {

            for (let i = 0; i < result.result.length; i++) {
                DataPickups.pickups.push(result.result[i]);
            }
        },
        error: function (error) {
            return error;
        }
    });
})();

class AllPickups extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let drive = DataPickups.pickups.filter(item => {
            return item.drive === 'Повний';
        });
        return React.createElement(
            'div',
            { className: 'cars-container', id: 'cars-container' },
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    drive.map((item, i) => React.createElement(
                        Link,
                        { to: `/pickups/${item.name}`, key: item.key },
                        React.createElement(
                            'div',
                            { className: "col-md-5 car  pickup" + i, key: item.key, 'data-name': item.name },
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

class Pickup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Pickup = DataPickups.get(this.props.match.params.pickup);
        return React.createElement(
            'div',
            { className: 'cars-container', id: 'cars-container' },
            React.createElement(
                React.Fragment,
                null,
                React.createElement(AboutCar, { infoCar: Pickup }),
                React.createElement(
                    Link,
                    { to: '/pickups' },
                    'Back'
                )
            )
        );
    }

}

class Pickups extends React.Component {
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
                React.createElement(Route, { exact: true, path: '/pickups', component: AllPickups }),
                React.createElement(Route, { path: '/pickups/:pickup', component: Pickup })
            )
        );
    }

}

module.exports.Pickups = Pickups;
