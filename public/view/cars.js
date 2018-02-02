let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('./aboutcar').AboutCar;

let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

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
        /*        this.ThisCar = this.ThisCar.bind(this);*/
    }

    /*
        ThisCar(e){
            let data = this.props.info;
            let car = data.filter(item=>{
                return item.name === e.currentTarget.attributes[1].nodeValue
            });
            ReactDOM.render(
                <AboutCar infoCar={car}/>,
                document.getElementById('cars-container')
            )
        }
    */

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
                        { to: `/cars/${item.name}`, key: item.key },
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
class SUV extends React.Component {
    constructor(props) {
        super(props);
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
                        { to: `/cars/${item.name}`, key: item.key },
                        React.createElement(
                            'div',
                            { className: "col-md-5 car  suv" + i, key: item.key, 'data-name': item.name },
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
                        { to: `/cars/${item.name}`, key: item.key },
                        React.createElement(
                            'div',
                            { className: "col-md-5 car  van" + i, key: item.key, 'data-name': item.name },
                            React.createElement(
                                'div',
                                { className: 'banner' },
                                React.createElement(
                                    'h1',
                                    { className: 'carName' },
                                    item.name
                                )
                            )
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
            { className: 'cars-container', id: 'cars-container' },
            React.createElement(
                React.Fragment,
                null,
                React.createElement(AboutCar, { infoCar: Car }),
                React.createElement(
                    Link,
                    { to: '/cars' },
                    'Back'
                )
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
            { className: 'cars-container', id: 'cars-container' },
            React.createElement(
                'h1',
                null,
                '\u041F\u0456\u043A\u0430\u043F\u0438'
            ),
            React.createElement(Pickup, { info: pickups }),
            React.createElement('hr', null),
            React.createElement(
                'h1',
                null,
                '\u041F\u043E\u0437\u0430\u0448\u043B\u044F\u0445\u043E\u0432\u0438\u043A\u0438'
            ),
            React.createElement(SUV, { info: SUVs }),
            React.createElement(
                'h1',
                null,
                '\u0424\u0443\u0440\u0433\u043E\u043D\u0438'
            ),
            React.createElement(Van, { info: vans })
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

/*
{pickups.map(item=>
    <div className="col-md-3 car">
        <h1>{item.name}</h1>
        <h3>{item.type_car}</h3>
    </div>
)}*/
