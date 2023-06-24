import React, {useEffect, useState} from 'react';
import './App.css'
import {PostsList} from './components/PostList';
import {PostForm} from './components/PostForm';
import {PostFilter} from './components/PostFilter';
import {MyModal} from './components/UI/modal/MyModal';
import {MyButton} from './components/UI/button/MyButton';
import {usePosts} from './hooks/usePost';
import {postsAPI, PostType} from './API/postsAPI';
import {Loader} from './components/UI/loader/Loader';
import {useFetching} from './hooks/useFetching';
import {getPagesCount} from './utils/pages';
import {Pagination} from './components/UI/pagination/Pagination';

export type FilterType = {
    sort: string
    query: string
}

function App() {

    const [posts, setPosts] = useState<Array<PostType>>([])
    const [filter, setFilter] = useState<FilterType>({sort: '', query: ''})
    const [isModalActive, setIsModalActive] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await postsAPI.getAllPosts(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

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

    return (
        <div className="App">
            <MyModal isActive={isModalActive} closeModal={closeModal}>
                <PostForm createPost={createPost}/>
            </MyModal>
            <MyButton callback={openModal}>Создать пост</MyButton>
            <hr style={{margin: '20px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter} limit={limit} setLimit={setLimit}/>

            {postError && <h1>Произошла ошибка {postError}</h1>}

            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 40}}><Loader/></div>
                : <PostsList posts={sortedAndSearchedPosts} title={'Посты про JS'} deletePost={deletePost}/>
            }

            <Pagination page={page} changePage={changePage} totalPages={totalPages} limit={limit}/>

        </div>
    )
}

export default App;