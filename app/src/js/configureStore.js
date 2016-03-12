import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer, 
    applyMiddleware(thunkMiddleware),
    initialState
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers/index').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
