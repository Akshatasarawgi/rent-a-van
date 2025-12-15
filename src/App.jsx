import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import VansPage from './pages/VansPage'
import HostPage from './pages/HostPage'


function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="vans" element={<VansPage />} />
               
                    <Route path="host" element={<HostPage />}>
                        <Route index  />
                    </Route>    
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App