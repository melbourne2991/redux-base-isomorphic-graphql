import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Ui } from '../app/src/js/components'
import rootReducer from '../app/src/js/reducers'
import { RouterContext, match } from 'react-router'
import routes from '../app/src/js/routes'

export default function handleRender(req, res) {
  const store = createStore(rootReducer, initialState)
  const initialState = store.getState()

  match({routes, location: req.url}, (err, redirectLoction, renderProps) => {
    if(err) {
      res.status(500).send(err.message)
    } else if(redirectLoction) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if(renderProps) {
      let html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      )

      res.send(renderFullPage(html, initialState))
    } else {
      res.status(404).send('Not found')
    }
  })
}

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>

        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>

        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  `
}