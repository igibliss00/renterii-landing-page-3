import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'

import '../style/Gallery.css'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Slide4 from './Slide4'
import Logo from './Logo'

const Gallery = () => {
    const [index, set] = useState(0)

    const pages = [
        ({ style }) => 
            <animated.div className="gallery" style={{ ...style, background: 'rgba(201, 160,153, 0)' }}>
                <Logo index={index} />
            </animated.div>,    
        ({ style }) => 
            <animated.div className="gallery" style={{ ...style, background: 'rgba(201, 160,153, 0)' }}>
                <Slide1 index={index} />
            </animated.div>,
        ({ style }) =>         
            <animated.div className="gallery" style={{ ...style, background: 'rgba(201, 160,153, 0)' }}>
                <Slide2 index={index} />
            </animated.div>,
        ({ style }) =>
             <animated.div className="gallery" style={{ ...style, background: 'rgba(201, 160,153, 0)' }}>
                <Slide3 index={index} />
             </animated.div>,
        ({ style }) =>
             <animated.div className="gallery" style={{ ...style, background: 'rgba(201, 160,153, 0)' }}>
                <Slide4 index={index} />
             </animated.div>,
    ]

    const transitions = useTransition(index, p => p, {
        from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
        enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(0,-50%,0)' },
        config: {
            duration: 300,
            delay: 300,
            tension: 1000,
            // velocity: 1000,
        }

    })

    useEffect(() => void setInterval(() => set(state => (state + 1) % 5), 2000), [])
    
    return (
        <div style={{ width: '100vw', height: '100vh'}} >
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item]
                return <Page  key={key} style={props} />
            })}
        </div>
    )
}

export default Gallery