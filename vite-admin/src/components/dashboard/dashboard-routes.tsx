import { Route, Routes } from "react-router"
import Dashboard from "../pages/Dashboard"
import Courses from "../pages/Courses"
import Help from "../pages/Help"
import Users from "../pages/Users"
import Contact from "../pages/Contact"

export const DashboardRoutes  =()=>{
    return <Routes>
        <Route path="/courses" element={<Courses/>} />
        <Route path="/user" element={<Users/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<Dashboard/>} />
    </Routes>
}