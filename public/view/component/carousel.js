
let React = require('react');

class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'owl-carousel', id: 'owlCarousel' },
            React.createElement(
                'div',
                { className: 'slide' },
                React.createElement('img', { className: 'owl-item-bg', src: '../../img/slider/slide1.jpg' }),
                React.createElement(
                    'div',
                    { className: 'slide-content' },
                    React.createElement('div', { className: 'overlay' }),
                    React.createElement(
                        'h3',
                        null,
                        React.createElement(
                            'span',
                            { className: 'slider-logo' },
                            'GMC'
                        ),
                        ' Canyon'
                    ),
                    React.createElement(
                        'h2',
                        null,
                        '\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C \u0437 \u044F\u043A\u0438\u043C \u0442\u0438 \u0437\u0440\u0443\u0439\u043D\u0443\u0454\u0448 \u0432\u0441\u0456 \u0441\u0442\u0435\u0440\u0435\u043E\u0442\u0438\u043F\u0438'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'slide' },
                React.createElement('img', { className: 'owl-item-bg', src: '../../img/slider/slide2.jpg' }),
                React.createElement(
                    'div',
                    { className: 'slide-content' },
                    React.createElement('div', { className: 'overlay' }),
                    React.createElement(
                        'h3',
                        null,
                        React.createElement(
                            'span',
                            { className: 'slider-logo' },
                            'GMC'
                        ),
                        ' Sierra'
                    ),
                    React.createElement(
                        'h2',
                        null,
                        '\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C \u0437 \u044F\u043A\u0438\u043C \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E \u043F\u043E\u0434\u043E\u0440\u043E\u0436\u0443\u0432\u0430\u0442\u0438'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'slide' },
                React.createElement('img', { className: 'owl-item-bg', src: '../../img/slider/slide3.jpg' }),
                React.createElement(
                    'div',
                    { className: 'slide-content' },
                    React.createElement('div', { className: 'overlay' }),
                    React.createElement(
                        'h3',
                        null,
                        React.createElement(
                            'span',
                            { className: 'slider-logo' },
                            'GMC'
                        ),
                        ' Acadia'
                    ),
                    React.createElement(
                        'h2',
                        null,
                        '\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C 2017 \u0440\u043E\u043A\u0443'
                    ),
                    React.createElement('hr', null),
                    React.createElement(
                        'h1',
                        null,
                        '\u0426\u0456\u043D\u0430 \u0432\u0456\u0434 - 550000 \u0433\u0440\u043D'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'slide' },
                React.createElement('img', { className: 'owl-item-bg', src: '../../img/slider/slide4.jpg' }),
                React.createElement(
                    'div',
                    { className: 'slide-content' },
                    React.createElement('div', { className: 'overlay' }),
                    React.createElement(
                        'h3',
                        null,
                        React.createElement(
                            'span',
                            { className: 'slider-logo' },
                            'GMC'
                        ),
                        ' Terrain'
                    ),
                    React.createElement(
                        'h2',
                        null,
                        '\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C, \u0449\u043E \u043F\u0430\u0441\u0443\u0454 \u0434\u043E \u0432\u0430\u0448\u043E\u0433\u043E \u0441\u0442\u0438\u043B\u044E'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'slide' },
                React.createElement('img', { className: 'owl-item-bg', src: '../../img/slider/slide5.jpg' }),
                React.createElement(
                    'div',
                    { className: 'slide-content' },
                    React.createElement('div', { className: 'overlay' }),
                    React.createElement(
                        'h3',
                        null,
                        React.createElement(
                            'span',
                            { className: 'slider-logo' },
                            'GMC'
                        ),
                        ' Yukon'
                    ),
                    React.createElement(
                        'h2',
                        null,
                        '\u0410\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C, \u0449\u043E \u043C\u0430\u0454 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440'
                    )
                )
            )
        );
    }

}

module.exports.Carousel = Carousel;
