
let React = require('react');

class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            "div",
            { id: "carousel", className: "carousel slide" },
            React.createElement(
                "ol",
                { className: "carousel-indicators" },
                React.createElement("li", { className: "active", "data-target": "#carousel", "data-slide": "0" }),
                React.createElement("li", { "data-target": "#carousel", "data-slide": "1" }),
                React.createElement("li", { "data-target": "#carousel", "data-slide": "2" }),
                React.createElement("li", { "data-target": "#carousel", "data-slide": "3" })
            ),
            React.createElement(
                "div",
                { className: "carousel-inner" },
                React.createElement(
                    "div",
                    { className: "item active" },
                    React.createElement("img", { src: "../img/test1.jpg", alt: "" })
                ),
                React.createElement(
                    "div",
                    { className: "item " },
                    React.createElement("img", { src: "../img/test2.jpg", alt: "" })
                ),
                React.createElement(
                    "div",
                    { className: "item" },
                    React.createElement("img", { src: "../img/test3.jpg", alt: "" })
                ),
                React.createElement(
                    "div",
                    { className: "item " },
                    React.createElement("img", { src: "../img/test4.jpg", alt: "" })
                )
            ),
            React.createElement(
                "a",
                { href: "#carousel", className: "left carousel-control", "data-slide": "prev" },
                React.createElement("span", { className: "glyphicon glyphicon-chevron-left" })
            ),
            React.createElement(
                "a",
                { href: "#carousel", className: "right carousel-control", "data-slide": "next" },
                React.createElement("span", { className: "glyphicon glyphicon-chevron-right" })
            )
        );
    }

}

module.exports.Carousel = Carousel;
