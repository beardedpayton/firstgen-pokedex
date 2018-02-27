import Api from '@/services/Api'

export default {
  getPokemon () {
    return Api().get('pokemon/?limit=151')
  },
  stats (id) {
    return Api().get(`/pokemon/${id}`)
  }
}
