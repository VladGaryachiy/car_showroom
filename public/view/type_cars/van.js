let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

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
        this.UpScroll = this.UpScroll.bind(this);
    }
    UpScroll() {
        window.scrollTo(0, 0);
    }

    render() {

        return React.createElement(
            'div',
            { className: 'cars-container-one-type', id: 'cars-container' },
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    DataVans.vans.map((item, i) => React.createElement(
                        Tween,
                        {
                            key: i,
                            animation: { y: 50, type: 'from', ease: 'easeOutQuart', opacity: 0 },
                            reverseDelay: 200
                        },
                        React.createElement(
                            Link,
                            { to: `/vans/${item.name}`, key: item.key, onClick: this.UpScroll },
                            React.createElement(
                                'div',
                                { className: "col-md-5 col-sm-12   vanBlock" + i, key: item.key, 'data-name': item.name },
                                React.createElement(
                                    'div',
                                    { className: 'block' },
                                    React.createElement(
                                        'h2',
                                        { className: 'carName' },
                                        React.createElement(
                                            'span',
                                            { className: 'GMC' },
                                            'GMC'
                                        ),
                                        ' ',
                                        item.name
                                    ),
                                    React.createElement(
                                        'h3',
                                        { className: 'price' },
                                        '\u0426\u0456\u043D\u0430 \u0432\u0456\u0434 - ',
                                        item.price
                                    )
                                ),
                                React.createElement('div', { className: 'logo', style: {
                                        backgroundImage: 'url(' + item.logo + ')',
                                        height: '500px'

                                    } })
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
            { className: 'aboutCars-container', id: 'aboutCars-container' },
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
