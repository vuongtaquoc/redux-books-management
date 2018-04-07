const apiPrefix = 'http://5ac898a751c80500149ae811.mockapi.io/api/v1'

export default function request(url, method = 'GET', body = {}) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(apiPrefix + url, {
    method: method,
    headers: headers,
    body: method === 'POST' || method === 'PUT' ? JSON.stringify(body) : undefined
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }

    return Promise.reject({
      reason: res._bodyText ? JSON.parse(res._bodyText) : null
    })
  })
  .catch(err => Promise.reject(err))
}

export function get(url, params = {}) {
  return request(url, 'GET')
}

export function post(url, body = {}) {
  return request(url, 'POST', {}, body)
}

export function put(url, body = {}) {
  return request(url, 'PUT', {}, body)
}

export function remove(url) {
  return request(url, 'DELETE', {})
}