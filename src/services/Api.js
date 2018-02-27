import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://pokeapi.salestock.net/api/v2'
  })
}
