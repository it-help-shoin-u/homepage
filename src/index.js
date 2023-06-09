import React from 'react';
import ReactDOM, {createRoot} from 'react-dom';
import App from './App';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

alert("Hello");