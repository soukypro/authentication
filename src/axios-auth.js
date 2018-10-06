import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vue-auth-souky.firebaseio.com/'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
