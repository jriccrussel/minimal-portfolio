import gsap from 'gsap'
import { TimelineLite } from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import './Nav.scss'

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals('ScrollTrigger', ScrollTrigger)

const Nav = () => {
    
    const yr = new Date()
    const year = yr.getFullYear()

    useEffect(() => {
        gsap.from(".site-nav", 1, {
            y: 10,
            autoAlpha: 0,
            ease: "power3.inOut",
            stagger: 0.1,  
        })

        // let tl = new TimelineLite({delay:1})
        
        gsap.from(".div1", 1, {
            scaleX: 0,
            autoAlpha: 0,
            ease: "power3.inOut",
            transformOrigin:"left",
            stagger: 0.1,  
        })
    }, [])

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="site-nav site-title">by Jeffone Audric Russel</div>
                <div className="site-nav site-type">folio</div>
                <div className="site-nav site-year">{year}</div>
            </div>
            
            <div className="div1"></div>
        </div>
    )
}

export default Nav
