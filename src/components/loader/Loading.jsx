import React from 'react'
import loadingGif from '../../assets/loader.gif'

export const Loading = () => {
    return (
        <img className='spinner' src={loadingGif} width="150px" height="150px" />
    )
}
