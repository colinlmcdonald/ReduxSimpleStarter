import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './App.js'

const store = applyMiddleware(thunk)(createStore);

render(
  <Provider store={store(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
