import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'

document.addEventListener('DOMComponentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
});