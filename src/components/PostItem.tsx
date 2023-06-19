import React from 'react';
import {PostType} from '../App';
import {PostItem} from './PostsList';

type PropsType = {
    post: Array<PostType>
    title: string
    deletePost: (id: number) => void
}

export const PostsList: React.FC<PropsType> = ({post, title, deletePost}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {post.map(p => {
                return <PostItem key={p.id} post={p} deletePost={deletePost}/>
            })}
        </div>
    );
};