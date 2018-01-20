let React = require('react');
let ReactDOM = require('react-dom');

let MainComponent = require('./app').MainComponent;

ReactDOM.render(React.createElement(MainComponent, null), document.getElementById('app'));
