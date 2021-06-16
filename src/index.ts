import { createElement } from 'react';
import { render } from 'react-dom';
import App from './contexts/App'
import './stylesheets/index.css';

document.addEventListener('contextmenu', function(event) {event.preventDefault();})

render(createElement(App), document.getElementById('root'));
