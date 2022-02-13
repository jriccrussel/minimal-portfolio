import { useEffect, useState, useRef } from "react";
// import LocomotiveScroll from 'locomotive-scroll'
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// import 'locomotive-scroll/src/locomotive-scroll.scss'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import { TweenMax } from "gsap/gsap-core";
import ScrollToPlugin from "gsap/ScrollToPlugin";
// import { ScrollToPlugin } from 'gsap/all'
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

// import {Scrollbar} from 'smooth-scrollbar-react'

// Components
import Cursor from "../components/Cursor";
import { Divider } from "../components/Divider";
import { Spacing } from "../components/Spacing";

// Sections
import Nav from "./nav/Nav";
import Sect1 from "./sect1/Sect1";
import Sect2 from "./sect2/Sect2";
import Sect3 from "./sect3/Sect3";
import Sect4 from "./sect4/Sect4";
import Sect5 from "./sect5/Sect5";
import Sect6 from "./sect6/Sect6";
import Sect7 from "./sect7/Sect7";
import Sect8 from "./sect8/Sect8";
import Sect9 from "./sect9/Sect9";
import Sect10 from "./sect10/Sect10";
import Footer from "./footer/Footer";
import Skills from "./skills/Skills";
import SkillsHeader from "./skills/SkillsHeader";

// gsap.registerPlugin(ScrollTrigger)
// gsap.core.globals('ScrollTrigger', ScrollTrigger)

const Index1 = () => {
  const [scrollBarCreated, setScrollBarCreated] = useState(false);
  const scroller = useRef();
  const bodyScrollBar = useRef();

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
    gsap.registerPlugin(ScrollTrigger)

    const scroller = document.querySelector(".wrapper")

    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1,
      delegateTo: document,
      alwaysShowTracks: true,
    })

    bodyScrollBar.track.xAxis.element.remove()

    ScrollTrigger.scrollerProxy("body", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value
        }
        return bodyScrollBar.scrollTop
      },
    })

    bodyScrollBar.addListener(ScrollTrigger.update)

    ScrollTrigger.defaults({ scroller: scroller })
  }, [])

  return (
    <>
      <Cursor />
      {/* <LocomotiveScrollProvider
                options={
                    {
                        smooth: true,
                        smoothMobile: true,
                        inertia: 0.75,
                    }
                }
            >
                <main data-scroll-container ref={ref}>
                    <div className="wrapper">
                        <div className="container">
                            <Nav />
                            <Sect1 />
                            <Sect2 />
                            <Spacing />
                            <Sect3 />
                            <div className="div2"></div>
                            <Sect4 />
                            <Spacing />
                            <Sect5/>
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
                </main>
            </LocomotiveScrollProvider> */}

      {/* <Scrollbar
                damping={0.07}
                plugins={{
                    overscroll: {
                        effect: "glow",
                        glowColor: '#fff'
                    },
                }
            }>
                <div id="viewport">
                    <main>
                        <div className="wrapper">
                            <div className="container">
                                <Nav />
                                <Sect1 />
                                <Sect2 />
                                <Spacing />
                                <Sect3 />
                                <div className="div2"></div>
                                <Sect4 />
                                <Spacing />
                                <Sect5/>
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
                    </main>
                </div>
            </Scrollbar> */}

      <div className="wrapper scroller" data-scrollbar>
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
  );
};

export default Index1;
