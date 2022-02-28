import './Sect2.scss'
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"

import hero from "../../assets/img/hero-image.jpg"
import heroTwo from "../../assets/img/hero-image2.png"
import gsap from 'gsap'
import { useEffect } from 'react'

const Sect2 = () => {

    useEffect(() => {
        // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
        gsap.from(".hero-image-container", 2, {
            yPercent: 100,
            ease: "Power4.inOut",
            stagger: 0.5,  
        })

        gsap.from(".hero-image-container img", 2.5, {
            y: 220,
            yPercent: -100,
            autoAlpha: 0,
            opacity: 0,
            scale: 1.3,
            ease: "Power4.inOut",
            stagger: 0.5,  
            yPercent: 0,
            // scrollTrigger: {
            //     trigger: '.hero-image',
            //     once: true,
            //     start: 'top-=18% center',
            //     end: 'bottom-=70% center',
            //     scrub: true,
            //     markers: true
            // }
        })
    }, [])
    

    return (
        <div className="hero-image">
            <div className="hero-image-container" data-scroll data-scroll-speed="2">
                <img src={heroTwo} alt="" />
            </div>
        </div>
    )
}

export default Sect2
