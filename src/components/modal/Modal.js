import React from 'react';

export default function Modal({ children, setIsOpen }) {


    const ModalStyle = {
        position: 'absolute',
        right: '10%',
        left: '10%',
        top: '20%',
        bottom: '20%',
        backgroundColor: 'white',
        borderRadius: '20px',
        zIndex: '1',
        margin: '0',
        padding: '0'
    }
    const ModalContainerStyle = {
        backgroundColor: "rgba(0,0,0,0.7)",
        position: 'absolute',
        width: "100vw",
        height: "100vh",
        top: '0',
        right: '0',
        zIndex: '2'
    }

    return (
        <div onClick={() => setIsOpen(false)} style={ModalContainerStyle}>
            <div className='modal' onClick={(e) => { e.stopPropagation(); }} style={ModalStyle}>
                {children}
            </div>
        </div>
    );
}


