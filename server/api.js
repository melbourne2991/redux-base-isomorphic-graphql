import { Router } from 'express'
import handleGraphQLQuery from './handleGraphQLQuery'

const api = Router()

api.get('/something', (req, res) => {
  res.send({
    something: 'I am something!'
  })
})

api.post('/data', handleGraphQLQuery)

export default api


