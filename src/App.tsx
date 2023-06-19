import React, {useState} from 'react';
import './App.css'
import {PostsList} from './components/PostItem';

export type PostType = {
    id: number
    title: string
    description: string
}

function App() {

    const [post, setPost] = useState<Array<PostType>>([
        {id: 1, title: 'JavaScript 1', description: 'Description'},
        {id: 2, title: 'JavaScript 2', description: 'Description'},
        {id: 3, title: 'JavaScript 3', description: 'Description'}
    ])

    const deletePost = (id: number) => {
        setPost(post.filter(p => p.id !== id))
    }

    return (
        <div className="App">
            <PostsList post={post} title={'Посты про JS'} deletePost={deletePost}/>
        </div>
    )
}

export default App;