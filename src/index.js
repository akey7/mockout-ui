import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/root-reducer'
import thunk from 'redux-thunk'

import TodosIndex from './components/todos-index-container'
import Header from './components/header/header-container'
import ProtectRoute from './components/protect-route-container'
import './index.css'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header/>
        <main>
          <Switch>
            <ProtectRoute path='/' component={ TodosIndex } />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
