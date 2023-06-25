import React from 'react';
import './App.css'
import {Route, Routes} from 'react-router-dom';
import {Pages} from './pages/Posts';
import {About} from './pages/About';
import {Navbar} from './components/UI/navbar/Navbar';
import {NotFoundPage} from './pages/NotFoundPage';

function App() {
    return (
        <div className='app'>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Pages/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )
}

export default App;