import { useEffect, useState, useRef } from "react"
// import LocomotiveScroll from 'locomotive-scroll'
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// import 'locomotive-scroll/src/locomotive-scroll.scss'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { TimelineLite } from 'gsap/gsap-core'
import Scrollbar from "smooth-scrollbar"
import { TweenMax } from "gsap/gsap-core"
// import { ScrollToPlugin } from 'gsap/all'
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll"

// import {Scrollbar} from 'smooth-scrollbar-react'

// Components
import Cursor from "../components/Cursor"
import { Divider } from "../components/Divider"
import { Spacing } from "../components/Spacing"

// Sections
import Nav from "./nav/Nav"
import Sect1 from "./sect1/Sect1"
import Sect2 from "./sect2/Sect2"
import Sect3 from "./sect3/Sect3"
import Sect4 from "./sect4/Sect4"
import Sect5 from "./sect5/Sect5"
import Sect6 from "./sect6/Sect6"
import Sect7 from "./sect7/Sect7"
import Sect8 from "./sect8/Sect8"
import Sect9 from "./sect9/Sect9"
import Sect10 from "./sect10/Sect10"
import Footer from "./footer/Footer"
import Skills from "./skills/Skills"
import SkillsHeader from "./skills/SkillsHeader"

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
// gsap.core.globals('ScrollTrigger', ScrollTrigger)

const Index1 = () => {
  const [scrollBarCreated, setScrollBarCreated] = useState(false)
  const box = useRef(null)
  const bodyScrollBar = useRef()

//   useEffect(() => {
//       document.title = "Welcome Guest, I'm Jeffone Audric Russel and I'm a Front-End Developer"
//       scroller.current = document.querySelector(".wrapper")
//       bodyScrollBar.current = Scrollbar.init(scroller.current)
//       setScrollBarCreated(true)
//   }, [])

//   useEffect(() => {
//       if (scrollBarCreated) {
//           gsap.registerPlugin(ScrollTrigger)
//           ScrollTrigger.scrollerProxy(scroller.current, {
//               scrollTop(value) {
//               if (arguments.length) {
//                   bodyScrollBar.current.scrollTop = value
//               }
//               return bodyScrollBar.current.scrollTop
//               }
//           })
//           bodyScrollBar.current.addListener(ScrollTrigger.update)
//           ScrollTrigger.defaults({ scroller: scroller.current })
//       }
//   }, [scrollBarCreated])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, OverscrollPlugin)

    Scrollbar.use(OverscrollPlugin)

    Scrollbar.init(document.querySelector('.wrapper'), {
        plugins: {
            overscroll: {
                effect: "glow",
                glowColor: '#fff'
            },
        },
    })   

    const bodyScrollBar = Scrollbar.init(box.current)

    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value
        }
        console.log('test')
        return bodyScrollBar.scrollTop
      },
    })

    bodyScrollBar.addListener(ScrollTrigger.update)

    let heroTxtOne = document.querySelector('.t1')
    heroTxtOne.innerHTML = heroTxtOne.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

    let heroTxtTwo = document.querySelector('.t2')
    heroTxtTwo.innerHTML = heroTxtTwo.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

    let heroTxtTri = document.querySelector('.t3')
    heroTxtTri.innerHTML = heroTxtTri.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

    let heroTxtFour = document.querySelector('.t4')
    heroTxtFour.innerHTML = heroTxtFour.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

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

    document.title = "Welcome Guest, I'm Jeffone Audric Russel and I'm a Front-End Developer"
  }, [])

  return (
    <>
      <Cursor />
      <div className="wrapper" ref={box} data-scrollbar>
        <div className="container">
          <Nav />
          <Sect1 />
          <Sect2 />
          <Spacing />
          <Sect3 />
          <div className="div2"></div>
          <Sect4 />
          <Spacing />
          <Sect5 />
          <div className="div3"></div>
          <Sect6 />
          <Spacing />
          <Spacing />
          <SkillsHeader />
          <div className="div5"></div>
          <Skills />
          <Spacing />
          <Sect7 />
          <div className="div6"></div>
          <Sect8 />
          <Spacing />
          <Sect9 />
          <div className="div7"></div>
          <Sect10 />
          <div className="div8"></div>
          <Footer />
          <br />
        </div>
      </div>
    </>
  )
}

export default Index1
