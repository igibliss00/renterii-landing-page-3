import React from 'react'
import {useTrail, animated} from 'react-spring'

import '../style/Slide.css'

const card = [
    <div className="title">Accesibility</div>,
    <div>
        <p>The app will show their current location so the user enable to find the item needed.</p>
    </div>,
    <div className="title">Experiences</div>,
    <div>
        <p>The app will suggest interesting things to do near the user.</p>
    </div>,
    <div className="title">Affordability</div>,
    <div>
        <p>User will see the list of items they searched. The users are now able to get an item only for the periods of time they need in reasonable price.</p>
    </div>,
]

const config = { mass: 5, tension: 2000, friction: 200, delay: 300, duration : 1000 }

const Slide2 = ({ index }) => {
    const trail = useTrail(card.length, {
        config,
        opacity: index === 2 ? 1 : 0,
        // height: index === 2 ? 30 : 0,
        from: { opacity: 0, },
    })
    
    return (
        <div className='slide' style={{ alignSelf: 'flex-end'}}>
            <header>Our Values</header>
            <div className="line"></div>
            <section>
            {index === 2 && trail.map((props, index) => {
                return (
                    <>
                        <animated.div key={index} style={props} >{card[index]}</animated.div>                
                    </>
                )
            })}
            </section>
        </div>
    )
}

export default Slide2