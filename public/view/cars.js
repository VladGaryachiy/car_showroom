let React = require('react');

let cars = [];

(function () {
    $.ajax({
        url: '/cars',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        success: function (result) {

            for (let i = 0; i < result.result.length; i++) {
                cars.push(result.result[i]);
            }
        },
        error: function (error) {
            return error;
        }
    });
})();

class Cars extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            React.Fragment,
            null,
            cars.map(item => React.createElement(
                'div',
                { className: 'car' },
                React.createElement(
                    'h3',
                    null,
                    '\u041D\u0430\u0437\u0432\u0430 : ',
                    item.name,
                    ' id: ',
                    item.id
                ),
                React.createElement('hr', null),
                React.createElement(
                    'h1',
                    null,
                    '\u0414\u0432\u0438\u0433\u0443\u043D'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u0422\u0438\u043F : ',
                    item.type_car
                ),
                React.createElement(
                    'p',
                    null,
                    '\u0422\u0438\u043F \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E : ',
                    item.fuel_type
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041E\u0431\'\u0454\u043C \u0434\u0432\u0438\u0433\u0443\u043D\u0430 : ',
                    item.engine_capecity
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0446\u0438\u043B\u0456\u043D\u0434\u0440\u0456\u0432 : ',
                    item.numb_cylinder
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043A\u043B\u0430\u043F\u0430\u043D\u0456\u0432 : ',
                    item.numb_valves
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C : ',
                    item.power,
                    ' \u043B.\u0441'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041E\u0431\u043E\u0440\u043E\u0442\u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0457 \u0448\u0432\u0438\u0434\u043A\u043Ec\u0442\u0456 : ',
                    item.turnovers_max_power
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041A\u0440\u0443\u0442\u044F\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 : ',
                    item.targue
                ),
                React.createElement('hr', null),
                React.createElement(
                    'h1',
                    null,
                    '\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u0438'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043C\u0456\u0441\u0446\u044C: ',
                    item.places
                ),
                React.createElement(
                    'p',
                    null,
                    '\u0414\u043E\u0432\u0436\u0438\u043D\u0430: ',
                    item.length
                ),
                React.createElement(
                    'p',
                    null,
                    '\u0428\u0438\u0440\u0438\u043D\u0430: ',
                    item.width
                ),
                React.createElement(
                    'p',
                    null,
                    '\u0412\u0438\u0441\u043E\u0442\u0430: ',
                    item.height
                ),
                React.createElement(
                    'p',
                    null,
                    '\u0412\u0430\u043D\u0442\u0430\u0436\u043D\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F : ',
                    item.amount_cargo_cell
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041E\u0431\'\u0454\u043C \u0431\u0430\u043A\u0443 : ',
                    item.amount_fuel_tank
                ),
                React.createElement('hr', null),
                React.createElement(
                    'h1',
                    null,
                    '\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447 \u0456 \u043F\u0440\u0438\u0432\u0456\u0434'
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447 : ',
                    item.transmission
                ),
                React.createElement(
                    'p',
                    null,
                    '\u0422\u0438\u043F \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447: ',
                    item.type_trans
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447: ',
                    item.amount_gears
                ),
                React.createElement(
                    'p',
                    null,
                    '\u041F\u0440\u0438\u0432\u0456\u0434: ',
                    item.drive
                )
            ))
        );
    }
}

module.exports.Cars = Cars;
