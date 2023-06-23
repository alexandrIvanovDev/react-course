import axios from 'axios';

export const postsAPI = {
    getAllPosts () {
        return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
    }
}