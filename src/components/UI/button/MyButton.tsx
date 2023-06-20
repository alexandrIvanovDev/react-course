import React from 'react';
import styles from './MyButton.module.css'

type PropsType = {
    children: string
    callback?: () => void
}

export const MyButton: React.FC<PropsType> = ({children, callback, ...props}) => {
    return (
        <button className={styles.btn} onClick={callback} {...props}>
            {children}
        </button>
    );
};