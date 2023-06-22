import React, {ChangeEvent, FormEvent, useState} from 'react';
import {MyInput} from './UI/input/MyInput';
import {MyButton} from './UI/button/MyButton';
import {PostType} from '../App';

type PropsType = {
    createPost: (post: PostType) => void
}

export const PostForm: React.FC<PropsType> = ({createPost}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const changePostTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: e.currentTarget.value})
    }

    const changePostDesc = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, body: e.currentTarget.value})
    }

    const addPost = () => {
        const newPost: PostType = {...post, id: Date.now()}
        createPost(newPost)
        setPost({title: '', body: ''})
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={submitForm}>
            <MyInput type="text" placeholder={'Название поста'} value={post.title} onChange={changePostTitle}/>
            <MyInput type="text" placeholder={'Описание поста'} value={post.body} onChange={changePostDesc}/>
            <MyButton callback={addPost}>Добавить пост</MyButton>
        </form>
    );
};