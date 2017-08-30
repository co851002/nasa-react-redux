import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import { Provider } from 'react-redux'; //glue...
import Store from './Store';
import App from './app/App'; // import the main app component

import './assets/stylesheets/styles.scss';

ReactDOM.render(
  <Provider store={Store} >
    <App /> 
  </Provider>,
  document.getElementById('root')
); // render our App component and mount it to our #root element
