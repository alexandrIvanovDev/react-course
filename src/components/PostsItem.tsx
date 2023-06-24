import React from 'react';
import {MyButton} from './UI/button/MyButton';
import {PostType} from '../API/postsAPI';

type PropsType = {
    post: PostType
    deletePost: (id: number) => void
}

export const PostItem: React.FC<PropsType> = ({post, deletePost}) => {
    return (
        <div className="post">
            <div className='post-content'>
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className='post-btns'>
                <MyButton callback={() => deletePost(post.id)}>Удалить</MyButton>
            </div>
        </div>
    );
};