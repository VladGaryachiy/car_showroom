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
            { id: 'test' },
            React.createElement(
                'h2',
                null,
                'Home Page'
            )
        );
    }
}

module.exports.Home = Home;
