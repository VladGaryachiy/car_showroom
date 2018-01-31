let React = require('react');

class AboutCar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.infoCar;
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                "div",
                { id: "carousel", className: "carousel slide sliderAboutCar" },
                React.createElement(
                    "ol",
                    { className: "carousel-indicators" },
                    React.createElement("li", { className: "active", "data-target": "#carousel", "data-slide": "0" }),
                    React.createElement("li", { "data-target": "#carousel", "data-slide": "1" })
                ),
                React.createElement(
                    "div",
                    { className: "carousel-inner" },
                    React.createElement(
                        "div",
                        { className: "item active" },
                        React.createElement("img", { src: data[0].slider1, alt: "" })
                    ),
                    React.createElement(
                        "div",
                        { className: "item " },
                        React.createElement("img", { src: data[0].slider2, alt: "" })
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
            ),
            React.createElement(
                "div",
                { className: "container anchor-container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "a",
                        { href: "#motor" },
                        React.createElement(
                            "div",
                            { className: "col-md-2 anchor" },
                            React.createElement(
                                "p",
                                null,
                                "\u0414\u0432\u0438\u0433\u0443\u043D"
                            ),
                            React.createElement("br", null),
                            React.createElement("i", { className: "fa fa-car  fa-2x", "aria-hidden": "true" })
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "#dimensions" },
                        React.createElement(
                            "div",
                            { className: "col-md-2 anchor" },
                            React.createElement(
                                "p",
                                null,
                                "\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u0438"
                            ),
                            React.createElement("br", null),
                            React.createElement("i", { className: "fa fa-arrows-h  fa-2x", "aria-hidden": "true" })
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "#transmission " },
                        React.createElement(
                            "div",
                            { className: "col-md-2 anchor" },
                            React.createElement(
                                "p",
                                null,
                                "\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447"
                            ),
                            React.createElement("i", { className: "fa fa-cogs  fa-2x", "aria-hidden": "true" })
                        )
                    ),
                    React.createElement(
                        "a",
                        { href: "#fuel " },
                        React.createElement(
                            "div",
                            { className: "col-md-2 anchor" },
                            React.createElement(
                                "p",
                                null,
                                "\u0412\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E"
                            ),
                            React.createElement("i", { className: "fa fa-battery-half  fa-2x", "aria-hidden": "true" })
                        )
                    )
                )
            ),
            React.createElement(
                "a",
                { name: "motor" },
                " "
            ),
            React.createElement(
                "div",
                { className: "container-fluid motors" },
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 aboutMotors" },
                        React.createElement(
                            "h2",
                            null,
                            "\u0414\u0432\u0438\u0433\u0443\u043D"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u0414\u0432\u0438\u0433\u0443\u043D:  ",
                            data[0].motor
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041A\u043E\u0434 \u0434\u0432\u0438\u0433\u0443\u043D\u0430 : ",
                            data[0].motor_code
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u0422\u0438\u043F \u0434\u0432\u0438\u0433\u0443\u043D\u0430 : ",
                            data[0].motor_type
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u0422\u0438\u043F \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E : ",
                            data[0].fuel_type
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041E\u0431'\u0454\u043C \u0434\u0432\u0438\u0433\u0443\u043D\u0430 : ",
                            data[0].engine_capecity
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0446\u0438\u043B\u0456\u043D\u0434\u0440\u0456\u0432 : ",
                            data[0].numb_cylinder
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043A\u043B\u0430\u043F\u0430\u043D\u0456\u0432 : ",
                            data[0].numb_valves
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041F\u043E\u0442\u0443\u0436\u043D\u0456\u0441\u0442\u044C : ",
                            data[0].power,
                            " \u043B.\u0441"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041E\u0431\u043E\u0440\u043E\u0442\u0438 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0457 \u0448\u0432\u0438\u0434\u043A\u043Ec\u0442\u0456 : ",
                            data[0].turnovers_max_power
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041A\u0440\u0443\u0442\u044F\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 : ",
                            data[0].targue
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6 imgMotors" },
                        React.createElement("img", { src: data[0].img_motor, alt: "", height: 350, width: 470 })
                    )
                )
            ),
            React.createElement(
                "a",
                { name: "dimensions" },
                " "
            ),
            React.createElement(
                "div",
                { className: "container-fluid aboutDimensions" },
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 aboutDimensionsData" },
                        React.createElement(
                            "h2",
                            null,
                            "\u0413\u0430\u0431\u0430\u0440\u0438\u0442\u0438"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043C\u0456\u0441\u0446\u044C: ",
                            data[0].places
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u0414\u043E\u0432\u0436\u0438\u043D\u0430: ",
                            data[0].length
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u0428\u0438\u0440\u0438\u043D\u0430: ",
                            data[0].width
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u0412\u0438\u0441\u043E\u0442\u0430: ",
                            data[0].height
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u0412\u0430\u043D\u0442\u0430\u0436\u043D\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F : ",
                            data[0].amount_cargo_cell
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041E\u0431'\u0454\u043C \u0431\u0430\u043A\u0443 : ",
                            data[0].amount_fuel_tank
                        )
                    )
                )
            ),
            React.createElement(
                "a",
                { name: "transmission" },
                " "
            ),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        React.createElement(
                            "h2",
                            null,
                            "\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447 \u0456 \u043F\u0440\u0438\u0432\u0456\u0434"
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041A\u043E\u0440\u043E\u0431\u043A\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u0447 : ",
                            data[0].transmission
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u0422\u0438\u043F \u043A\u043E\u0440\u043E\u0431\u043A\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0447: ",
                            data[0].type_trans
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0447: ",
                            data[0].amount_gears
                        ),
                        React.createElement(
                            "p",
                            null,
                            "\u041F\u0440\u0438\u0432\u0456\u0434: ",
                            data[0].drive,
                            " "
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        React.createElement("img", { src: data[0].img1, alt: "", height: 400, width: 550 })
                    )
                )
            ),
            React.createElement(
                "a",
                { name: "fuel" },
                " "
            ),
            React.createElement(
                "div",
                { className: "container" },
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6" },
                        React.createElement(
                            "h2",
                            null,
                            "\u0412\u0438\u0442\u0440\u0430\u0442\u0430 \u043F\u0430\u043B\u044C\u043D\u043E\u0433\u043E"
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "h3",
                            null,
                            "\u0420\u0456\u043A : ",
                            data[0].year
                        ),
                        React.createElement(
                            "h3",
                            null,
                            "\u041A\u0440\u0430\u0457\u043D\u0430 : ",
                            data[0].country
                        ),
                        React.createElement("hr", null),
                        React.createElement(
                            "h2",
                            null,
                            "\u0426\u0456\u043D\u0430"
                        ),
                        React.createElement(
                            "h1",
                            null,
                            data[0].price,
                            " \u0433\u0440\u043D"
                        )
                    )
                )
            )
        );
    }

}

module.exports.AboutCar = AboutCar;
