import { SERVER_ERROR } from '../constants/errors'

const BASE_URL = 'http://localhost:1234'

export function getControls() {
  return fetch(`${BASE_URL}/controls`)
    .then((res) => {
      if (res.ok) return res.json()
      throw Error(SERVER_ERROR)
    })
    .catch((err) => {
      throw Error(SERVER_ERROR)
    })
}
