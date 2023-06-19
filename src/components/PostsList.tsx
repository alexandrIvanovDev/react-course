import React from 'react';
import {PostType} from '../App';

type PropsType = {
    post: PostType
    deletePost: (id: number) => void
}

export const PostItem: React.FC<PropsType> = ({post, deletePost}) => {
    return (
        <div className="post" onClick={() => deletePost(post.id)}>
            <div className='post-content'>
                <strong>{post.id}. {post.title}</strong>
                <div>{post.description}</div>
            </div>
            <div className='post-btns'>
                <button>Удалить</button>
            </div>
        </div>
    );
};