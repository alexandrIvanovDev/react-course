import axios from 'axios';

export const postsAPI = {
    getAllPosts(limit: number = 10, page: number = 1) {
        return axios.get<Array<PostType>>(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                _limit: limit,
                _page: page
            }})
    },
    getPost(id: number) {
        return axios.get<PostType>(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.data)
    },
    getCommentsForPost(id: number) {
        return axios.get<Array<CommentType>>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(res => res.data)
    }
}

export type PostType = {
    id: number
    title: string
    body: string
}
export type CommentType = PostType & {email: string}