import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
const App = () => {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<h1>Page not found</h1>} />



            </Routes>

        </div>
    )
}

export default App