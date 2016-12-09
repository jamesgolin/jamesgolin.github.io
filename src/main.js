import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'

document.addEventListener('DOMComponentLoaded', () => {
    React.render(
        <App />,
        document.getElementById("root")
    );
});