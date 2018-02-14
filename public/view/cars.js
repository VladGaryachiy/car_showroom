let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('./aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

const DataCars = {
    cars: [],

    get: function (name) {
        return this.cars.filter(function (item) {
            return item.name === name;
        });
    }

};
let pickups = [];
let SUVs = [];
let vans = [];

(function () {
    $.ajax({
        url: '/cars',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (result) {

            for (let i = 0; i < result.result.length; i++) {
                DataCars.cars.push(result.result[i]);
            }
            pickups = result.result.filter(function (item) {
                return item.type_car === 'Пікап';
            });
            SUVs = result.result.filter(function (item) {
                return item.type_car === 'Позашляховик';
            });
            vans = result.result.filter(function (item) {
                return item.type_car === 'Фургон';
            });
        },
        error: function (error) {
            return error;
        }
    });
})();

class Pickup extends React.Component {
    constructor(props) {
        super(props);
        this.UpScroll = this.UpScroll.bind(this);
    }

    UpScroll() {
        window.scrollTo(0, 0);
    }

    render() {
        let data = this.props.info;
        let drive = data.filter(item => {
            return item.drive === 'Повний';
        });

        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    drive.map((item, i) => React.createElement(
                        Link,
                        { to: `/cars/${item.name}`, key: item.key, onClick: this.UpScroll },
                        React.createElement(
                            'div',
                            { className: "col-md-5 col-sm-12  t pickupBlock" + i, key: item.key, 'data-name': item.name },
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
                    ))
                )
            )
        );
    }

}
class SUV extends React.Component {
    constructor(props) {
        super(props);
        this.UpScroll = this.UpScroll.bind(this);
    }
    UpScroll() {
        window.scrollTo(0, 0);
    }

    render() {
        let data = this.props.info;
        let drive = data.filter(item => {
            return item.drive === 'Передній';
        });
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    drive.map((item, i) => React.createElement(
                        Link,
                        { to: `/cars/${item.name}`, key: item.key, onClick: this.UpScroll },
                        React.createElement(
                            'div',
                            { className: "col-md-5 col-sm-12   suvBlock" + i, key: item.key, 'data-name': item.name },
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
                    ))
                )
            )
        );
    }
}
class Van extends React.Component {
    constructor(props) {
        super(props);
        this.UpScroll = this.UpScroll.bind(this);
    }
    UpScroll() {
        window.scrollTo(0, 0);
    }
    render() {
        let data = this.props.info;

        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                'div',
                { className: 'container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    data.map((item, i) => React.createElement(
                        Link,
                        { to: `/cars/${item.name}`, key: item.key, onClick: this.UpScroll },
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
                    ))
                )
            )
        );
    }
}

class Car extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Car = DataCars.get(this.props.match.params.car);
        return React.createElement(
            'div',
            { className: 'aboutCars-container', id: 'aboutCars-container' },
            React.createElement(
                React.Fragment,
                null,
                React.createElement(AboutCar, { infoCar: Car })
            )
        );
    }

}

class AllCars extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'cars-container col-sm-12 col-xs-12 col-md-12', id: 'cars-container' },
            React.createElement(
                ScrollOverPack,
                null,
                React.createElement(
                    Tween,
                    {
                        key: '1',
                        animation: { type: 'from', ease: 'easeOutQuart', opacity: 0, translateX: '300px' },
                        reverseDelay: 200
                    },
                    React.createElement(
                        'h1',
                        { className: 'type_cars' },
                        '\u041F\u0456\u043A\u0430\u043F\u0438'
                    )
                )
            ),
            React.createElement(
                ScrollOverPack,
                null,
                React.createElement(
                    Tween,
                    {
                        key: '1',
                        animation: { y: 50, type: 'from', ease: 'easeOutQuart', opacity: 0 },
                        reverseDelay: 200
                    },
                    React.createElement(Pickup, { info: pickups })
                )
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
                ScrollOverPack,
                null,
                React.createElement(
                    Tween,
                    {
                        key: '1',
                        animation: { type: 'from', ease: 'easeOutQuart', opacity: 0, translateX: '300px' },
                        reverseDelay: 200
                    },
                    React.createElement(
                        'h1',
                        { className: 'type_cars' },
                        '\u041F\u043E\u0437\u0430\u0448\u043B\u044F\u0445\u043E\u0432\u0438\u043A\u0438'
                    )
                )
            ),
            React.createElement(
                ScrollOverPack,
                null,
                React.createElement(
                    Tween,
                    {
                        key: '1',
                        animation: { y: 50, type: 'from', ease: 'easeOutQuart', opacity: 0 },
                        reverseDelay: 200
                    },
                    React.createElement(SUV, { info: SUVs })
                )
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
                ScrollOverPack,
                null,
                React.createElement(
                    Tween,
                    {
                        key: '1',
                        animation: { type: 'from', ease: 'easeOutQuart', opacity: 0, translateX: '300px' },
                        reverseDelay: 200
                    },
                    React.createElement(
                        'h1',
                        { className: 'type_cars', id: 'type_cars' },
                        '\u0424\u0443\u0440\u0433\u043E\u043D\u0438'
                    )
                )
            ),
            React.createElement(
                ScrollOverPack,
                null,
                React.createElement(
                    Tween,
                    {
                        key: '1',
                        animation: { y: 50, type: 'from', ease: 'easeOutQuart', opacity: 0 },
                        reverseDelay: 200
                    },
                    React.createElement(Van, { info: vans })
                )
            )
        );
    }
}

class Cars extends React.Component {
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
                React.createElement(Route, { exact: true, path: '/cars', component: AllCars }),
                React.createElement(Route, { path: '/cars/:car', component: Car })
            )
        );
    }
}

module.exports.Cars = Cars;
