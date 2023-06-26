import React, {FC} from 'react';
import {MyButton} from '../UI/button/MyButton';
import {PostType} from '../../API/postsAPI';
import styles from './PostsItem.module.css'
import {useNavigate} from 'react-router-dom';

type PropsType = {
    post: PostType
    deletePost: (id: number) => void
}

export const PostItem: FC<PropsType> = ({post, deletePost}) => {

    const navigate = useNavigate()

    return (
        <div className={styles.post}>
            <div className={styles.postContent}>
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className={styles.postBtns}>
                <MyButton callback={() => navigate(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton callback={() => deletePost(post.id)}>Удалить</MyButton>
            </div>
        </div>
    );
};