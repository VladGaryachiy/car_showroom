let React = require('react');

class Finance extends React.Component {
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
                'Finance page'
            )
        );
    }
}

module.exports.Finance = Finance;
