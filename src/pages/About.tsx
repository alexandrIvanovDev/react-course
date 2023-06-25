import React from 'react';
import {MyButton} from '../components/UI/button/MyButton';
import {useNavigate} from 'react-router-dom';

export const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>About us</h1>
            <MyButton callback={() => navigate(-1)}>Назад</MyButton>
        </div>
    )
}