# x-mockout-ui
This is a build and burn react app, with new emphasis on something that does not look like crap.

Also, it is just a checklist of files.

## 10. Directories to create

+ Create directory: `src/components`

+ Create directory: `src/actions`

+ Create directory: `src/reducers`

+ Create directory: `src/containers`

## 15. Move `app.js` and `App.css`

Move `src/app.js` -> `src/components/app.js`
Move `src/app.js` -> `src/components/app.js`

Modify `src/index.js` to match the new locations and names of the files. If you are using an IDE like WebStorm it can handle this refactoring automatically.

## 20. Create the login form

The react component is at

```
src/components/login-form-container.js
```

and its CSS is at:

```
src/components/login-form-component.css
```

Then test it

## 30. Create the auth reducer

The `auth-reducer` will reduce the state of the authentication and authorization of the UI.

```
src/reducers/auth-reducer.js
```

The shape of the auth data will be:

```javascript
{
  username: [THE LOGGED IN USERNAME],
  token: [THE AUTH TOKEN]
}
```

## 40. Create the `rootReducer`

The root reducer will combine all the reducers for the store.

```
src/reducers/index.js
```

## 45. Put the `rootReducer` and `thunk` into a `<Provider>`

This magic happens in

```
src/index.js
```

Where you should find something like this:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app'
import registerServiceWorker from './registerServiceWorker'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}><App /></Provider>,
  document.getElementById('root'))
registerServiceWorker()
```

## 50. Create the authentication UI header

The header of the app will have the title of the app on the left side and the login/out buttons on the right side. It needs to be a container so it can be aware of auth changes.

```
src/containers/header-container.js
```

with its accompanying CSS in

```
src/containers/header-container.css
```

This is a functional container. Crucially, because it is a container, the function itself is not on `export default`. Rather that whole pile of react redux stuff is exported.

## 60. Create `.env.development` and  `.env.production`

Check the source code.
