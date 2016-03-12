import query from '../queryGraphQL'

export function increment() {
  return {
    type: 'INCREMENT'
  }
}

export function decrement() {
  return {
    type: 'DECREMENT'
  }  
}

export function requestSomething() {
  return {
    type: 'REQUEST_SOMETHING'
  }
}

export function receiveSomething(json) {
  return {
    type: 'RECEIVE_SOMETHING',
    something: json
  }
}

export function fetchSomething() {
  return dispatch => {
    dispatch(requestSomething())

    // return fetch('http://localhost:3001/api/something')
    //   .then(response =>  response.json)
    //   .then(json => dispatch(receiveSomething(json)))
    return query(`
      {
        count
      }
    `).then(json => dispatch(receiveSomething(json)))
  }
}