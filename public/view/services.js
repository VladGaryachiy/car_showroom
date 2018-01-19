let React = require('react');

class Services extends React.Component {
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
                'Services page'
            )
        );
    }
}

module.exports.Services = Services;
