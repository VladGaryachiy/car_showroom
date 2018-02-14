let React = require('react');
let $ = require('jquery');
require('velocity-animate/velocity');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

class AboutCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: ''
        };
        this.Navigation = this.Navigation.bind(this);
        this.NavigationOut = this.NavigationOut.bind(this);
    }

    Navigation(event) {
        let menu = ['Двигун', 'Габарити', 'Коробка передач', 'Витрата пального'];

        let nameElement = event.currentTarget.attributes[1].nodeValue;
        let element = event.currentTarget.attributes[1].name;

        if (nameElement === menu[0]) {
            event.currentTarget.textContent = nameElement;
            $('[data-drive]').animate({
                marginLeft: '-165px',
                width: "210px",
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                fontSize: '18px',
                cursor: 'pointer',
                paddingLeft: '25px',
                paddingTop: '10px'

            }, 400, function () {
                /*          $('[data-drive]').addClass('activeMenu');*/
            });
        } else if (nameElement === menu[1]) {
            event.currentTarget.textContent = nameElement;
            $('[data-size]').animate({
                marginLeft: '-165px',
                width: "210px",
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                fontSize: '18px',
                cursor: 'pointer',
                paddingLeft: '25px',
                paddingTop: '10px'

            }, 400, function () {
                /*  $('[data-drive]').addClass('activeMenu');*/
            });
        } else if (nameElement === menu[2]) {
            event.currentTarget.textContent = nameElement;
            $('[data-transmission]').animate({
                marginLeft: '-165px',
                width: "210px",
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                fontSize: '18px',
                cursor: 'pointer',
                paddingLeft: '25px',
                paddingTop: '10px'

            }, 400, function () {
                /*           $('[data-drive]').addClass('activeMenu');*/
            });
        } else if (nameElement === menu[3]) {
            event.currentTarget.textContent = nameElement;
            $('[data-fuel]').animate({
                marginLeft: '-165px',
                width: "210px",
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                fontSize: '18px',
                cursor: 'pointer',
                paddingLeft: '25px',
                paddingTop: '10px'

            }, 400, function () {
                /*    $('[data-drive]').addClass('activeMenu');*/
            });
        }
    }

    NavigationOut(event) {
        let menu = ['Двигун', 'Габарити', 'Коробка передач', 'Витрата пального'];

        let nameElement = event.currentTarget.attributes[1].nodeValue;
        let element = event.currentTarget.attributes[1].name;

        /*        console.log(event)*/

        if (nameElement === menu[0]) {
            $('[data-drive]').animate({
                cursor: 'pointer',
                marginTop: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                width: '45px',
                borderRadius: '50px',
                paddingTop: '5px',
                paddingLeft: '3px',
                color: 'white',
                marginLeft: '0px'
            }, 400, function () {
                $('[data-drive]').html('<i class="fa fa-car fa-2x" aria-hidden="true" ></i>');
            });
        } else if (nameElement === menu[1]) {
            $('[data-size]').animate({
                cursor: 'pointer',
                marginTop: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                width: '45px',
                height: '45px',
                borderRadius: '50px',
                paddingTop: '5px',
                paddingLeft: '3px',
                color: 'white',
                marginLeft: '0px'
            }, 400, function () {
                $('[data-size]').html('<i class="fa fa-arrows-h fa-2x " aria-hidden="true"></i>');
            });
        } else if (nameElement === menu[2]) {
            $('[data-transmission]').animate({
                cursor: 'pointer',
                marginTop: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                width: '45px',
                height: '45px',
                borderRadius: '50px',
                paddingTop: '5px',
                paddingLeft: '3px',
                color: 'white',
                marginLeft: '0px'
            }, 400, function () {
                $('[data-transmission]').html('<i class="fa fa-cogs  fa-2x" aria-hidden="true"></i>');
            });
        } else if (nameElement === menu[3]) {
            $('[data-fuel]').animate({
                cursor: 'pointer',
                marginTop: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                width: '45px',
                height: '45px',
                borderRadius: '50px',
                paddingTop: '5px',
                paddingLeft: '3px',
                color: 'white',
                marginLeft: '0px'
            }, 400, function () {
                $('[data-fuel]').html('<i class="fa fa-battery-half  fa-2x" aria-hidden="true"></i>');
            });
        }
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
                    { className: 'row' },
                    React.createElement(
                        Tween,
                        {
                            key: '1',
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
                            key: '2',
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
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-7', style: {
                                position: 'relative',
                                zIndex: 20
                            } },
                        React.createElement(
                            Tween,
                            {
                                key: '3',
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
                        { className: 'col-md-3 col-sm-3 col-xs-3' },
                        React.createElement(
                            'div',
                            { className: 'navigation-container' },
                            React.createElement(
                                'ul',
                                { className: 'list-menu' },
                                React.createElement(
                                    'li',
                                    { className: 'menu-element', 'data-drive': '\u0414\u0432\u0438\u0433\u0443\u043D', onMouseOver: this.Navigation, onMouseOut: this.NavigationOut },
                                    React.createElement('i', { className: 'fa fa-car fa-2x', 'aria-hidden': 'true' })
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'menu-element', 'data-size': '\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u0438', onMouseOver: this.Navigation, onMouseOut: this.NavigationOut },
                                    React.createElement('i', { className: 'fa fa-arrows-h fa-2x ', 'aria-hidden': 'true' })
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'menu-element', 'data-transmission': '\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447', onMouseOver: this.Navigation, onMouseOut: this.NavigationOut },
                                    React.createElement('i', { className: 'fa fa-cogs  fa-2x', 'aria-hidden': 'true' })
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'menu-element', 'data-fuel': '\u0412\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E', onMouseOver: this.Navigation, onMouseOut: this.NavigationOut },
                                    React.createElement('i', { className: 'fa fa-battery-half  fa-2x', 'aria-hidden': 'true' })
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'container-fluid', key: data[0].key },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement('hr', null),
                    React.createElement(
                        'div',
                        { className: 'col-md-6' },
                        React.createElement(
                            'h1',
                            { className: 'info-name' },
                            '\u0414\u0432\u0438\u0433\u0443\u043D'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-6' },
                        React.createElement('div', { className: 'info-img', style: {
                                backgroundImage: 'url(' + data[0].img2 + ')',
                                height: '500px'
                            } })
                    )
                )
            )
        );
    }

}

module.exports.AboutCar = AboutCar;
