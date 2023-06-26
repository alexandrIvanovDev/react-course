import React, {FormEvent, useContext} from 'react';
import {MyButton} from '../components/UI/button/MyButton';
import {MyInput} from '../components/UI/input/MyInput';
import {AuthContext} from '../context/authContext';
import {Navigate} from 'react-router-dom';

export const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    if (isAuth) {
        return <Navigate to={'/posts'}/>
    }

    return (
        <div  style={{width: 400}}>
            <h1>Login</h1>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};