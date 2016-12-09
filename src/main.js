import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.jsx'

document.addEventListener('DOMContentLoaded', () => {
    React.render(
        <App />,
        document.getElementByID("root")
    );
})
