import { graphql } from 'graphql'
import schema from './schema'

export default function handleGraphQLQuery(req, res) {
  console.log(req.body)

  graphql(schema, req.body)
    .then((result) => {
      res.send(JSON.stringify(result))
    })
}