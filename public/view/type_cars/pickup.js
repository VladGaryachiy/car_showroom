let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

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
        url: '/pickupsData',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            dataParser(result);
        },
        error: function (error) {
            return error;
        }
    });
})();

function dataParser(result) {
    for (let i = 0; i < result.result.length; i++) {
        DataPickups.pickups.push(result.result[i]);
    }
}

class AllPickups extends React.Component {

    constructor(props) {
        super(props);
        this.UpScroll = this.UpScroll.bind(this);
    }
    UpScroll() {
        window.scrollTo(0, 0);

        let oneScript = $('#1').detach();
        let twoScript = $('#2').detach();
        let threeScript = $('#3').detach();

        $("body").append('<script src="/js/moment-with-locales.min.js" id="1"></script>' + '<script src="/js/bootstrap-datetimepicker.min.js" id="2"></script>' + '<script src="/js/datePicker.js"  id="3"></script>');
    }
    render() {
        let drive = DataPickups.pickups.filter(item => {
            return item.drive === 'Повний';
        });
        return React.createElement(
            'div',
            { className: 'cars-container-one-type', id: 'cars-container' },
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    drive.map((item, i) => React.createElement(
                        Tween,
                        {
                            key: i,
                            animation: { y: 50, type: 'from', ease: 'easeOutQuart', opacity: 0 },
                            reverseDelay: 200
                        },
                        React.createElement(
                            Link,
                            { to: `/pickups/${item.name}`, key: item.key, onClick: this.UpScroll },
                            React.createElement(
                                'div',
                                { className: "col-md-5 col-sm-12   pickupBlock" + i, key: item.key, 'data-name': item.name },
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
                                        item.price,
                                        ' \u0433\u0440\u043D'
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

class Pickup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Pickup = DataPickups.get(this.props.match.params.pickup);
        return React.createElement(
            'div',
            { className: 'aboutCars-container', id: 'aboutCars-container' },
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
