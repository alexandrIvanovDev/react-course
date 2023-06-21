import React, {FC, ReactNode} from 'react';
import styles from './MyModal.module.css'

type PropsType = {
    children: ReactNode
    isActive: boolean
    closeModal: () => void
}

export const MyModal: FC<PropsType> = ({children, isActive, closeModal}) => {
    return (
        <div className={!isActive ? styles.modal : `${styles.modal} ${styles.active}`} onClick={closeModal}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};