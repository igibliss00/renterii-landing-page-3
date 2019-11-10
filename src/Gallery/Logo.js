import React from 'react'

import '../style/Logo.css'

const Logo = () => {

    return (
        <div className="logo">
            <img 
                src={require('../media/Renterii_logo_type_w.png')} 
                alt="renterii logo"
                className="renterii-logo"
            />
        </div>
    )
}

export default Logo