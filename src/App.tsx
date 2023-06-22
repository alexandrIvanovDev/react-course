import React, {useEffect, useState} from 'react';
import './App.css'
import {PostsList} from './components/PostList';
import {PostForm} from './components/PostForm';
import {PostFilter} from './components/PostFilter';
import {MyModal} from './components/UI/modal/MyModal';
import {MyButton} from './components/UI/button/MyButton';
import axios from 'axios';
import {usePosts} from './hooks/usePost';

export type PostType = {
    id: number
    title: string
    body: string
}

export type OptionType = {
    value: string
    name: string
}

export type FilterType = {
    sort: string
    query: string
}

function App() {

    const [posts, setPosts] = useState<Array<PostType>>([])
    const [filter, setFilter] = useState<FilterType>({sort: '', query: ''})
    const [isModalActive, setIsModalActive] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const fetchPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(response.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const deletePost = (id: number) => setPosts(posts.filter(p => p.id !== id))

    const createPost = (post: PostType) => {
        setPosts([...posts, post])
        closeModal()
    }

    const openModal = () => setIsModalActive(true)

    const closeModal = () => setIsModalActive(false)

    return (
        <div className="App">
            <MyButton callback={fetchPosts}>Get Posts</MyButton>
            <MyModal isActive={isModalActive} closeModal={closeModal}>
                <PostForm createPost={createPost}/>
            </MyModal>
            <MyButton callback={openModal}>Создать пост</MyButton>
            <hr style={{margin: '20px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>

            <PostsList posts={sortedAndSearchedPosts} title={'Посты про JS'} deletePost={deletePost}/>
        </div>
    )
}

export default App;