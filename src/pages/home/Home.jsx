import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='home_items'>
            <Link to={`/products`}>All fruits list</Link>
            <Link to={`/vagetables`}>All Vegetables list</Link>
        </div>
    )
}
