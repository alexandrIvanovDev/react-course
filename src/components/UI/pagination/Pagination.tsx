import React, {FC, useMemo} from 'react';
import styles from './Pagination.module.css'
import {getPagesArray} from '../../../utils/pages';

type PropsType = {
    page: number
    changePage: (page: number) => void
    totalPages: number
    limit: number
}

export const Pagination: FC<PropsType> = ({page, changePage, totalPages, limit}) => {

    const pagesArray = useMemo(() => {
        console.log('useMemo')
        return getPagesArray(totalPages)
    }, [limit, totalPages])

    return (
        <div className={styles.wrapper}>
            {pagesArray.map(p =>
                <span key={p}
                      className={page === p ? `${styles.page} ${styles.active}` : styles.page}
                      onClick={() => changePage(p)}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};