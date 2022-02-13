import gsap from 'gsap'
import { TimelineLite } from 'gsap/gsap-core'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
import { TweenMax } from 'gsap/gsap-core'
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { useEffect } from 'react'
import './Sect1.scss'

gsap.registerPlugin(ScrollTrigger)

const Sect1 = () => {
    useEffect(() => {
        let heroTxtOne = document.querySelector('.t1')
        heroTxtOne.innerHTML = heroTxtOne.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        let heroTxtTwo = document.querySelector('.t2')
        heroTxtTwo.innerHTML = heroTxtTwo.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        let heroTxtTri = document.querySelector('.t3')
        heroTxtTri.innerHTML = heroTxtTri.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        let heroTxtFour = document.querySelector('.t4')
        heroTxtFour.innerHTML = heroTxtFour.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        // gsap.from([heroTxtOne, heroTxtTwo, heroTxtTri, heroTxtFour], {
        //     duration: 2,
        //     autoAlpha: 0,
        //     yPercent: 100,
        //     ease: "power4",
        //     stagger: 1
        // })

        // gsap.to([heroTxtOne, heroTxtTwo, heroTxtTri, heroTxtFour], {
        //     duration: 0.5,
        //     opacity: 0,
        //     autoAlpha: 0,
        //     yPercent: 0,
        //     ease: "power4.inOut",
        //     stagger: 0.5,
        //     scrollTrigger: {
        //         trigger: '.header',
        //         start: 'top',
        //         scrub: true,
        //     }
        // })
        // gsap.from('.t1 span', {
        //     duration: 0.5,
        //     autoAlpha: 0,
        //     yPercent: 100,
        //     ease: "power4.inOut",
        //     stagger: 0.5
        // })

        gsap.from(heroTxtOne, {
            duration: 0.5,
            opacity: 0,
            autoAlpha: 0,
            yPercent: 0,
            ease: "power4.inOut",
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.header',
                start: 'top center-=20%',
                scrub: true,
            }
        }, 1)

        gsap.from(heroTxtTwo, {
            duration: 0.7,
            opacity: 0,
            autoAlpha: 0,
            yPercent: 0,
            ease: "power4.inOut",
            stagger: 0.7,
            scrollTrigger: {
                trigger: '.header',
                start: 'top',
                scrub: true,
            }
        }, 1.2)

        gsap.from(heroTxtTri, {
            duration: 0.9,
            opacity: 0,
            autoAlpha: 0,
            yPercent: 0,
            ease: "power4.inOut",
            stagger: 0.9,
            scrollTrigger: {
                trigger: '.header',
                start: 'top',
                scrub: true,
            }
        }, 1.3)

        gsap.from(heroTxtFour, {
            duration: 1.1,
            opacity: 0,
            autoAlpha: 0,
            yPercent: 0,
            ease: "power4.inOut",
            stagger: 1.1,
            scrollTrigger: {
                trigger: '.header',
                start: 'top',
                scrub: true,
            }
        }, 1.5)

        let tl = new TimelineLite({delay:0.5})
        
        tl.from(".div2", 1, {
            scaleX: 0,
            transformOrigin:"left",
            scrollTrigger: {
                trigger: '.header',
                start: 'top',
                scrub: true,
            }
        })

    },[])

    return (
        <div className="header">
            <div className="header-container">
                <h1 className="t1">Jeffone Audric</h1>
                <h1 className="t2">Russel</h1>
                <h1 className="t3">Front-End</h1>
                <h1 className="t4">&nbsp;Developer</h1>
            </div>
            
            {/* <div className="div2"></div> */}
        </div>
    )
}

export default Sect1
