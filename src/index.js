import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import TodosIndex from './components/todos-index-component'
import LoginIndex from './components/login-index-component'
import Header from './containers/header-container'
import App from './components/app'
import './index.css'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <Switch>
            <Route path='/login' component={ LoginIndex } />
            <Route path='/' component={ TodosIndex } />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
