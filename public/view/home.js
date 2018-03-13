let React = require('react');
let ReactDOM = require('react-dom');
let Carousel = require('./component/carousel').Carousel;

let ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                'div',
                { className: 'container-fluid home-part-one' },
                React.createElement(
                    'div',
                    { className: 'row delele-margin' },
                    React.createElement(
                        'div',
                        { className: 'col-md-12 col-sm-12 col-xs-12 title-container' },
                        React.createElement(Carousel, null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-12 col-sm-12 col-xs-12 about-company-container ' },
                        React.createElement(
                            'h1',
                            { className: 'about-company' },
                            '\u041F\u0440\u043E \u043D\u0430\u0441'
                        ),
                        React.createElement(
                            'div',
                            { className: 'row history-company' },
                            React.createElement(
                                'div',
                                { className: 'col-md-6' },
                                React.createElement(
                                    'p',
                                    { className: 'about-company-text' },
                                    'GMC - \u0446\u0435 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0430 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0430 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0446\u0456\u044F, \u0434\u043E 2008 \u0440\u043E\u043A\u0443 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 77 \u0440\u043E\u043A\u0456\u0432 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0439 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456\u0432 \u0432 \u0441\u0432\u0456\u0442\u0456. \u0417\u0430 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u043C\u0438 2014 \u043A\u043E\u043D\u0446\u0435\u0440\u043D \u0437\u0430\u0439\u043C\u0430\u0454 \u0442\u0440\u0435\u0442\u0454 \u043C\u0456\u0441\u0446\u0435 \u0432 \u0441\u0432\u0456\u0442\u0456 (\u043F\u0456\u0441\u043B\u044F Toyota \u0456 Volkswagen) \u0437\u0430 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044E \u043F\u0440\u043E\u0434\u0430\u043D\u0438\u0445 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0456\u043B\u0456\u0432 (9,92 \u043C\u0456\u043B\u044C\u0439\u043E\u043D\u0430 \u0430\u0432\u0442\u043E). \u0412\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u043E \u043D\u0430\u043B\u0430\u0433\u043E\u0434\u0436\u0435\u043D\u0435 \u0432 35 \u043A\u0440\u0430\u0457\u043D\u0430\u0445, \u043F\u0440\u043E\u0434\u0430\u0436 \u0432 192 \u043A\u0440\u0430\u0457\u043D\u0430\u0445. \u0428\u0442\u0430\u0431-\u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0457 \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0430 \u0432 \u0414\u0435\u0442\u0440\u043E\u0439\u0442\u0456. \u041D\u0430 \u043F\u0435\u0432\u043D\u0438\u0445 \u0435\u0442\u0430\u043F\u0430\u0445 \u0441\u0432\u043E\u0433\u043E \u0456\u0441\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0445\u043E\u0434\u0438\u043B\u0430 \u0434\u043E \u0434\u0432\u0430\u0434\u0446\u044F\u0442\u043A\u0438 \u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u0439-\u043F\u0456\u0434\u0440\u044F\u0434\u043D\u0438\u043A\u0456\u0432 \u0412\u041F\u041A \u0421\u0428\u0410. \u0411\u043B\u0438\u0437\u044C\u043A\u043E \u043F\'\u044F\u0442\u043E\u0457 \u0447\u0430\u0441\u0442\u0438\u043D\u0438 \u0434\u043E\u0445\u043E\u0434\u0456\u0432 \u0432\u0456\u0434 \u043F\u0440\u043E\u0434\u0430\u0436\u0456\u0432 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0456\u0457 \u0456 \u043F\u043E\u0441\u043B\u0443\u0433, \u0449\u043E \u043D\u0430\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u0438\u0439 \u043A\u043B\u0456\u0454\u043D\u0442\u0441\u044C\u043A\u0438\u0439 \u0441\u0435\u043A\u0442\u043E\u0440 \u043E\u0431\u0441\u043B\u0443\u0433\u043E\u0432\u0443\u0432\u0430\u043D\u043D\u044F \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u0438\u0445 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u044C (\u0431\u0435\u0437 \u0443\u0440\u0430\u0445\u0443\u0432\u0430\u043D\u043D\u044F \u0456\u043D\u043E\u0437\u0435\u043C\u043D\u0438\u0445 \u0437\u0430\u043C\u043E\u0432\u043D\u0438\u043A\u0456\u0432 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u043E\u0433\u043E \u043E\u0437\u0431\u0440\u043E\u0454\u043D\u043D\u044F \u0456 \u0432\u0456\u0439\u0441\u044C\u043A\u043E\u0432\u043E\u0457 \u0442\u0435\u0445\u043D\u0456\u043A\u0438).'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-6' },
                                React.createElement('img', { src: '../img/gmc1.jpg', height: '460px', width: '600px', alt: '' })
                            )
                        )
                    )
                )
            )
        );
    }
}

module.exports.Home = Home;
