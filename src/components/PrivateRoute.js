import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'



//Wrapper para las rutas

export default function PrivateRoute() {

    const { currentUser } = useAuth()

    return (
        currentUser ? <Outlet/> : <Navigate to='/login'/>
    )
}
