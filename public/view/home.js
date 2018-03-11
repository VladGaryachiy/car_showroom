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
            'div',
            { className: 'container-fluid home-part-one' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-md-12 col-sm-12 col-xs-12' },
                    React.createElement(
                        'h1',
                        { className: 'home-main-title' },
                        '\u041B\u0430\u0441\u043A\u0430\u0432\u043E \u043F\u0440\u043E\u0441\u0438\u043C\u043E \u0432 \u0441\u0432\u0456\u0442 ',
                        React.createElement(
                            'span',
                            { className: 'home-logo' },
                            '- GMC'
                        )
                    )
                )
            )
        );
    }
}

module.exports.Home = Home;
