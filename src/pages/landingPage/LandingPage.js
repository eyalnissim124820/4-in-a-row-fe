import React from 'react'
import './LandingPage.css'
import logo from '../../attachments/favicon_io (4)/4inARow 1.svg'
import { useNavigate } from "react-router-dom";


export default function LandingPage() {

    const navigate = useNavigate()
    const toLogin = () => { navigate('/loginPage') }

    return (
        <div className='landingPage-page'>
            <div className='landingPage-header'>
                <img id='logo' src={logo} alt='logo' />
                <div className='welcome-container'>
                    <h6>Welcome to</h6>
                    <h1>Four in a row</h1>
                </div>
            </div>
            <div className='landingPage-footer'>
                {/* <button className='landingPage-buttons'>Play as Guest</button> */}
                <button className='landingPage-buttons' onClick={toLogin}>Play with a Friend!</button>
            </div>
        </div>
    )
}
