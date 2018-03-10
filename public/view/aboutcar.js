let React = require('react');
let $ = require('jquery');

let line = 'https://www.google.com.ua/search?q=rfhnbyrb&rlz=1C1CHBD_ruUA768UA768&tbm=isch&source=iu&ictx=1&fir=Ww8-5bW7cBGhQM%253A%252C703lE2099ryQ3M%252C_&usg=__xd-k77DHnA1eqwgZqMDsVt9rlUQ%3D&sa=X&ved=0ahUKEwix5I2TqdPZAhXCh6YKHZ3FAtAQ9QEILjAC#imgrc=65HTbrU4oYctQM:';

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

class AboutCar extends React.Component {
    constructor(props) {
        super(props);

        this.NavigationUp = this.NavigationUp.bind(this);
        this.NavigationOut = this.NavigationOut.bind(this);
        this.TestDriveForm = this.TestDriveForm.bind(this);

        /*    this.LowSpeed = this.LowSpeed.bind(this);*/
    }

    NavigationUp(event) {

        let el = event.currentTarget.parentElement.nextSibling.attributes[1].name;

        $('[' + el + ']').animate({
            width: "210px",
            opacity: 1

        }, 300, function () {
            console.log(1);
        });
    }

    NavigationOut(event) {
        let el = event.currentTarget.parentElement.nextSibling.attributes[1].name;
        $('[' + el + ']').animate({
            width: "1px",
            opacity: 0
        }, 300);
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
            url: '/test-drive',
            data: JSON.stringify(importData),
            contentType: "application/json; charset=utf-8",
            cache: false,
            success: function (result) {
                alert('Good, your message is send');
                $('#result-message').text('GOOD');
                $('#result-message').toggleClass('success');

                setTimeout(function () {

                    $('#result-message').removeClass('success');
                    $('#result-message').text('');
                }, 10000);
            },
            error: function (error) {
                alert('Bad, failed send');
                $('#result-message').text('BAD');
                $('#result-message').toggleClass('error');

                setTimeout(function () {

                    $('#result-message').removeClass('error');
                    $('#result-message').text('');
                }, 10000);
            }

        });
    }

    /*LowSpeed(event){
        event.preventDefault();
        let id = $(this).attr('href'), top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000); // время, за которое будет осуществлена прокрутка.
    }*/
    render() {
        let data = this.props.infoCar;
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                'div',
                { className: 'container-fluid' },
                React.createElement(
                    'div',
                    { className: 'row one-part' },
                    React.createElement(
                        'div',
                        { className: 'col-md-12 col-xs-12 col-sm-12' },
                        React.createElement(
                            Tween,
                            {
                                animation: {
                                    type: 'from',
                                    ease: 'easeOutQuart',
                                    opacity: 0,
                                    translateX: '-300px',
                                    duration: 900
                                },
                                reverseDelay: 200,
                                style: {
                                    position: 'relative',
                                    zIndex: 100
                                } },
                            React.createElement(
                                'h1',
                                { className: 'carName-main' },
                                React.createElement(
                                    'span',
                                    { className: 'logo-name' },
                                    'GMC'
                                ),
                                ' ',
                                data[0].name
                            )
                        ),
                        React.createElement(
                            Tween,
                            {
                                animation: {
                                    type: 'from',
                                    ease: 'easeOutQuart',
                                    opacity: 0,
                                    translateX: '300px',
                                    duration: 900
                                },
                                reverseDelay: 200,
                                style: {
                                    position: 'relative',
                                    zIndex: 100
                                } },
                            React.createElement(
                                'h1',
                                { className: 'carName-price' },
                                '\u0426\u0456\u043D\u0430 \u0432\u0456\u0434 - ',
                                data[0].price,
                                ' \u0433\u0440\u043D'
                            ),
                            React.createElement(
                                'h1',
                                { className: 'carName-year' },
                                data[0].year,
                                '\u0440. '
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'container-fluid two-part' },
                React.createElement(
                    'div',
                    { className: 'row ' },
                    React.createElement(
                        'div',
                        { className: 'col-md-9 col-sm-9 col-xs-9', style: {
                                position: 'relative',
                                zIndex: 20
                            } },
                        React.createElement(
                            Tween,
                            {
                                animation: {
                                    type: 'from',
                                    ease: 'easeOutQuart',
                                    opacity: 0,
                                    translateX: '700px',
                                    translateY: '-300px',
                                    scale: 0.2,
                                    duration: 1000
                                },
                                reverseDelay: 100
                            },
                            React.createElement('div', { className: 'prev-car', style: {
                                    backgroundImage: 'url(' + data[0].logo + ')',
                                    height: '500px'

                                } })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-3 col-sm-3 col-xs-3', style: {
                                zIndex: 30
                            } },
                        React.createElement(
                            'div',
                            { className: 'navigation-container' },
                            React.createElement(
                                'ul',
                                { className: 'list-menu' },
                                React.createElement(
                                    'li',
                                    { className: 'element-menu', 'data-drive': '\u0414\u0432\u0438\u0433\u0443\u043D' },
                                    React.createElement(
                                        'a',
                                        { href: '#motor' },
                                        React.createElement(
                                            'span',
                                            { className: 'part-ico ' },
                                            React.createElement('i', { onMouseOver: this.NavigationUp, onMouseOut: this.NavigationOut, className: 'fa fa-car fa-2x icons', 'aria-hidden': 'true' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'part-name', 'data-name-one': true },
                                            '\u0414\u0432\u0438\u0433\u0443\u043D'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'element-menu', 'data-size': '\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u0438' },
                                    React.createElement(
                                        'a',
                                        { href: '#size' },
                                        React.createElement(
                                            'span',
                                            { className: 'part-ico' },
                                            React.createElement('i', { onMouseOver: this.NavigationUp, onMouseOut: this.NavigationOut, className: 'fa fa-arrows-h fa-2x icons', 'aria-hidden': 'true' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'part-name', 'data-name-two': true },
                                            '\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u0438'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'element-menu', 'data-transmission': '\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447' },
                                    React.createElement(
                                        'a',
                                        { href: '#transmission' },
                                        React.createElement(
                                            'span',
                                            { className: 'part-ico' },
                                            React.createElement('i', { onMouseOver: this.NavigationUp, onMouseOut: this.NavigationOut, className: 'fa fa-cogs  fa-2x icons', 'aria-hidden': 'true' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'part-name', 'data-name-three': true },
                                            '\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'element-menu', 'data-fuel': '\u0412\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E' },
                                    React.createElement(
                                        'a',
                                        { href: '#fuel' },
                                        React.createElement(
                                            'span',
                                            { className: 'part-ico' },
                                            React.createElement('i', { onMouseOver: this.NavigationUp, onMouseOut: this.NavigationOut, className: 'fa fa-battery-half  fa-2x icons', 'aria-hidden': 'true' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'part-name', 'data-name-four': true },
                                            '\u0412\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement('a', { name: 'motor' }),
            React.createElement(
                'div',
                { className: 'container-fluid three-part', key: data[0].key },
                React.createElement(
                    ScrollOverPack,
                    null,
                    React.createElement(
                        Tween,
                        {
                            key: '1',
                            animation: { type: 'from', ease: 'easeOutQuart', opacity: 0, translateX: '-300px' }
                        },
                        React.createElement(
                            'h1',
                            { className: 'info-drive-name' },
                            '\u0414\u0432\u0438\u0433\u0443\u043D'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row ', key: '2' },
                    React.createElement(
                        'div',
                        { className: 'col-md-5 col-sm-5 col-xs-5' },
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'ul',
                                { className: 'full-event-drive' },
                                React.createElement(
                                    'li',
                                    { className: 'drive-event-container', key: '1' },
                                    React.createElement(
                                        'span',
                                        { className: 'part-ico-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            { className: 'ScrollContainer' },
                                            React.createElement(
                                                Tween,
                                                {
                                                    style: { height: '35px' },
                                                    key: '1',
                                                    animation: { type: 'from', rotate: '-480deg', duration: 1000, width: '35px', height: '35px' }
                                                },
                                                React.createElement('i', { className: 'glyphicon glyphicon-cog' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'part-name-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            null,
                                            React.createElement(
                                                Tween,
                                                {
                                                    key: '1',
                                                    animation: { type: 'from', translateX: '-45px', duration: 1000, opacity: 0, fontSize: '19px' }
                                                },
                                                '\u0414\u0432\u0438\u0433\u0443\u043D: ',
                                                React.createElement(
                                                    'span',
                                                    { className: 'about-drive' },
                                                    data[0].motor
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'drive-event-container', key: '2' },
                                    React.createElement(
                                        'span',
                                        { className: 'part-ico-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            { className: 'ScrollContainer' },
                                            React.createElement(
                                                Tween,
                                                {
                                                    style: { height: '35px' },
                                                    key: '1',
                                                    animation: { type: 'from', rotate: '-480deg', duration: 1000, width: '35px', height: '35px' }
                                                },
                                                React.createElement('i', { className: 'glyphicon glyphicon-cog' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'part-name-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            null,
                                            React.createElement(
                                                Tween,
                                                {
                                                    key: '1',
                                                    animation: { type: 'from', translateX: '-45px', duration: 1000, opacity: 0, fontSize: '19px' }
                                                },
                                                '\u041A\u043E\u0434 \u0434\u0432\u0438\u0433\u0443\u043D\u0430: ',
                                                React.createElement(
                                                    'span',
                                                    { className: 'about-drive' },
                                                    data[0].motor_code
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'drive-event-container', key: '3' },
                                    React.createElement(
                                        'span',
                                        { className: 'part-ico-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            { className: 'ScrollContainer' },
                                            React.createElement(
                                                Tween,
                                                {
                                                    style: { height: '35px' },
                                                    key: '1',
                                                    animation: { type: 'from', rotate: '-480deg', duration: 1000, width: '35px', height: '35px' }
                                                },
                                                React.createElement('i', { className: 'glyphicon glyphicon-cog' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'part-name-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            null,
                                            React.createElement(
                                                Tween,
                                                {
                                                    key: '1',
                                                    animation: { type: 'from', translateX: '-45px', duration: 1000, opacity: 0, fontSize: '19px' }
                                                },
                                                '\u0422\u0438\u043F \u0434\u0432\u0438\u0433\u0443\u043D\u0430: ',
                                                React.createElement(
                                                    'span',
                                                    { className: 'about-drive' },
                                                    data[0].motor_type
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'drive-event-container', key: '4' },
                                    React.createElement(
                                        'span',
                                        { className: 'part-ico-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            { className: 'ScrollContainer' },
                                            React.createElement(
                                                Tween,
                                                {
                                                    style: { height: '35px' },
                                                    key: '1',
                                                    animation: { type: 'from', rotate: '-480deg', duration: 1000, width: '35px', height: '35px' }
                                                },
                                                React.createElement('i', { className: 'glyphicon glyphicon-cog' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'part-name-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            null,
                                            React.createElement(
                                                Tween,
                                                {
                                                    key: '1',
                                                    animation: { type: 'from', translateX: '-45px', duration: 1000, opacity: 0, fontSize: '19px' }
                                                },
                                                '\u0422\u0438\u043F \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E: ',
                                                React.createElement(
                                                    'span',
                                                    { className: 'about-drive' },
                                                    data[0].fuel_type
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'drive-event-container', key: '5' },
                                    React.createElement(
                                        'span',
                                        { className: 'part-ico-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            { className: 'ScrollContainer' },
                                            React.createElement(
                                                Tween,
                                                {
                                                    style: { height: '35px' },
                                                    key: '1',
                                                    animation: { type: 'from', rotate: '-480deg', duration: 1000, width: '35px', height: '35px' }
                                                },
                                                React.createElement('i', { className: 'glyphicon glyphicon-cog' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'part-name-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            null,
                                            React.createElement(
                                                Tween,
                                                {
                                                    key: '1',
                                                    animation: { type: 'from', translateX: '-45px', duration: 1000, opacity: 0, fontSize: '19px' }
                                                },
                                                '\u041E\u0431\'\u0454\u043C \u0434\u0432\u0438\u0433\u0443\u043D\u0430: ',
                                                React.createElement(
                                                    'span',
                                                    { className: 'about-drive' },
                                                    data[0].engine_capecity
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'drive-event-container', key: '6' },
                                    React.createElement(
                                        'span',
                                        { className: 'part-ico-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            { className: 'ScrollContainer' },
                                            React.createElement(
                                                Tween,
                                                {
                                                    style: { height: '35px' },
                                                    key: '1',
                                                    animation: { type: 'from', rotate: '-480deg', duration: 1000, width: '35px', height: '35px' }
                                                },
                                                React.createElement('i', { className: 'glyphicon glyphicon-cog' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'part-name-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            null,
                                            React.createElement(
                                                Tween,
                                                {
                                                    key: '1',
                                                    animation: { type: 'from', translateX: '-45px', duration: 1000, opacity: 0, fontSize: '19px' }
                                                },
                                                '\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0446\u0438\u043B\u0456\u043D\u0434\u0440\u0456\u0432: ',
                                                React.createElement(
                                                    'span',
                                                    { className: 'about-drive' },
                                                    data[0].numb_cylinder
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'drive-event-container', key: '7' },
                                    React.createElement(
                                        'span',
                                        { className: 'part-ico-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            { className: 'ScrollContainer' },
                                            React.createElement(
                                                Tween,
                                                {
                                                    style: { height: '35px' },
                                                    key: '1',
                                                    animation: { type: 'from', rotate: '-480deg', duration: 1000, width: '35px', height: '35px' }
                                                },
                                                React.createElement('i', { className: 'glyphicon glyphicon-cog' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'part-name-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            null,
                                            React.createElement(
                                                Tween,
                                                {
                                                    key: '1',
                                                    animation: { type: 'from', translateX: '-45px', duration: 1000, opacity: 0, fontSize: '19px' }
                                                },
                                                '\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043A\u043B\u0430\u043F\u0430\u043D\u0456\u0432: ',
                                                React.createElement(
                                                    'span',
                                                    { className: 'about-drive' },
                                                    data[0].numb_valves
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'drive-event-container', key: '8' },
                                    React.createElement(
                                        'span',
                                        { className: 'part-ico-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            { className: 'ScrollContainer' },
                                            React.createElement(
                                                Tween,
                                                {
                                                    style: { height: '35px' },
                                                    key: '1',
                                                    animation: { type: 'from', rotate: '-480deg', duration: 1000, width: '35px', height: '35px' }
                                                },
                                                React.createElement('i', { className: 'glyphicon glyphicon-cog' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'part-name-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            null,
                                            React.createElement(
                                                Tween,
                                                {
                                                    key: '1',
                                                    animation: { type: 'from', translateX: '-45px', duration: 1000, opacity: 0, fontSize: '19px' }
                                                },
                                                '\u041F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C: ',
                                                React.createElement(
                                                    'span',
                                                    { className: 'about-drive' },
                                                    data[0].power,
                                                    ' \u043B.\u0441'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'drive-event-container', key: '9' },
                                    React.createElement(
                                        'span',
                                        { className: 'part-ico-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            { className: 'ScrollContainer' },
                                            React.createElement(
                                                Tween,
                                                {
                                                    style: { height: '35px' },
                                                    key: '1',
                                                    animation: { type: 'from', rotate: '-480deg', duration: 1000, width: '35px', height: '35px' }
                                                },
                                                React.createElement('i', { className: 'glyphicon glyphicon-cog' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'part-name-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            null,
                                            React.createElement(
                                                Tween,
                                                {
                                                    key: '1',
                                                    animation: { type: 'from', translateX: '-45px', duration: 1000, opacity: 0, fontSize: '19px' }
                                                },
                                                '\u041E\u0431\u043E\u0440\u043E\u0442\u0438 \u043C\u0430\u043A\u0441. \u0448\u0432\u0438\u0434\u043A\u043E\u0441\u0442\u0456: ',
                                                React.createElement(
                                                    'span',
                                                    { className: 'about-drive' },
                                                    data[0].turnovers_max_power
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'drive-event-container', key: '10' },
                                    React.createElement(
                                        'span',
                                        { className: 'part-ico-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            { className: 'ScrollContainer' },
                                            React.createElement(
                                                Tween,
                                                {
                                                    style: { height: '35px' },
                                                    key: '1',
                                                    animation: { type: 'from', rotate: '-480deg', duration: 1000, width: '35px', height: '35px' }
                                                },
                                                React.createElement('i', { className: 'glyphicon glyphicon-cog' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'part-name-two' },
                                        React.createElement(
                                            ScrollOverPack,
                                            null,
                                            React.createElement(
                                                Tween,
                                                {
                                                    key: '1',
                                                    animation: { type: 'from', translateX: '-45px', duration: 1000, opacity: 0, fontSize: '19px' }
                                                },
                                                '\u041A\u0440\u0443\u0442\u044F\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442: ',
                                                React.createElement(
                                                    'span',
                                                    { className: 'about-drive' },
                                                    data[0].targue
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        ScrollOverPack,
                        null,
                        React.createElement(
                            'div',
                            { className: 'col-md-7 col-sm-7 col-xs-7', key: '3' },
                            React.createElement(
                                Tween,
                                {
                                    key: '3',
                                    animation: { type: 'from', scale: 0.2, duration: 400, opacity: 0 }
                                },
                                React.createElement(
                                    'div',
                                    { className: 'img-drive-container' },
                                    React.createElement(
                                        'div',
                                        { className: 'img-drive' },
                                        React.createElement('img', { src: data[0].img_motor, className: 'info-drive-img', alt: '' })
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('a', { name: 'size' }),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
                ScrollOverPack,
                null,
                React.createElement(
                    Tween,
                    {
                        key: '1',
                        animation: { type: 'from', ease: 'easeOutQuart', opacity: 0, translateX: '-300px' }
                    },
                    React.createElement(
                        'h1',
                        { className: 'info-drive-name' },
                        '\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u0438'
                    )
                ),
                React.createElement(
                    Tween,
                    { key: '2' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-12 col-sm-12 col-xs-12' },
                                React.createElement(
                                    ScrollOverPack,
                                    null,
                                    React.createElement(
                                        Tween,
                                        {
                                            key: '1',
                                            animation: { type: 'from', ease: 'easeOutQuart', translateX: '1200px', duration: 800 },
                                            reverseDelay: 300
                                        },
                                        React.createElement(
                                            'div',
                                            { className: 'img-size-container' },
                                            React.createElement(
                                                'div',
                                                { className: 'img-size' },
                                                React.createElement('img', { src: data[0].img1, className: 'info-size-img', alt: '' })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        Tween,
                                        { key: '2', className: 'review-car-container' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-md-12 col-sm-12 col-xs-12' },
                                            React.createElement(
                                                'div',
                                                { className: 'row' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-6 col-sm-12 col-xs-12' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'review-one' },
                                                        React.createElement('img', { src: data[0].img3, className: 'review-size-one', alt: '' })
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-6 col-sm-12 col-xs-12' },
                                                    React.createElement(
                                                        'div',
                                                        { className: 'review-two' },
                                                        React.createElement('img', { src: data[0].img5, className: 'review-size-two', alt: '' })
                                                    )
                                                )
                                            )
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
                                            animation: { type: 'from', ease: 'easeOutQuart', translateY: '300px', duration: 600 }
                                        },
                                        React.createElement(
                                            'div',
                                            { className: 'col-md-12 col-sm-12 col-xs-12 parent-container-size' },
                                            React.createElement(
                                                'div',
                                                { className: 'row event-size-container' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-1 col-sm-3 col-xs-3 event-size-element grey' },
                                                    React.createElement(
                                                        'p',
                                                        { className: 'icon' },
                                                        React.createElement('img', { className: 'img-place ico-size', src: '../img/icons/place-ico.png', alt: '' })
                                                    ),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-property-name' },
                                                        '\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C ',
                                                        React.createElement('br', null),
                                                        ' \u043C\u0456\u0441\u0446\u044C '
                                                    ),
                                                    React.createElement('hr', { className: 'size-property-line' }),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-description' },
                                                        data[0].places,
                                                        ' '
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-1 col-sm-3 col-xs-3  event-size-element' },
                                                    React.createElement(
                                                        'p',
                                                        { className: 'icon' },
                                                        React.createElement('img', { className: 'img-length ico-size', src: '../img/icons/car-length-ico.png', alt: '' })
                                                    ),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-property-name padding-size-element' },
                                                        '\u0414\u043E\u0432\u0436\u0438\u043D\u0430'
                                                    ),
                                                    React.createElement('hr', { className: 'size-property-line' }),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-description' },
                                                        data[0].length,
                                                        ' \u0441\u043C.'
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-1 col-sm-3 col-xs-3  event-size-element grey' },
                                                    React.createElement(
                                                        'p',
                                                        { className: 'icon' },
                                                        React.createElement('img', { className: 'img-width ico-size', src: '../img/icons/width-ico.png', alt: '' })
                                                    ),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-property-name padding-size-element' },
                                                        '\u0428\u0438\u0440\u0438\u043D\u0430'
                                                    ),
                                                    React.createElement('hr', { className: 'size-property-line' }),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-description' },
                                                        data[0].width,
                                                        ' \u0441\u043C.'
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-1 col-sm-3 col-xs-3  event-size-element' },
                                                    React.createElement(
                                                        'p',
                                                        { className: 'icon' },
                                                        React.createElement('img', { className: 'img-height ico-size', src: '../img/icons/height-ico.png', alt: '' })
                                                    ),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-property-name padding-size-element' },
                                                        '\u0412\u0438\u0441\u043E\u0442\u0430'
                                                    ),
                                                    React.createElement('hr', { className: 'size-property-line' }),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-description' },
                                                        data[0].height,
                                                        ' \u0441\u043C.'
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-1 col-sm-3 col-xs-3 event-size-element grey' },
                                                    React.createElement(
                                                        'p',
                                                        { className: 'icon' },
                                                        React.createElement('img', { className: 'img-trunck ico-size', src: '../img/icons/trunck-size-ico.png', alt: '' })
                                                    ),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-property-name' },
                                                        '\u0412\u0430\u043D\u0442\u0430\u0436\u043D\u0435 ',
                                                        React.createElement('br', null),
                                                        ' \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F'
                                                    ),
                                                    React.createElement('hr', { className: 'size-property-line' }),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-description' },
                                                        data[0].amount_cargo_cell
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-1 col-sm-3 col-xs-3 event-size-element' },
                                                    React.createElement(
                                                        'p',
                                                        { className: 'icon' },
                                                        React.createElement('img', { className: 'img-canister ico-size', src: '../img/icons/fuel-ico.png', alt: '' })
                                                    ),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-property-name' },
                                                        '\u041E\u0431\'\u0454\u043C ',
                                                        React.createElement('br', null),
                                                        ' \u0431\u0430\u043A\u0443'
                                                    ),
                                                    React.createElement('hr', { className: 'size-property-line' }),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-description' },
                                                        data[0].amount_fuel_tank,
                                                        ' \u043B.'
                                                    )
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'col-md-1 col-sm-3 col-xs-3 event-size-element grey' },
                                                    React.createElement(
                                                        'p',
                                                        { className: 'icon' },
                                                        React.createElement('img', { className: 'img-weight ico-size', src: '../img/icons/weight-ico.jpg', alt: '' })
                                                    ),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-property-name padding-size-element' },
                                                        '\u0412\u0430\u0433\u0430'
                                                    ),
                                                    React.createElement('hr', { className: 'size-property-line' }),
                                                    React.createElement(
                                                        'p',
                                                        { className: 'size-element-description' },
                                                        data[0].amount_fuel_tank,
                                                        ' \u043B.'
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
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('a', { name: 'transmission' }),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
                ScrollOverPack,
                null,
                React.createElement(
                    Tween,
                    {
                        key: '1',
                        animation: { type: 'from', ease: 'easeOutQuart', opacity: 0, translateX: '-300px' }
                    },
                    React.createElement(
                        'h1',
                        { className: 'info-drive-name' },
                        '\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447 \u0456 \u043F\u0440\u0438\u0432\u0456\u0434'
                    )
                ),
                React.createElement(
                    Tween,
                    {
                        key: '2' },
                    React.createElement(
                        'div',
                        { className: 'container-fluid' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement('br', null),
                            React.createElement('div', { className: 'col-md-5 col-xs-5 col-sm-5 transmission-container-image', style: {
                                    backgroundImage: 'url(' + data[0].img6 + ')'

                                } }),
                            React.createElement(
                                'div',
                                { className: 'col-md-7 col-xs-7 col-sm-7 main-props-transs-container', style: {
                                        backgroundImage: 'url(' + data[0].banner + ')'
                                    } },
                                React.createElement(
                                    'div',
                                    { className: 'banner-car' },
                                    React.createElement(
                                        ScrollOverPack,
                                        null,
                                        React.createElement(
                                            Tween,
                                            {
                                                key: '1',
                                                animation: { y: 40, type: 'from', ease: 'easeOutQuart', opacity: 0 }
                                            },
                                            React.createElement(
                                                'ul',
                                                { className: 'full-event-transs' },
                                                React.createElement(
                                                    'li',
                                                    { className: 'transs-event-container', key: '0' },
                                                    React.createElement(
                                                        'span',
                                                        { className: 'description-transs-block' },
                                                        React.createElement(
                                                            ScrollOverPack,
                                                            null,
                                                            React.createElement(
                                                                Tween,
                                                                {
                                                                    key: '2'
                                                                },
                                                                '\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447: ',
                                                                React.createElement(
                                                                    'span',
                                                                    { className: 'about-transs' },
                                                                    data[0].transmission
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    'li',
                                                    { className: 'transs-event-container', key: '2' },
                                                    React.createElement(
                                                        'span',
                                                        { className: 'description-transs-block ' },
                                                        React.createElement(
                                                            ScrollOverPack,
                                                            null,
                                                            React.createElement(
                                                                Tween,
                                                                {
                                                                    key: '2'
                                                                },
                                                                '\u0422\u0438\u043F \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447: ',
                                                                React.createElement(
                                                                    'span',
                                                                    { className: 'about-transs' },
                                                                    data[0].type_trans
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    'li',
                                                    { className: 'transs-event-container', key: '3' },
                                                    React.createElement(
                                                        'span',
                                                        { className: 'description-transs-block' },
                                                        React.createElement(
                                                            ScrollOverPack,
                                                            null,
                                                            React.createElement(
                                                                Tween,
                                                                {
                                                                    key: '2'
                                                                },
                                                                '\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447: ',
                                                                React.createElement(
                                                                    'span',
                                                                    { className: 'about-transs' },
                                                                    data[0].amount_gears
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    'li',
                                                    { className: 'transs-event-container', key: '4' },
                                                    React.createElement(
                                                        'span',
                                                        { className: 'description-transs-block' },
                                                        React.createElement(
                                                            ScrollOverPack,
                                                            null,
                                                            React.createElement(
                                                                Tween,
                                                                {
                                                                    key: '2'
                                                                },
                                                                '\u041F\u0440\u0438\u0432\u0456\u0434: ',
                                                                React.createElement(
                                                                    'span',
                                                                    { className: 'about-transs' },
                                                                    data.length > 1 ? React.createElement(
                                                                        'span',
                                                                        null,
                                                                        data[0].drive,
                                                                        ' / ',
                                                                        data[1].drive
                                                                    ) : React.createElement(
                                                                        'span',
                                                                        null,
                                                                        data[0].drive
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                React.createElement(
                                                    'li',
                                                    { className: 'transs-event-container', key: '5' },
                                                    React.createElement(
                                                        'span',
                                                        { className: 'description-transs-block' },
                                                        React.createElement(
                                                            ScrollOverPack,
                                                            null,
                                                            React.createElement(
                                                                Tween,
                                                                {
                                                                    key: '2',
                                                                    style: {
                                                                        width: "430px"
                                                                    }
                                                                },
                                                                React.createElement(
                                                                    'h3',
                                                                    { className: 'fuel_consumption' },
                                                                    '\u0412\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E'
                                                                ),
                                                                data.length > 1 ? React.createElement(
                                                                    'div',
                                                                    { className: 'col-md-12 about-fuel_consumption ' },
                                                                    React.createElement(
                                                                        'div',
                                                                        { className: 'row' },
                                                                        React.createElement(
                                                                            'div',
                                                                            { className: 'one inCity col-md-6' },
                                                                            React.createElement(
                                                                                'p',
                                                                                { className: 'drive-type-description' },
                                                                                React.createElement(
                                                                                    'span',
                                                                                    { className: 'type_drive' },
                                                                                    data[0].drive,
                                                                                    ' \u043F\u0440\u0438\u0432\u0456\u0434'
                                                                                ),
                                                                                ':'
                                                                            ),
                                                                            React.createElement(
                                                                                'div',
                                                                                { className: 'padding-fuel' },
                                                                                React.createElement(
                                                                                    'span',
                                                                                    { className: 'city' },
                                                                                    '\u043F\u043E \u043C\u0456\u0441\u0442\u0443'
                                                                                ),
                                                                                ' - ',
                                                                                data[0].consumption_in_city
                                                                            ),
                                                                            React.createElement(
                                                                                'div',
                                                                                { className: 'padding-fuel' },
                                                                                React.createElement(
                                                                                    'span',
                                                                                    { className: 'city' },
                                                                                    '\u0437\u0430 \u043C\u0456\u0441\u0442\u043E\u043C'
                                                                                ),
                                                                                ' - ',
                                                                                data[0].consumption_out_city
                                                                            )
                                                                        ),
                                                                        React.createElement(
                                                                            'div',
                                                                            { className: 'two outCity col-md-6' },
                                                                            React.createElement(
                                                                                'p',
                                                                                { className: 'drive-type-description' },
                                                                                React.createElement(
                                                                                    'span',
                                                                                    { className: 'type_drive' },
                                                                                    data[1].drive,
                                                                                    ' \u043F\u0440\u0438\u0432\u0456\u0434'
                                                                                ),
                                                                                ':'
                                                                            ),
                                                                            React.createElement(
                                                                                'div',
                                                                                { className: 'padding-fuel' },
                                                                                React.createElement(
                                                                                    'span',
                                                                                    { className: 'city' },
                                                                                    '\u043F\u043E \u043C\u0456\u0441\u0442\u0443'
                                                                                ),
                                                                                ' - ',
                                                                                data[1].consumption_in_city
                                                                            ),
                                                                            React.createElement(
                                                                                'div',
                                                                                { className: 'padding-fuel' },
                                                                                React.createElement(
                                                                                    'span',
                                                                                    { className: 'city' },
                                                                                    '\u0437\u0430 \u043C\u0456\u0441\u0442\u043E\u043C'
                                                                                ),
                                                                                ' - ',
                                                                                data[1].consumption_out_city
                                                                            )
                                                                        )
                                                                    )
                                                                ) : React.createElement(
                                                                    'div',
                                                                    { className: 'one inCity' },
                                                                    React.createElement(
                                                                        'p',
                                                                        { className: 'drive-type-description' },
                                                                        React.createElement(
                                                                            'span',
                                                                            { className: 'type_drive' },
                                                                            data[0].drive,
                                                                            ' \u043F\u0440\u0438\u0432\u0456\u0434'
                                                                        ),
                                                                        ':'
                                                                    ),
                                                                    React.createElement(
                                                                        'div',
                                                                        { className: 'padding-fuel' },
                                                                        React.createElement(
                                                                            'span',
                                                                            { className: 'city' },
                                                                            '\u043F\u043E \u043C\u0456\u0441\u0442\u0443'
                                                                        ),
                                                                        ' - ',
                                                                        data[0].consumption_in_city
                                                                    ),
                                                                    React.createElement(
                                                                        'div',
                                                                        { className: 'padding-fuel' },
                                                                        React.createElement(
                                                                            'span',
                                                                            { className: 'city' },
                                                                            '\u0437\u0430 \u043C\u0456\u0441\u0442\u043E\u043C'
                                                                        ),
                                                                        ' - ',
                                                                        data[0].consumption_out_city
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
                    )
                )
            ),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
                'div',
                { className: 'container-fluid test-drive-main-container' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'h1',
                        { className: 'test-drive-name' },
                        '\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u0442\u0435\u0441\u0442-\u0434\u0440\u0430\u0439\u0432'
                    ),
                    React.createElement('div', { id: 'result-message' }),
                    React.createElement(
                        'div',
                        { className: 'form-container' },
                        React.createElement(
                            'form',
                            { action: '/test-drive', method: 'post', id: 'test-drive', className: 'test-drive-form', onSubmit: this.TestDriveForm },
                            React.createElement(
                                'h3',
                                { className: 'name-car-in-form', name: 'car_name_form' },
                                '\u0410\u0432\u0442\u043E: ',
                                React.createElement(
                                    'span',
                                    { className: 'logo-name-two' },
                                    'GMC ',
                                    data[0].name
                                ),
                                ' '
                            ),
                            React.createElement('input', { type: 'text', name: 'name', placeholder: '\u0412\u0430\u0448\u0435 \u0456\u043C\'\u044F', id: 'clientName', className: 'input-text form-control' }),
                            React.createElement('br', null),
                            React.createElement('input', { type: 'text', name: 'surname', placeholder: '\u0412\u0430\u0448\u0435 \u043F\u0440\u0456\u0437\u0432\u0438\u0449\u0435', id: 'clientSurname', className: 'input-text form-control' }),
                            React.createElement('br', null),
                            React.createElement('input', { type: 'text', name: 'phone', placeholder: '\u0412\u0430\u0448\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443', id: 'clientPhone', className: 'input-text form-control' }),
                            React.createElement('br', null),
                            React.createElement('input', { type: 'text', name: 'email', placeholder: '\u0412\u0430\u0448\u0438\u0439 email', id: 'clientEmail', className: 'input-text form-control' }),
                            React.createElement('br', null),
                            React.createElement('input', { type: 'text', name: 'city', placeholder: '\u041C\u0456\u0441\u0442\u043E', id: 'clientCity', className: 'input-text form-control' }),
                            React.createElement('br', null),
                            React.createElement(
                                'div',
                                { className: 'radio-container' },
                                data.length > 1 ? React.createElement(
                                    React.Fragment,
                                    null,
                                    React.createElement(
                                        'span',
                                        { className: 'drive-radio' },
                                        '\u041F\u0440\u0438\u0432\u0456\u0434: '
                                    ),
                                    React.createElement('input', { type: 'radio', id: 'driveOne',
                                        name: 'driveRadio', className: 'radio-style', value: data[0].drive, defaultChecked: true }),
                                    React.createElement(
                                        'label',
                                        { htmlFor: 'driveOne', className: 'label-form' },
                                        data[0].drive
                                    ),
                                    React.createElement('input', { type: 'radio', id: 'driveTwo',
                                        name: 'driveRadio', className: 'radio-style second-radio', value: data[1].drive }),
                                    React.createElement(
                                        'label',
                                        { htmlFor: 'driveTwo', className: 'label-form' },
                                        data[1].drive
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
                                        name: 'driveOne', value: data[0].drive, defaultChecked: true }),
                                    React.createElement(
                                        'label',
                                        { htmlFor: 'driveOne', className: 'label-form' },
                                        data[0].drive
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
                                React.createElement('input', { type: 'text', className: 'form-control input-text' }),
                                React.createElement(
                                    'span',
                                    { className: 'input-group-addon' },
                                    React.createElement('span', { className: 'glyphicon glyphicon-calendar calendar' })
                                )
                            ),
                            React.createElement(
                                'button',
                                { type: 'submit', className: 'test-drive-button' },
                                '\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438'
                            )
                        )
                    )
                )
            )
        );
    }

}

module.exports.AboutCar = AboutCar;
