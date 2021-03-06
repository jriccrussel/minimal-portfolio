import gsap from 'gsap'
import { TimelineLite } from 'gsap/gsap-core'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Scrollbar from "smooth-scrollbar"
import { TweenMax } from 'gsap/gsap-core'
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { useEffect } from 'react'
import anime from 'animejs'
import './Sect1.scss'

gsap.registerPlugin(ScrollTrigger)

const Sect1 = () => {
    useEffect(() => {
        // gsap.registerPlugin(ScrollTrigger)
        // let heroTxtOne = document.querySelector('.t1')
        // heroTxtOne.innerHTML = heroTxtOne.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        // let heroTxtTwo = document.querySelector('.t2')
        // heroTxtTwo.innerHTML = heroTxtTwo.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        // let heroTxtTri = document.querySelector('.t3')
        // heroTxtTri.innerHTML = heroTxtTri.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        // let heroTxtFour = document.querySelector('.t4')
        // heroTxtFour.innerHTML = heroTxtFour.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        // gsap.from(heroTxtOne, {
        //     duration: 0.5,
        //     opacity: 0,
        //     autoAlpha: 0,
        //     yPercent: 0,
        //     ease: "power4.inOut",
        //     stagger: 0.5,
        //     scrollTrigger: {
        //         trigger: '.header',
        //         start: 'top center-=20%',
        //         scrub: true,
        //     }
        // }, 1)

        // gsap.from(heroTxtTwo, {
        //     duration: 0.7,
        //     opacity: 0,
        //     autoAlpha: 0,
        //     yPercent: 0,
        //     ease: "power4.inOut",
        //     stagger: 0.7,
        //     scrollTrigger: {
        //         trigger: '.header',
        //         start: 'top',
        //         scrub: true,
        //     }
        // }, 1.2)

        // gsap.from(heroTxtTri, {
        //     duration: 0.9,
        //     opacity: 0,
        //     autoAlpha: 0,
        //     yPercent: 0,
        //     ease: "power4.inOut",
        //     stagger: 0.9,
        //     scrollTrigger: {
        //         trigger: '.header',
        //         start: 'top',
        //         scrub: true,
        //     }
        // }, 1.3)

        // gsap.from(heroTxtFour, {
        //     duration: 1.1,
        //     opacity: 0,
        //     autoAlpha: 0,
        //     yPercent: 0,
        //     ease: "power4.inOut",
        //     stagger: 1.1,
        //     scrollTrigger: {
        //         trigger: '.header',
        //         start: 'top',
        //         scrub: true,
        //     }
        // }, 1.5)

        // let tl = new TimelineLite({delay:0.5})
        
        // tl.from(".div2", 1, {
        //     scaleX: 0,
        //     transformOrigin:"left",
        //     scrollTrigger: {
        //         trigger: '.header',
        //         start: 'top',
        //         scrub: true,
        //     }
        // })
        let heroTxtOne = document.querySelector('.t1')
        heroTxtOne.innerHTML = heroTxtOne.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        let heroTxtTwo = document.querySelector('.t2')
        heroTxtTwo.innerHTML = heroTxtTwo.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        let heroTxtTri = document.querySelector('.t3')
        heroTxtTri.innerHTML = heroTxtTri.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        let heroTxtFour = document.querySelector('.t4')
        heroTxtFour.innerHTML = heroTxtFour.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        anime.timeline().add({
            targets: [".t1 .letter", ".t2 .letter", ".t3 .letter", ".t4 .letter"],
            translateY: [60, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 1200 + 30 * i,
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
