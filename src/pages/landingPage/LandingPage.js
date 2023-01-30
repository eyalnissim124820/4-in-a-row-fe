import React from 'react'
import './LandingPage.css'
import logo from '../../attachments/favicon_io (4)/4inARow 1.svg'

export default function LandingPage() {
    return (
        <div className='landingPage-page'>
            <div className='landingPage-header'>
                <img src={logo} alt='logo' />
                <div className='welcome-container'>
                    <h6>Welcome to</h6>
                    <h1>Four in a row</h1>
                </div>
            </div>
            <div className='landingPage-footer'>
            <button>Play as Guest</button>
            <button>Multiplayer</button>
            </div>
        </div>
    )
}
