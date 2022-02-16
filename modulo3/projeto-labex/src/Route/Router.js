import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ApplicationFormPage from '../Pages/ApplicationFormPage'
import LoginPage from '../Pages/LoginPage'
import AdminHomePage from '../Pages/AdminHomePage'
import ListTripsPage from '../Pages/ListTripsPage'
import AdminCreateTripPage from '../Pages/AdminCreateTripPage'
import AdminDetailsTripPage from '../Pages/AdminDetailsTripPage'

export default function RouteComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/trips/list' element={<ListTripsPage />} />
                <Route path='/trips/application' element={<ApplicationFormPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/admin/trips/list' element={<AdminHomePage />} />
                <Route path='/admin/trips/create' element={<AdminCreateTripPage />} />
                <Route path='/admin/trips/:id' element={<AdminDetailsTripPage />} />
            </Routes>
        </BrowserRouter>
    )
}