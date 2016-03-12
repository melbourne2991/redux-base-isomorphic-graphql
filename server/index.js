import 'isomorphic-fetch'
import express from 'express'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'
import path from 'path'
import handleRender from './handleRender'
import api from './api'

const app = express(), port = 3001;
const compiler = webpack(webpackConfig)

if(process.env.NODE_ENV === 'dev') {
  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}))
  app.use(webpackHotMiddleware(compiler))
}

app.use(bodyParser.text({type: 'application/graphql'}))
app.use('/api', api)
app.use(handleRender)

app.listen(port, (err) => console.log(err || port && `listening on ${port}`))