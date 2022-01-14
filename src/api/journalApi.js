
import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-demo-dcd3f-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default journalApi