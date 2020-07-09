import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FeedPreview from './FeedPreview';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <FeedPreview url="https://www.gamespot.com/feeds/mashup/"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
