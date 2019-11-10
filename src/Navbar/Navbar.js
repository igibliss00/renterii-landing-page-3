import React from 'react'
import {useTrail, animated} from 'react-spring'

import '../style/Navbar.css'

const card = [
    'Our Story',
    <img src={require('../media/Renterii_logo_shape_w.png')} className="logo" alt="renterii logo"/>,   
    'Contact'
]

const config = { mass: 5, tension: 2000, friction: 200, delay: 300, duration : 3000 }

const Navbar = () => {
    const trail = useTrail(card.length, {
        config,
        opacity: 1,
        height: 40,
        transform: 'translate3d(0,0,0)',
        from: { opacity: 0, height: 0, transform: 'translate3d(0,-50%,0)' },
    })

    return (
        <div className='navbar'>
            {trail.map((props, index) => {
                return (
                    <>
                        <animated.div 
                            key={index} 
                            style={props}
                        >
                            {card[index]}
                        </animated.div>                
                    </>
                )
            })}
        </div>
    )
}

export default Navbar