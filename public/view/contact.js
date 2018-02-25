let React = require('react');

class Contacts extends React.Component {
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
                'Contacts page'
            )
        );
    }
}

module.exports.Contacts = Contacts;
