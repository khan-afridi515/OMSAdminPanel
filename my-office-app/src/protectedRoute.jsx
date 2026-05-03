import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const token = localStorage.getItem("adminToken");

    console.log("my token", token);
    return token ? children : <Navigate to="/login"/>
}

export default ProtectedRoute
