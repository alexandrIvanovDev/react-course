import React, {useMemo, useState} from 'react';
import './App.css'
import {PostsList} from './components/PostList';
import {PostForm} from './components/PostForm';
import {PostFilter} from './components/PostFilter';
import {MyModal} from './components/UI/modal/MyModal';
import {MyButton} from './components/UI/button/MyButton';

export type PostType = {
    id: number
    title: string
    description: string
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

    const [posts, setPosts] = useState<Array<PostType>>([
        {id: 1, title: 'JavaScript', description: 'aaa'},
        {id: 2, title: 'TypeScript', description: 'ffff'},
        {id: 3, title: 'Go', description: 'rrr'},
        {id: 4, title: 'Swift', description: 'zzz'},
        {id: 5, title: 'Python', description: 'gdfg'}
    ])

    const [filter, setFilter] = useState<FilterType>({sort: '', query: ''})

    const [isModalActive, setIsModalActive] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a: any, b: any) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [posts, filter.sort])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.query))
    }, [sortedPosts, filter.query])

    const deletePost = (id: number) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    const createPost = (post: PostType) => {
        setPosts([...posts, post])
        closeModal()
    }

    const openModal = () => {
        setIsModalActive(true)
    }

    const closeModal = () => setIsModalActive(false)

    return (
        <div className="App">
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