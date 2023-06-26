import React, {useEffect, useState} from 'react';
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Pages} from './pages/Posts';
import {About} from './pages/About';
import {Navbar} from './components/UI/navbar/Navbar';
import {NotFoundPage} from './pages/NotFoundPage';
import {PostIdPage} from './pages/PostIdPage';
import {Login} from './pages/Login';
import {AuthContext} from './context/authContext';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navbar/>,
        children: [
            {
                path: 'posts',
                element: <Pages/>
            },
            {
                path: 'posts/:id',
                element: <PostIdPage/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
]);

function App() {

    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <RouterProvider router={router}/>
        </AuthContext.Provider>
    )
}

export default App;