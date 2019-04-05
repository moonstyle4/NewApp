import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, message: 'Hello, Kolyan', likeCount: '14' },
    { id: 2, message: 'Hi!', likeCount: '22' },
    { id: 3, message: 'Blalla!', likeCount: '3' },
    { id: 4, message: 'Mazafaka', likeCount: '45' }
]
ReactDOM.render(<App posts = {posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
