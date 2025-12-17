import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import VansPage from './pages/Vans/VansPage'
import VanDetail from './pages/Vans/VanDetail'
import HostLayout from './components/HostLayout'
import HostDashboard  from './pages/Host/HostDashboard'
import HostIncome from './pages/Host/HostIncome'
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import HostReviews from './pages/Host/HostReviews'

function App() {
    return ( 
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />

                    <Route path="vans" element={<VansPage />} />
                    <Route path="vans/:id" element={<VanDetail />} />


                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<HostDashboard />} />
                        <Route path="income" element={<HostIncome />} />
                        <Route path="reviews" element={<HostReviews />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVanDetail />}>
                            <Route index element={<HostVanInfo />} />
                            <Route path="pricing" element={<HostVanPricing/>} />
                            <Route path="photos" element={<HostVanPhotos />} />
                        </Route>
                    </Route>    
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default App