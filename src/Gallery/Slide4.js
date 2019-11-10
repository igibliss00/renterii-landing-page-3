import React from 'react'
import {useTrail, animated} from 'react-spring'

import '../style/Slide.css'

const card = [
    <section>First + foremost, our platform is to help individuals (renters) gain accessibilityto items + experiences wherever they are located. What has traditionally been a chaotic, multi-step process is easier with a unified platform + a rosterof reputable rentees all at your finger tip.</section>
]
const config = { mass: 5, tension: 2000, friction: 200, delay: 300, duration : 1000 }

const Slide4 = ({ index }) => {
    const trail = useTrail(card.length, {
        config,
        opacity: index === 4 ? 1 : 0,
        height: index === 4 ? 30 : 0,
        from: { opacity: 0, height: 0 },
    })

    return (
        <div className='slide' style={{ alignSelf: 'flex-end'}}>
            <header>How Renters Win</header>
            <div className="line"></div>
            {index === 4 && trail.map((props, index) => {
                return (
                    <>
                        <animated.div key={index} style={props} >{card[index]}</animated.div>                
                    </>
                )
            })}
        </div>
    )
}

export default Slide4