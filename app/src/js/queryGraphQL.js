import queryString from 'query-string'

export default function queryGraphQL(query) {
  const request = new Request( '/api/data', {
    method: 'POST',
    body: query,
    headers: new Headers({
      'Content-Type': 'application/graphql'
    })
  })

  return fetch(request)
    .then(response => response.json)
}