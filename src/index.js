import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import TodosIndex from './components/todos-index'
import App from './components/app'
import './index.css'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

// Top level routes must be able to render within the <main></main> tag.

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <main>
        <Route path='/' component={ TodosIndex } />
      </main>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
