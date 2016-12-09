import React from 'react';
import ReactDOM from 'react-dom'
import App from './app.js'

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(App),
        document.getElementById("root")
    );
});