import React from 'react'
import {useTrail, animated} from 'react-spring'

import '../style/Slide.css'

const card = [
    <section>We help local businesses + Individual's reach more customers to rent their items too. What has not been traditionally accessible for individuals + notfeasible for local shops; The platform now gives the rentee direct access tothousands of renter in their region at no cost.</section>,    
]

const config = { mass: 5, tension: 2000, friction: 200, delay: 300, duration : 1000 }

const Slide3 = ({ index }) => {
    const trail = useTrail(card.length, {
        config,
        opacity: index === 3 ? 1 : 0,
        height: index === 3 ? 30 : 0,
        from: { opacity: 0, height: 0 },
    })
    
    return (
        <div className='slide' style={{ alignSelf: 'flex-start'}}>
            <header>How Rentees Win</header>
            <div className="line"></div>
            {index === 3 && trail.map((props, index) => {
                return (
                    <>
                        <animated.div key={index} style={props} >{card[index]}</animated.div>                
                    </>
                )
            })}
        </div>
    )
}

export default Slide3