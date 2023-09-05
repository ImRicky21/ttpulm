import axios from "axios";

const baseURL = 'https://dummyjson.com/'
let dataUser = []

const api = axios.create({baseURL:baseURL});
const getData = api.get('user')
getData.then(response =>{
    for(let i=0; i< response.data.users.length; i++){
    dataUser[i] = response.data.users[i]
    }
})

console.log(dataUser)

export default dataUser