import axios from 'axios'
const httpClient = axios.create({
  baseURL: "https://cute-little-api.herokuapp.com/api"
})

httpClient.getUsers = function() {
    return this({ method: 'get', url: '/users'})
}

httpClient.postUser = function(userFields) {
    return this({method: 'post', url: '/users', data:'userFields'})
}

httpClient.deleteUser = function(id) {
    return this({ method:'delete', url: `/users/${id}` })
}


export default httpClient