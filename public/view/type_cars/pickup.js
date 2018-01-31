let React = require('react');
let ReactDOM = require('react-dom');
let AboutCar = require('../aboutcar').AboutCar;

let pickups = [];

(function () {
    $.ajax({
        url: '/pickups',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (result) {

            for (let i = 0; i < result.result.length; i++) {
                pickups.push(result.result[i]);
            }
        },
        error: function (error) {
            return error;
        }
    });
})();

class Pickups extends React.Component {

    constructor(props) {
        super(props);
        this.ThisCar = this.ThisCar.bind(this);
    }
    ThisCar(e) {

        let car = pickups.filter(item => {
            return item.name === e.currentTarget.attributes[1].nodeValue;
        });
        ReactDOM.render(React.createElement(AboutCar, { infoCar: car }), document.getElementById('cars-container'));
    }

    render() {
        let drive = pickups.filter(item => {
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
                        'div',
                        { className: "col-md-5 car  pickup" + i, key: item.key, onClick: this.ThisCar, 'data-name': item.name },
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
                    ))
                )
            )
        );
    }

}

module.exports.Pickups = Pickups;

class PickupsVol2 extends React.Component {

    constructor(props) {
        super(props);
        this.ThisCar = this.ThisCar.bind(this);
    }
    ThisCar(e) {

        let car = pickups.filter(item => {
            return item.name === e.currentTarget.attributes[1].nodeValue;
        });
        ReactDOM.render(React.createElement(AboutCar, { infoCar: car }), document.getElementById('cars-container'));
    }

    render() {
        let drive = pickups.filter(item => {
            return item.drive === 'Повний';
        });
        return React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'row' },
                drive.map((item, i) => React.createElement(
                    'div',
                    { className: "col-md-5 car  pickup" + i, key: item.key, onClick: this.ThisCar, 'data-name': item.name },
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
                ))
            )
        );
    }

}

module.exports.PickupsVol2 = PickupsVol2;
