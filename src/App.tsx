import React, {ChangeEvent, FormEvent, useState} from 'react';
import './App.css'
import {PostsList} from './components/PostItem';
import {MyButton} from './components/UI/button/MyButton';
import {MyInput} from './components/UI/input/MyInput';

export type PostType = {
    id: number
    title: string
    description: string
}

function App() {

    const [posts, setPosts] = useState<Array<PostType>>([
        {id: 1, title: 'JavaScript 1', description: 'Description'},
        {id: 2, title: 'JavaScript 2', description: 'Description'},
        {id: 3, title: 'JavaScript 3', description: 'Description'}
    ])

    const [post, setPost] = useState({title: '', description: ''})

    const deletePost = (id: number) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    const changePostTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: e.currentTarget.value})
    }

    const changePostDesc = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, description: e.currentTarget.value})
    }

    const addPost = () => {
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', description: ''})
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className="App">
            <form onSubmit={submitForm}>
                <MyInput type="text" placeholder={'Название поста'} value={post.title} onChange={changePostTitle}/>
                <MyInput type="text" placeholder={'Описание поста'} value={post.description} onChange={changePostDesc}/>
                <MyButton callback={addPost}>Добавить пост</MyButton>
            </form>
            <PostsList post={posts} title={'Посты про JS'} deletePost={deletePost}/>
        </div>
    )
}

export default App;