import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Logo from '../../assets/logo.png'

export const Navbar = ({ setName, setSurname }) => {
    const navigate = useNavigate()

    const logout = () => {
        navigate('/login', {
            replace: true
        })
        setName('')
        setSurname('')
        localStorage.clear();
        toast.info('You logged in!')
    }

    const toHome = () => {
        navigate('/')
    }

    return (
        <nav>
            <div>
                <img onClick={toHome} src={Logo} className="nav__logo" />
            </div>
            <div className='nav__items'>
                <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/products">Fruits</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : ''} to="/vagetables">Vegetables</NavLink>
            </div>
            <div className='nav__avatar'>
                <button className='logout' onClick={logout}>Logout</button>
            </div>
        </nav>
    )
}
