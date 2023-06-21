import React from 'react';
import {PostType} from '../App';
import {MyButton} from './UI/button/MyButton';

type PropsType = {
    post: PostType
    index: number
    deletePost: (id: number) => void
}

export const PostItem: React.FC<PropsType> = ({post, index, deletePost}) => {
    return (
        <div className="post">
            <div className='post-content'>
                <strong>{index + 1}. {post.title}</strong>
                <div>{post.description}</div>
            </div>
            <div className='post-btns'>
                <MyButton callback={() => deletePost(post.id)}>Удалить</MyButton>
            </div>
        </div>
    );
};