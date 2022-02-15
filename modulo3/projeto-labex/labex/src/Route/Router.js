import {BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import AdminHome from '../Pages/AdminHomePage'
import ApplyToTrip from '../Pages/ApplicationFormPage'
import CreateTrips from '../Pages/CreateTripPage'
import Home from '../Pages/HomePage'
import ListTrips from '../Pages/ListTripsPage'
import Login from '../Pages/LoginPage'
import TripDetails from '../Pages/TripDetailsPage'

function Rota() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />

                <Route path='/trips' element={<ListTrips />} />

                <Route path='/apply' element={<ApplyToTrip />} />

                <Route path='/login' element={<Login />} />

                <Route path='/admin' element={<AdminHome />} />

                <Route path='/details' element={<TripDetails />} />

                <Route path='/create-trip' element={<CreateTrips />} />

            </Routes>
        </Router>
    )
}

export default Rota;