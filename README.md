# x-mockout-ui
This is a build and burn react app, with new emphasis on something that does not look like crap.

Also, it is just a checklist of files.

## 10. Directories to create

+ Create directory: `src/components`

+ Create directory: `src/actions`

+ Create directory: `src/reducers`

+ Create directory: `src/containers`

## 20. Create the login form

The react component is at

```
src/components/login-form-component.js
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
