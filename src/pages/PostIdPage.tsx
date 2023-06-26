import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {MyButton} from '../components/UI/button/MyButton';
import {CommentType, postsAPI, PostType} from '../API/postsAPI';
import {Loader} from '../components/UI/loader/Loader';
import {useFetching} from '../hooks/useFetching';
import {CommentsBlock} from '../components/commentsBlock/CommentsBlock';
import {PostIdBlock} from '../components/PostIdBlock/PostIdBlock';

export const PostIdPage = () => {

    const [post, setPost] = useState<PostType>()
    const [comments, setComments] = useState<Array<CommentType>>([])

    const {id} = useParams()
    const navigate = useNavigate()

    const [getPost, isLoading, error] = useFetching(async () => {
        if (id) {
            const post = await postsAPI.getPost(+id)
            setPost(post)
        }
    })

    const [getComments, isCommentsLoading, commentsError] = useFetching(async () => {
        if (id) {
            const comments = await postsAPI.getCommentsForPost(+id)
            setComments(comments)
        }
    })

    useEffect(() => {
        getPost()
        getComments()
    }, [])

    return (
        <div>
            {error && <div>Error: {error}</div>}
            {isLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 40}}><Loader/></div>
                : <div>
                    <PostIdBlock post={post}/>
                    <h2>Комментарии</h2>
                    {commentsError && <div>Error: {commentsError}</div>}
                    <CommentsBlock comments={comments}/>
                    <MyButton callback={() => navigate(-1)}>Назад</MyButton>
                </div>
            }
        </div>
    )
}