import React from 'react';
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Pages} from './pages/Posts';
import {About} from './pages/About';
import {Navbar} from './components/UI/navbar/Navbar';
import {NotFoundPage} from './pages/NotFoundPage';
import {PostIdPage} from './pages/PostIdPage';

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
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
]);

function App() {
    return <RouterProvider router={router}/>
}

export default App;