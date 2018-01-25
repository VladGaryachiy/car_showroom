
let React = require('react');

class Footer extends React.Component {

    render() {
        return React.createElement(
            "div",
            { className: "footer", id: "footer" },
            React.createElement(
                "p",
                null,
                "Footer"
            ),
            React.createElement(
                "p",
                null,
                "Footer"
            )
        );
    }
}

module.exports.Footer = Footer;
