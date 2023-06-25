import React from 'react';
import {MyButton} from '../components/UI/button/MyButton';
import {useNavigate} from 'react-router-dom';

export const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>404: Page not found</h1>
            <MyButton callback={() => navigate('/')}>Назад</MyButton>
        </div>
    )
}