let React = require('react');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

let cars = [];
let pickups = [];
let SUVs = [];
let vans = [];

(function () {
    $.ajax({
        url: '/carsData',
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
        cars.push(result.result[i]);
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
}

class TestDrive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCar: [{ name: "name", drive: "drive" }]
        };

        this.getCarInfo = this.getCarInfo.bind(this);
        this.TestDriveForm = this.TestDriveForm.bind(this);
        this.OpenCloseRead = this.OpenCloseRead.bind(this);
    }

    OpenCloseRead(event) {
        let checkClass = $("#td-form-about-container")[0].className;
        let SearchClass;

        if (SearchClass = /close-text/.test(checkClass)) {
            event.currentTarget.textContent = 'Читати далі';
            $("#td-form-about-container").removeClass('close-text');
            $("#td-form-about-container").animate({
                height: '98px',
                overflow: 'hidden'
            }, 400);
        } else {
            event.currentTarget.textContent = 'Згорнути';
            $("#td-form-about-container").toggleClass('close-text');
            $("#td-form-about-container").animate({
                height: '495px',
                overflow: 'visible'
            }, 400);
        }
        console.dir($("#td-form-about-container"));
    }

    getCarInfo(e) {
        let nameCar = e.currentTarget.attributes[3].nodeValue;

        let searchCar = cars.filter(item => {
            return item.name === nameCar;
        });

        this.setState({
            selectedCar: searchCar
        });
    }

    TestDriveForm(event) {
        event.preventDefault();
        let nameClient, surnameClient, phoneClient, emailClient, cityClient, driveClientOne, driveClientTwo, dateClient, nameCar;
        let arr = [];let checkedDrive;
        nameCar = event.currentTarget.children[0].children[0].textContent;
        let drive;
        if (event.currentTarget[6].name === "driveRadio") {
            nameClient = event.currentTarget[0].value;
            surnameClient = event.currentTarget[1].value;
            phoneClient = event.currentTarget[2].value;
            emailClient = event.currentTarget[3].value;
            cityClient = event.currentTarget[4].value;
            driveClientOne = event.currentTarget[5];
            driveClientTwo = event.currentTarget[6];
            dateClient = event.currentTarget[7].value;

            arr.push(driveClientOne, driveClientTwo);
            checkedDrive = arr.filter(function (item) {
                return item.checked === true;
            });

            drive = checkedDrive[0].value;
        } else {
            nameClient = event.currentTarget[0].value;
            surnameClient = event.currentTarget[1].value;
            phoneClient = event.currentTarget[2].value;
            emailClient = event.currentTarget[3].value;
            cityClient = event.currentTarget[4].value;
            driveClientOne = event.currentTarget[5].value;
            dateClient = event.currentTarget[6].value;

            drive = driveClientOne;
        }
        let importData = {
            'name': nameClient,
            'surname': surnameClient,
            'phone': phoneClient,
            'email': emailClient,
            'city': cityClient,
            'drive': drive,
            'date': dateClient,
            'carName': nameCar
        };

        $.ajax({
            method: 'POST',
            url: '/tdServices',
            data: JSON.stringify(importData),
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

        let oneTypePickups = pickups.filter(item => {
            return item.drive === 'Повний';
        });

        let oneTypeSUVS = SUVs.filter(item => {
            return item.drive === 'Передній';
        });

        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                'div',
                { className: 'container-fluid td-name-main-container' },
                React.createElement(
                    Tween,
                    {
                        animation: {
                            type: 'from',
                            ease: 'easeOutQuart',
                            opacity: 0,
                            translateX: '-300px',
                            duration: 900
                        }
                    },
                    React.createElement(
                        'h1',
                        { className: 'td-name-main' },
                        '\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0430\u0432\u0442\u043E \u0434\u043B\u044F \u0442\u0435\u0441\u0442-\u0434\u0440\u0430\u0439\u0432\u0443'
                    )
                )
            ),
            React.createElement(
                Tween,
                {
                    animation: {
                        type: 'from',
                        ease: 'easeOutQuart',
                        opacity: 0,
                        translateY: '300px',
                        duration: 900
                    } },
                React.createElement(
                    'div',
                    { className: 'container td-main-container' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        oneTypePickups.map((item, i) => React.createElement(
                            'div',
                            { className: "col-md-3 col-sm-12 td-car-block", onClick: this.getCarInfo, key: item.key, 'data-toggle': 'modal', 'data-target': '#formModal', 'data-name': item.name, style: {} },
                            React.createElement(
                                'div',
                                { className: 'td-name-block' },
                                React.createElement(
                                    'h2',
                                    { className: 'td-car-name' },
                                    React.createElement(
                                        'span',
                                        { className: 'td-car-logo' },
                                        'GMC'
                                    ),
                                    ' ',
                                    item.name
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'td-year-car' },
                                    item.year,
                                    '\u0440.'
                                )
                            ),
                            React.createElement('div', { className: 'td-car-img', style: {
                                    backgroundImage: 'url(' + item.logo + ')'
                                } })
                        )),
                        oneTypeSUVS.map((item, i) => React.createElement(
                            'div',
                            { className: "col-md-3 col-sm-12 td-car-block", onClick: this.getCarInfo, key: item.key, 'data-toggle': 'modal', 'data-target': '#formModal', 'data-name': item.name, style: {} },
                            React.createElement(
                                'div',
                                { className: 'td-name-block' },
                                React.createElement(
                                    'h2',
                                    { className: 'td-car-name' },
                                    React.createElement(
                                        'span',
                                        { className: 'td-car-logo' },
                                        'GMC'
                                    ),
                                    ' ',
                                    item.name
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'td-year-car' },
                                    item.year,
                                    '\u0440.'
                                )
                            ),
                            React.createElement('div', { className: 'td-car-img', style: {
                                    backgroundImage: 'url(' + item.logo + ')'
                                } })
                        )),
                        vans.map((item, i) => React.createElement(
                            'div',
                            { className: "col-md-3 col-sm-12 td-car-block", onClick: this.getCarInfo, key: item.key, 'data-toggle': 'modal', 'data-target': '#formModal', 'data-name': item.name, style: {} },
                            React.createElement(
                                'div',
                                { className: 'td-name-block' },
                                React.createElement(
                                    'h2',
                                    { className: 'td-car-name' },
                                    React.createElement(
                                        'span',
                                        { className: 'td-car-logo' },
                                        'GMC'
                                    ),
                                    ' ',
                                    item.name
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'td-year-car' },
                                    item.year,
                                    '\u0440.'
                                )
                            ),
                            React.createElement('div', { className: 'td-car-img', style: {
                                    backgroundImage: 'url(' + item.logo + ')'
                                } })
                        ))
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'modal fade', id: 'formModal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'formModalLabel' },
                React.createElement(
                    'div',
                    { className: 'modal-dialog' },
                    React.createElement(
                        'div',
                        { className: 'modal-content' },
                        React.createElement(
                            'form',
                            { action: '/tdServices', method: 'post', id: 'test-drive', className: 'test-drive-form', onSubmit: this.TestDriveForm },
                            React.createElement(
                                'h3',
                                { className: 'name-car-in-form', name: 'car_name_form' },
                                '\u0410\u0432\u0442\u043E: ',
                                React.createElement(
                                    'span',
                                    { className: 'logo-name-two' },
                                    'GMC ',
                                    this.state.selectedCar[0].name
                                ),
                                ' '
                            ),
                            React.createElement(
                                'div',
                                { className: 'td-form-img-container ' },
                                React.createElement('img', { className: 'td-form-img', src: this.state.selectedCar[0].logo })
                            ),
                            React.createElement(
                                'div',
                                { className: 'td-form-about-container ', id: 'td-form-about-container' },
                                React.createElement(
                                    'p',
                                    { className: 'td-about-car-info' },
                                    this.state.selectedCar[0].about
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'button-read-container' },
                                React.createElement(
                                    'button',
                                    { onClick: this.OpenCloseRead, type: 'button', id: 'read-button', className: 'read-info two-class' },
                                    '\u0427\u0438\u0442\u0430\u0442\u0438 \u0434\u0430\u043B\u0456'
                                )
                            ),
                            React.createElement('hr', null),
                            React.createElement('div', { id: 'result-message', className: 'result-message' }),
                            React.createElement('input', { type: 'text', name: 'name', placeholder: '\u0412\u0430\u0448\u0435 \u0456\u043C\'\u044F', id: 'clientName', className: ' form-control' }),
                            React.createElement('br', null),
                            React.createElement('input', { type: 'text', name: 'surname', placeholder: '\u0412\u0430\u0448\u0435 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435', id: 'clientSurname', className: ' form-control' }),
                            React.createElement('br', null),
                            React.createElement('input', { type: 'text', name: 'phone', placeholder: '\u0412\u0430\u0448\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443', id: 'clientPhone', className: ' form-control' }),
                            React.createElement('br', null),
                            React.createElement('input', { type: 'text', name: 'email', placeholder: '\u0412\u0430\u0448\u0438\u0439 email', id: 'clientEmail', className: ' form-control' }),
                            React.createElement('br', null),
                            React.createElement('input', { type: 'text', name: 'city', placeholder: '\u041C\u0456\u0441\u0442\u043E', id: 'clientCity', className: ' form-control' }),
                            React.createElement('br', null),
                            React.createElement(
                                'div',
                                { className: 'radio-container' },
                                this.state.selectedCar.length > 1 ? React.createElement(
                                    React.Fragment,
                                    null,
                                    React.createElement(
                                        'span',
                                        { className: 'drive-radio' },
                                        '\u041F\u0440\u0438\u0432\u0456\u0434: '
                                    ),
                                    React.createElement('input', { type: 'radio', id: 'driveOne',
                                        name: 'driveRadio', className: 'radio-style', value: this.state.selectedCar[0].drive, defaultChecked: true }),
                                    React.createElement(
                                        'label',
                                        { htmlFor: 'driveOne', className: 'label-form' },
                                        this.state.selectedCar[0].drive
                                    ),
                                    React.createElement('input', { type: 'radio', id: 'driveTwo',
                                        name: 'driveRadio', className: 'radio-style second-radio', value: this.state.selectedCar[1].drive }),
                                    React.createElement(
                                        'label',
                                        { htmlFor: 'driveTwo', className: 'label-form' },
                                        this.state.selectedCar[1].drive
                                    )
                                ) : React.createElement(
                                    React.Fragment,
                                    null,
                                    React.createElement(
                                        'span',
                                        { className: 'drive-radio' },
                                        '\u041F\u0440\u0438\u0432\u0456\u0434: '
                                    ),
                                    React.createElement('input', { type: 'radio', id: 'driveOne',
                                        name: 'driveOne', value: this.state.selectedCar[0].drive, defaultChecked: true }),
                                    React.createElement(
                                        'label',
                                        { htmlFor: 'driveOne', className: 'label-form' },
                                        this.state.selectedCar[0].drive
                                    )
                                )
                            ),
                            React.createElement(
                                'span',
                                { className: 'dateName' },
                                '\u0411\u0430\u0436\u0430\u043D\u0430 \u0434\u0430\u0442\u0430 \u0442\u0430 \u0447\u0430\u0441'
                            ),
                            React.createElement(
                                'div',
                                { className: 'input-group', id: 'datetimepicker1' },
                                React.createElement('input', { type: 'text', className: 'form-control ' }),
                                React.createElement(
                                    'span',
                                    { className: 'input-group-addon' },
                                    React.createElement('span', { className: 'glyphicon glyphicon-calendar calendar' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'modal-footer' },
                                React.createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
                                    '\u0412\u0438\u0439\u0442\u0438'
                                ),
                                React.createElement(
                                    'button',
                                    { type: 'submit', className: 'btn btn-success' },
                                    '\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438'
                                )
                            )
                        )
                    )
                )
            )
        );
    }

}

module.exports.TestDrive = TestDrive;
