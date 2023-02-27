import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Navbar } from '../navbar/Navbar'

export const PrivateRoutes = ({ name, surname, setName, setSurname }) => {

    const newName = localStorage.getItem('name')
    const newSurname = localStorage.getItem('surname')

    useEffect(() => {
        setName(newName)
        setSurname(newSurname)
    }, [name, surname])

    return (
        newName === "username" && newSurname === "123456" ?
            <div>
                <Navbar setName={setName} setSurname={setSurname} />
                <Outlet />
            </div> : <Navigate to="/login" />
    )
}
