import React, {useContext, useEffect, useRef, useState} from 'react';
import '../App.css'
import {postsAPI, PostType} from '../API/postsAPI';
import {useFetching} from '../hooks/useFetching';
import {getPagesCount} from '../utils/pages';
import {usePosts} from '../hooks/usePost';
import {MyModal} from '../components/UI/modal/MyModal';
import {PostForm} from '../components/PostForm';
import {MyButton} from '../components/UI/button/MyButton';
import {PostFilter} from '../components/PostFilter';
import {Loader} from '../components/UI/loader/Loader';
import {PostsList} from '../components/PostList';
import {Pagination} from '../components/UI/pagination/Pagination';
import {AuthContext} from '../context/authContext';
import {Navigate} from 'react-router-dom';
import {useObserver} from '../hooks/useObserver';


export type FilterType = {
    sort: string
    query: string
}

export const Pages = () => {

    const [posts, setPosts] = useState<Array<PostType>>([])
    const [filter, setFilter] = useState<FilterType>({sort: '', query: ''})
    const [isModalActive, setIsModalActive] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const {isAuth} = useContext(AuthContext)
    const lastElement = useRef(null)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await postsAPI.getAllPosts(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1))

    useEffect(() => {
        fetchPosts()
    }, [page, limit])

    const deletePost = (id: number) => setPosts(posts.filter(p => p.id !== id))

    const createPost = (post: PostType) => {
        setPosts([...posts, post])
        closeModal()
    }

    const openModal = () => setIsModalActive(true)

    const closeModal = () => setIsModalActive(false)

    const changePage = (page: number) => {
        setPage(page)
    }

    if (!isAuth) {
        return <Navigate to='/login'/>
    }

    return (
        <div className="posts">
            <MyModal isActive={isModalActive} closeModal={closeModal}>
                <PostForm createPost={createPost}/>
            </MyModal>
            <MyButton callback={openModal}>Создать пост</MyButton>
            <hr style={{margin: '20px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter} limit={limit} setLimit={setLimit}/>

            {postError && <h1>Произошла ошибка {postError}</h1>}

            {isPostsLoading && <div className='loader'><Loader/></div>}
            
            <PostsList posts={sortedAndSearchedPosts} title={'Посты про JS'} deletePost={deletePost}/>

            <Pagination page={page} changePage={changePage} totalPages={totalPages} limit={limit}/>

            <div style={{height: 20}} ref={lastElement}/>
        </div>
    )
}