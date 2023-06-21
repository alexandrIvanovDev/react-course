import React, {useMemo, useState} from 'react';
import './App.css'
import {PostsList} from './components/PostList';
import {PostForm} from './components/PostForm';
import {PostFilter} from './components/PostFilter';
import {MyModal} from './components/UI/modal/MyModal';

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
    }

    return (
        <div className="App">
            <MyModal>Modal Window</MyModal>
            <PostForm createPost={createPost}/>
            <hr style={{margin: '20px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>

            <PostsList posts={sortedAndSearchedPosts} title={'Посты про JS'} deletePost={deletePost}/>
        </div>
    )
}

export default App;