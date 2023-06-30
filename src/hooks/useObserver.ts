import {RefObject, useEffect, useRef} from 'react';

export const useObserver = (ref: RefObject<HTMLDivElement>, canLoad: boolean, isLoading: boolean, callback: () => void) => {
    const observer = useRef()
    useEffect(() => {
        if (isLoading) return
        if (observer.current) { // @ts-ignore
            observer.current.disconnect()
        }
        let cb = function(entries: any, observer: any) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        // @ts-ignore
        observer.current = new IntersectionObserver(cb);
        // @ts-ignore
        observer.current.observe(ref.current)
    }, [isLoading])
}