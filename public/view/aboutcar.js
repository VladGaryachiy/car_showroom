let React = require('react');
let $ = require('jquery');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

class AboutCar extends React.Component {
    constructor(props) {
        super(props);
        this.NavigationUp = this.NavigationUp.bind(this);
        this.NavigationOut = this.NavigationOut.bind(this);
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
                                data[0].price
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
                                        { href: '#' },
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
                                        { href: '#' },
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
                                        { href: '#' },
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
                                        { href: '#' },
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
                    ),
                    React.createElement(
                        'div',
                        { className: 'row ', key: '2' },
                        React.createElement(
                            'div',
                            { className: 'col-md-5 col-sm-5 col-xs-5' },
                            React.createElement(
                                Tween,
                                null,
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
                                                            animation: { type: 'from', rotate: '-480deg', duration: 1400, width: '35px', height: '35px' }
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
                                                            animation: { type: 'from', translateX: '-45px', duration: 1400, opacity: 0, fontSize: '19px' }
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
                                                            animation: { type: 'from', rotate: '-480deg', duration: 1400, width: '35px', height: '35px' }
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
                                                            animation: { type: 'from', translateX: '-45px', duration: 1400, opacity: 0, fontSize: '19px' }
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
                                                            animation: { type: 'from', rotate: '-480deg', duration: 1400, width: '35px', height: '35px' }
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
                                                            animation: { type: 'from', translateX: '-45px', duration: 1400, opacity: 0, fontSize: '19px' }
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
                                                            animation: { type: 'from', rotate: '-480deg', duration: 1400, width: '35px', height: '35px' }
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
                                                            animation: { type: 'from', translateX: '-45px', duration: 1400, opacity: 0, fontSize: '19px' }
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
                                                            animation: { type: 'from', rotate: '-480deg', duration: 1400, width: '35px', height: '35px' }
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
                                                            animation: { type: 'from', translateX: '-45px', duration: 1400, opacity: 0, fontSize: '19px' }
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
                                                            animation: { type: 'from', rotate: '-480deg', duration: 1400, width: '35px', height: '35px' }
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
                                                            animation: { type: 'from', translateX: '-45px', duration: 1400, opacity: 0, fontSize: '19px' }
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
                                                            animation: { type: 'from', rotate: '-480deg', duration: 1400, width: '35px', height: '35px' }
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
                                                            animation: { type: 'from', translateX: '-45px', duration: 1400, opacity: 0, fontSize: '19px' }
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
                                                            animation: { type: 'from', rotate: '-480deg', duration: 1400, width: '35px', height: '35px' }
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
                                                            animation: { type: 'from', translateX: '-45px', duration: 1400, opacity: 0, fontSize: '19px' }
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
                                                            animation: { type: 'from', rotate: '-480deg', duration: 1400, width: '35px', height: '35px' }
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
                                                            animation: { type: 'from', translateX: '-45px', duration: 1400, opacity: 0, fontSize: '19px' }
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
                                                            animation: { type: 'from', rotate: '-480deg', duration: 1400, width: '35px', height: '35px' }
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
                                                            animation: { type: 'from', translateX: '-45px', duration: 1400, opacity: 0, fontSize: '19px' }
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
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-md-7' },
                            React.createElement(
                                Tween,
                                {
                                    key: '3',
                                    animation: { type: 'from', scale: 0.2, duration: 900, opacity: 0, translateX: '300px' }
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
                                    Tween,
                                    {
                                        key: '2' },
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
                                    'div',
                                    { className: 'col-md-12 col-sm-12 col-xs-12 parent-container-size' },
                                    React.createElement(
                                        'div',
                                        { className: 'row event-size-container' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-md-2 col-sm-6 col-xs-12 event-size-element' },
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-property-name' },
                                                '\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043C\u0456\u0441\u0446\u044C '
                                            ),
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-description' },
                                                data[0].places,
                                                ' '
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'col-md-2 col-sm-6 col-xs-12  event-size-element' },
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-property-name' },
                                                '\u0414\u043E\u0432\u0436\u0438\u043D\u0430'
                                            ),
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-description' },
                                                data[0].length,
                                                ' \u0441\u043C.'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'col-md-2 col-sm-6 col-xs-12  event-size-element' },
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-property-name' },
                                                '\u0428\u0438\u0440\u0438\u043D\u0430'
                                            ),
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-description' },
                                                data[0].width,
                                                ' \u0441\u043C.'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'col-md-2 col-sm-6 col-xs-12  event-size-element' },
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-property-name' },
                                                '\u0412\u0438\u0441\u043E\u0442\u0430'
                                            ),
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-description' },
                                                data[0].height,
                                                ' \u0441\u043C.'
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'col-md-2 col-sm-6 col-xs-12 event-size-element' },
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-property-name' },
                                                '\u0412\u0430\u043D\u0442\u0430\u0436\u043D\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F'
                                            ),
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-description' },
                                                data[0].amount_cargo_cell
                                            )
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'col-md-2 col-sm-6 col-xs-12 event-size-element' },
                                            React.createElement(
                                                'p',
                                                { className: 'size-element-property-name' },
                                                '\u041E\u0431\'\u0454\u043C \u0431\u0430\u043A\u0443'
                                            ),
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
        );
    }

}

module.exports.AboutCar = AboutCar;
