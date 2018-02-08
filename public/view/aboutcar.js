let React = require('react');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

class AboutCar extends React.Component {
    constructor(props) {
        super(props);
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
                            ' ',
                            data[0].name
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
                                key: '1',
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
                        Tween,
                        {
                            key: '1',
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
