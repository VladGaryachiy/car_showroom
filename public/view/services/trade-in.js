let React = require('react');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

let driveArr = ['Бензин', 'Бензин компресор', 'Бензин турбіна', 'Дизель', 'Дизель турбіна'];
let stateCar = ['Чудовий', 'Хороший', 'Потребує невеликого ремонту'];

let typeBodyCar = ['Седан', 'Універсал', 'Мінівен', 'Позашляховик', 'Купе'];

let typeTransmission = ['Механіка', 'Автомат', 'Варіатор'];

let drive = ['Передній', 'Задній', 'Повний'];
let yourNewCar = ['Sierra Regular Cab', 'Sierra Extended Cab', 'Acadia', 'Terrain', 'Yukon'];

class TradeIn extends React.Component {

    constructor(props) {
        super(props);
        this.TradeInForm = this.TradeInForm.bind(this);
    }

    TradeInForm(e) {
        e.preventDefault();

        /*------Info your car------*/
        let car_mark_model = e.currentTarget[0].value;
        let car_complectation = e.currentTarget[1].value;
        let car_year_releaze = e.currentTarget[2].value;
        let car_mileage = e.currentTarget[3].value;
        let car_type_drive_fuel = e.currentTarget[4].value;
        let car_engine_capacity = e.currentTarget[5].value;
        let car_type_body = e.currentTarget[6].value;
        let car_transmission = e.currentTarget[7].value;
        let car_drive = e.currentTarget[8].value;
        let car_state = e.currentTarget[9].value;

        /*------ your new car------*/
        let your_new_car = e.currentTarget[10].value;

        /*------ your contacts------*/

        let name = e.currentTarget[11].value;
        let email = e.currentTarget[12].value;
        let phone = e.currentTarget[13].value;

        /*------ your commentation ----*/

        let commentation = e.currentTarget[14].value;

        let trade_in_export_data = {
            'yourCarInfo': {
                'carMark_Model': car_mark_model,
                'carComplectation': car_complectation,
                'carYearReleaze': car_year_releaze,
                'carMileage': car_mileage,
                'carDriveTypeFuel': car_type_drive_fuel,
                'carEngineCapacity': car_engine_capacity,
                'carTypeBody': car_type_body,
                'carTransmission': car_transmission,
                'carDrive': car_drive,
                'carState': car_state
            },
            'yourNewCar': your_new_car,
            'yourContacts': {
                'name': name,
                'email': email,
                'phone': phone
            },
            'yourCommentation': commentation
        };
        $.ajax({
            method: 'POST',
            url: '/trade-in-form',
            data: JSON.stringify(trade_in_export_data),
            contentType: "application/json; charset=utf-8",
            cache: false,
            success: function (result) {
                $('#result-message').text('Дані успішно відправлені, всі подальші інструкції відправлені вам на пошту');
                $('#result-message').toggleClass('success');

                setTimeout(function () {

                    $('#result-message').removeClass('success');
                    $('#result-message').text('');
                }, 10000);
            },
            error: function (error) {
                $('#result-message').text('Помилка відправки даних, провірте правильність оформлення заявки');
                $('#result-message').toggleClass('error');

                setTimeout(function () {

                    $('#result-message').removeClass('error');
                    $('#result-message').text('');
                }, 10000);
            }

        });
    }

