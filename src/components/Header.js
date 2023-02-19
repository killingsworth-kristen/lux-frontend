import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Header.css'

// import components
import Tab from './Tab'

export default function Header () {
    const navigate = useNavigate()
    return (
        <>
        <section className='header-container'>
            <h1 className='title'>Lux</h1>
            <nav className='nav-container'>
                <h3 className='nav-tab' onClick={()=>navigate('/')}>Home</h3>
                <h3 className='nav-tab'>Import</h3>
                <h3 className='nav-tab'>Export</h3>
            </nav>
        </section>
        <section className='fake-tabs-container'>
            <Tab />
            <Tab />
            <Tab />
            <Tab />
            <Tab />
        </section>
        </>
    )
}