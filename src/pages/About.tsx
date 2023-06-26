import React, {useContext} from 'react';
import {MyButton} from '../components/UI/button/MyButton';
import {Navigate, useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/authContext';

export const About = () => {

    const navigate = useNavigate()
    const {isAuth} = useContext(AuthContext)

    if (!isAuth) {
        return <Navigate to={'/login'}/>
    }
    return (
        <div>
            <h1>About us</h1>
            <MyButton callback={() => navigate(-1)}>Назад</MyButton>
        </div>
    )
}