    render() {
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                Tween,
                null,
                React.createElement(
                    'h1',
                    { className: 'tin-name-main' },
                    'Trade-in'
                )
            ),
            React.createElement(
                'div',
                { className: 'container tin-main-content-container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-md-12 col-xs-12 col-sm-12 tin-main-banner' },
                        React.createElement(
                            'h1',
                            { className: 'tin-banner-about' },
                            React.createElement('p', { className: 'tin-banner-line' }),
                            React.createElement(
                                'span',
                                { className: 'tin-big-letters' },
                                '\u041F\u0420\u041E\u0413\u0420\u0410\u041C\u0410'
                            ),
                            ' \u0443\u0442\u0438\u043B\u0456\u0437\u0430\u0446\u0456\u0457 \u0456 ',
                            React.createElement('br', null),
                            React.createElement(
                                'span',
                                { className: 'tin-big-letters' },
                                '\u041E\u041D\u041E\u0412\u041B\u0415\u041D\u041D\u042F'
                            ),
                            React.createElement('br', null),
                            ' \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456\u0432 GMC'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-12 col-xs-12 col-sm-12 tin-about-service' },
                        React.createElement(
                            'p',
                            null,
                            '\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 Trade-in \u0432  - \u0446\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u0448\u0432\u0438\u0434\u043A\u0438\u0439 \u0456 \u0437\u0440\u0443\u0447\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u043F\u0440\u0438\u0434\u0431\u0430\u0442\u0438 \u043D\u043E\u0432\u0438\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C GMC, \u043F\u0435\u0440\u0448\u0438\u043C \u0432\u043D\u0435\u0441\u043A\u043E\u043C \u0437\u0430 \u044F\u043A\u0438\u0439 \u0441\u0442\u0430\u0454 \u0432\u0430\u0448 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u041D\u0430\u0448\u0456 \u0444\u0430\u0445\u0456\u0432\u0446\u0456 \u043E\u043F\u0435\u0440\u0430\u0442\u0438\u0432\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0443\u0442\u044C \u043E\u0446\u0456\u043D\u043A\u0443 \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u0432\u0430\u0448\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044F, \u044F\u043A\u0430 \u043F\u0456\u0434\u0435 \u0432 \u0437\u0430\u043B\u0456\u043A \u0432\u0430\u0440\u0442\u043E\u0441\u0442\u0456 \u043D\u043E\u0432\u043E\u0433\u043E GMC. \u0411\u0456\u043B\u044C\u0448 \u0442\u043E\u0433\u043E, \u0432\u0430\u043C \u043D\u0435 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0437\u0430\u043C\u0438\u0441\u043B\u044E\u0432\u0430\u0442\u0438\u0441\u044F \u043F\u0440\u043E \u0440\u0435\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044E \u0432\u043B\u0430\u0441\u043D\u043E\u0433\u043E \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044F, \u0446\u0435 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F \u043D\u0430 \u0441\u0435\u0431\u0435 \u0432\u0456\u0437\u044C\u043C\u0443\u0442\u044C \u0441\u043F\u0456\u0432\u0440\u043E\u0431\u0456\u0442\u043D\u0438\u043A\u0438 \u043D\u0430\u0448\u043E\u0433\u043E \u0434\u0438\u043B\u0435\u0440\u0441\u044C\u043A\u043E\u0433\u043E \u0446\u0435\u043D\u0442\u0440\u0443.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            '\u0406 \u043D\u0430\u0439\u0433\u043E\u043B\u043E\u0432\u043D\u0456\u0448\u0435: \u0432\u0441\u0456 \u0443\u0447\u0430\u0441\u043D\u0438\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 Trade-in \u0433\u0430\u0440\u0430\u043D\u0442\u043E\u0432\u0430\u043D\u043E \u043E\u0442\u0440\u0438\u043C\u0443\u044E\u0442\u044C \u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0443 \u0443 \u0432\u0438\u0433\u043B\u044F\u0434\u0456 \u0432\u0438\u0433\u043E\u0434\u0438 \u043D\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443 \u043D\u043E\u0432\u043E\u0433\u043E GMC.'
                        )
                    ),
                    React.createElement('div', { className: 'col-md-12 col-xs-12 col-sm-12 tin-service-schema-img' }),
                    React.createElement(
                        'div',
                        { className: 'col-md-12 col-xs-12 col-sm-12 tin-service-order-button' },
                        React.createElement(
                            'button',
                            { className: 'tin-order-button', type: 'button', 'data-toggle': 'modal', 'data-target': '#formModalTradeIn' },
                            '\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u043E\u0446\u0456\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0430\u0432\u0442\u043E'
                        ),
                        React.createElement(
                            'div',
                            { className: 'modal fade', id: 'formModalTradeIn', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'formModalLabel' },
                            React.createElement(
                                'div',
                                { className: 'modal-dialog tin-modal' },
                                React.createElement(
                                    'div',
                                    { className: 'modal-content' },
                                    React.createElement(
                                        'form',
                                        { action: '/trade-in-form', method: 'post', id: 'test-in', className: 'trade-in-form', onSubmit: this.TradeInForm },
                                        React.createElement(
                                            'h2',
                                            { className: 'trade-in-form-name-main' },
                                            '\u041E\u0446\u0456\u043D\u043A\u0430 \u0430\u0432\u0442\u043E TRADE-IN'
                                        ),
                                        React.createElement('div', { id: 'result-message', className: 'result-message' }),
                                        React.createElement(
                                            'div',
                                            { className: 'tin-inputs-container container' },
                                            React.createElement(
                                                'div',
                                                { className: 'row' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-6 col-sm-12 col-xs-12' },
                                                    React.createElement(
                                                        'h3',
                                                        { className: 'tin-point-name' },
                                                        React.createElement(
                                                            'span',
                                                            { className: 'number-position' },
                                                            '1'
                                                        ),
                                                        ' \u0412\u0430\u0448\u0438\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C'
                                                    ),
                                                    React.createElement(
                                                        'table',
                                                        { className: 'table-for-form-tin-your-car' },
                                                        React.createElement(
                                                            'tbody',
                                                            { className: 'tbody-for-form-tin-your-car' },
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'mark-model', className: 'tin-label-form' },
                                                                        '\u041C\u0430\u0440\u043A\u0430, \u043C\u043E\u0434\u0435\u043B\u044C:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement('input', { type: 'text', name: 'mark-model', placeholder: '', id: 'mark-model', className: 'form-control tin-text-form ' })
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'complectation', className: 'tin-label-form' },
                                                                        '\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0456\u044F:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement('input', { type: 'text', name: 'complectation', placeholder: '', id: 'complectation', className: 'form-control tin-text-form ' })
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'yearOfissue', className: 'tin-label-form' },
                                                                        '\u0420\u0456\u043A \u0432\u0438\u043F\u0443\u0441\u043A\u0443:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement('input', { type: 'text', name: 'yearOfissue', placeholder: '', id: 'yearOfissue', className: 'form-control tin-text-form ' })
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'mileage', className: 'tin-label-form' },
                                                                        '\u041F\u0440\u043E\u0431\u0456\u0433(\u043A\u043C):'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement('input', { type: 'text', name: 'mileage', placeholder: '', id: 'mileage', className: 'form-control tin-text-form ' })
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'mileage', className: 'tin-label-form' },
                                                                        '\u0414\u0432\u0438\u0433\u0443\u043D:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'select',
                                                                        { name: 'driveCheck', id: 'driveCheck', className: 'driveCheck form-control tin-text-form' },
                                                                        driveArr.map((item, i) => React.createElement(
                                                                            'option',
                                                                            { value: item, key: i },
                                                                            item
                                                                        ))
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'engine\u0421apacity', className: 'tin-label-form' },
                                                                        '\u041E\u0431\'\u0454\u043C \u0434\u0432\u0438\u0433\u0443\u043D\u0430:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement('input', { type: 'text', name: 'engine\u0421apacity', placeholder: '', id: 'engine\u0421apacitye', className: 'form-control tin-text-form ' })
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'typeBodyCar', className: 'tin-label-form' },
                                                                        '\u041A\u0443\u0437\u043E\u0432:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'select',
                                                                        { name: 'typeBodyCar', id: 'typeBodyCar', className: 'typeBodyCar form-control tin-text-form' },
                                                                        typeBodyCar.map((item, i) => React.createElement(
                                                                            'option',
                                                                            { value: item, key: i },
                                                                            item
                                                                        ))
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'transmission', className: 'tin-label-form' },
                                                                        '\u0422\u0440\u0430\u043D\u0441\u043C\u0456\u0441\u0456\u044F:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'select',
                                                                        { name: 'transmission', id: 'transmission', className: 'transmission form-control tin-text-form' },
                                                                        typeTransmission.map((item, i) => React.createElement(
                                                                            'option',
                                                                            { value: item, key: i },
                                                                            item
                                                                        ))
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'drive', className: 'tin-label-form' },
                                                                        '\u041F\u0440\u0438\u0432\u0456\u0434:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'select',
                                                                        { name: 'drive', id: 'drive', className: 'drive form-control tin-text-form' },
                                                                        drive.map((item, i) => React.createElement(
                                                                            'option',
                                                                            { value: item, key: i },
                                                                            item
                                                                        ))
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'stateCar', className: 'tin-label-form' },
                                                                        '\u0421\u0442\u0430\u043D:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'select',
                                                                        { name: 'stateCar', id: 'stateCar', className: 'stateCar form-control tin-text-form' },
                                                                        stateCar.map((item, i) => React.createElement(
                                                                            'option',
                                                                            { value: item, key: i },
                                                                            item
                                                                        ))
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-6 col-sm-12 col-xs-12' },
                                                    React.createElement(
                                                        'h3',
                                                        { className: 'tin-point-name' },
                                                        React.createElement(
                                                            'span',
                                                            { className: 'number-position' },
                                                            '2'
                                                        ),
                                                        ' \u0412\u0430\u0448\u0438\u0439 \u043D\u043E\u0432\u0438\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C'
                                                    ),
                                                    React.createElement(
                                                        'table',
                                                        { className: 'table-for-form-tin-your-car' },
                                                        React.createElement(
                                                            'tbody',
                                                            null,
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'stateCar', className: 'tin-label-form' },
                                                                        '\u0425\u043E\u0447\u0443 \u0437\u0430\u043C\u043D\u0456\u043D\u0438\u0442\u0438 \u043D\u0430:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'select',
                                                                        { name: 'yourNewCar', id: 'yourNewCar', className: 'yourNewCar form-control tin-text-form' },
                                                                        yourNewCar.map((item, i) => React.createElement(
                                                                            'option',
                                                                            { value: item, key: i },
                                                                            item
                                                                        ))
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'h3',
                                                        { className: 'tin-point-name' },
                                                        React.createElement(
                                                            'span',
                                                            { className: 'number-position' },
                                                            '3'
                                                        ),
                                                        ' \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F'
                                                    ),
                                                    React.createElement(
                                                        'table',
                                                        { className: 'table-for-form-tin-your-car' },
                                                        React.createElement(
                                                            'tbody',
                                                            null,
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'yourName', className: 'tin-label-form' },
                                                                        '\u0406\u043C\'\u044F:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement('input', { type: 'text', name: 'yourName', placeholder: '', id: 'yourName', className: 'form-control tin-text-form ' })
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'yourEmail', className: 'tin-label-form' },
                                                                        'Email:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement('input', { type: 'text', name: 'yourEmail', placeholder: '', id: 'yourEmail', className: 'form-control tin-text-form ' })
                                                                )
                                                            ),
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'yourPhone', className: 'tin-label-form' },
                                                                        '\u0422\u0435\u043B\u0435\u0444\u043E\u043D:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement('input', { type: 'text', name: 'yourPhone', placeholder: '', id: 'yourPhone', className: 'form-control tin-text-form ' })
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'h3',
                                                        { className: 'tin-point-name' },
                                                        React.createElement(
                                                            'span',
                                                            { className: 'number-position' },
                                                            '4'
                                                        ),
                                                        ' \u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456 \u0442\u0430 \u043F\u043E\u0431\u0430\u0436\u0430\u043D\u043D\u044F'
                                                    ),
                                                    React.createElement(
                                                        'table',
                                                        { className: 'table-for-form-tin-your-car' },
                                                        React.createElement(
                                                            'tbody',
                                                            null,
                                                            React.createElement(
                                                                'tr',
                                                                null,
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement(
                                                                        'span',
                                                                        { htmlFor: 'yourComments', className: 'tin-label-form' },
                                                                        '\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0456:'
                                                                    )
                                                                ),
                                                                React.createElement(
                                                                    'td',
                                                                    null,
                                                                    React.createElement('textarea', { className: 'cordComment form-control tin-text-form' })
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        'div',
                                                        { className: 'tin-modal-footer' },
                                                        React.createElement(
                                                            'button',
                                                            { type: 'submit', className: 'btn btn-success tin-send' },
                                                            '\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438'
                                                        ),
                                                        React.createElement(
                                                            'button',
                                                            { type: 'button', className: 'btn btn-default tin-exit', 'data-dismiss': 'modal' },
                                                            '\u0412\u0438\u0439\u0442\u0438'
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }

}

module.exports.TradeIn = TradeIn;
