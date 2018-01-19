let React = require('react');

class Cars extends React.Component {
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
                'Different cars'
            )
        );
    }
}

module.exports.Cars = Cars;
