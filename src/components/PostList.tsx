import React from 'react';
import {PostType} from '../App';
import {PostItem} from './PostsItem';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

type PropsType = {
    posts: Array<PostType>
    title: string
    deletePost: (id: number) => void
}

export const PostsList: React.FC<PropsType> = ({posts, title, deletePost}) => {

    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map((p, index) => {
                    return (
                        <CSSTransition
                            key={p.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem index={index} post={p} deletePost={deletePost}/>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div>
    );
};