import React, {FC} from 'react';
import {CommentType} from '../../API/postsAPI';
import styles from './CommentsBlock.module.css'

type PropsType = {
    comments: Array<CommentType>
}

export const CommentsBlock: FC<PropsType> = ({comments}) => {
    return (
        <>
            {comments.map(c =>
                <div key={c.id}>
                    <h4 className={styles.email}>{c.id}. {c.email}</h4>
                    <div className={styles.body}>{c.body}</div>
                </div>
            )}
        </>
    );
};