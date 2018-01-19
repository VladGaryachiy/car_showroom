let React = require('react');

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h4',
                null,
                'Home page'
            )
        );
    }
}

module.exports.Home = Home;
