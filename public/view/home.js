let React = require('react');
let Carousel = require('./component/carousel').Carousel;

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                null,
                'Home Page'
            )
        );
    }
}

module.exports.Home = Home;
