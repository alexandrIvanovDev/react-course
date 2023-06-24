import axios from 'axios';

export const postsAPI = {
    getAllPosts(limit: number = 10, page: number = 1) {
        return axios.get<Array<PostType>>(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                _limit: limit,
                _page: page
            }})
    }
}

export type PostType = {
    id: number
    title: string
    body: string
}