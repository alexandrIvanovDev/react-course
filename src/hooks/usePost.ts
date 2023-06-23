import {useMemo} from 'react';
import {PostType} from '../App';

export const useSortedPosts = (posts: Array<PostType>, sort: string) => {
    return useMemo(() => {
        if (sort) {
            debugger
            return [...posts].sort((a: any, b: any) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [posts, sort])
}

export const usePosts = (posts: Array<PostType>, sort: string, query: string) => {
    const sortedPosts: Array<PostType> = useSortedPosts(posts, sort)

    return useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(query))
    }, [sortedPosts, query])
}