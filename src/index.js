import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


// const greeting = React.createElement('h1', {}, 'Hello World!');

// const getCurrentDate = function() {
// 	const date = new Date();
// 	return date.toDateString();
// }

// const greeting = <h1>Hello React! Current Date: {getCurrentDate()}</h1>;




ReactDOM.render(<App />, document.getElementById('root'));

/// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
