import React from 'react'
import {useTrail, animated} from 'react-spring'

import '../style/Slide.css'

const card = [
    <section>
        <p>Bringing the world accessible items, and new experiences - rent anything, anywhere!</p>
    </section>,
]

const config = { mass: 5, tension: 2000, friction: 200, delay: 300, duration : 1000 }

const Slide1 = ({ index }) => {
    const trail = useTrail(card.length, {
        config,
        opacity: index === 1 ? 1 : 0,
        // x: index === 1 ? 0 : 20,
        height: index === 1 ? 30 : 0,
        from: { opacity: 0, height: 0 },
    })
    
    return (
        <div className='slide' style={{ alignSelf: 'flex-start'}}>
            {index === 1 && trail.map((props, index) => {
                return (
                    <>
                        <header>Our Mission</header>  
                        <div className="line"></div>                        
                        <animated.div key={index} style={props} >{card[index]}</animated.div>
                    </>
                )
            })}
        </div>
    )
}

export default React.memo(Slide1)

// <div className='slide' style={{ alignSelf: 'flex-start'}}>
//     <header>Our Mission</header>
//     <div className="line"></div>
//     <animated.section style={props}>
//         <p>Bringing the world accessible items, and new experiences - rent anything, anywhere!</p>
//     </animated.section>
// </div>