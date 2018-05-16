import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import TodosIndex from './components/todos-index-component'
import LoginContainer from './containers/login-form-container'
import Header from './containers/header-container'
import ProtectRoute from './containers/protect-route-container'
import NotProtectRoute from './containers/not-protect-route'
import './index.css'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <Switch>
            <NotProtectRoute path='/notlogin' component={ LoginContainer } />
            <Route path='/login' component={ LoginContainer } />
            <ProtectRoute path='/' component={ TodosIndex } />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
