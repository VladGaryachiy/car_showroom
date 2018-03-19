
let React = require('react');

class Footer extends React.Component {

    render() {
        return React.createElement(
            "footer",
            null,
            React.createElement("div", { className: "footer" })
        );
    }
}

module.exports.Footer = Footer;
