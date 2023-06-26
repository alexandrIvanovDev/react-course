import React, {FC} from 'react';
import {PostType} from '../../API/postsAPI';

type PropsType = {
    post: PostType | undefined
}

export const PostIdBlock: FC<PropsType> = ({post}) => {
    return (
        <>
            <h2>Пост ID: {post?.id}</h2>
            <div style={{fontWeight: 'bold', margin: '20px 0px'}}>
                {post?.title}
            </div>
            <div style={{marginBottom: 20}}>
                {post?.body}
            </div>
        </>
    );
};