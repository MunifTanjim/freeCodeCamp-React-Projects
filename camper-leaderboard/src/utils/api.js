import axios from 'axios'

const apiBase = `https://fcctop100.herokuapp.com/api`

const alltime = () => axios.get(apiBase + '/fccusers/top/alltime')

const recent = () => axios.get(apiBase + '/fccusers/top/recent')

export default {
  alltime : alltime,
  recent : recent
}
