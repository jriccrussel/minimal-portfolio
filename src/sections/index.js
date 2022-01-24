import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/src/locomotive-scroll.scss'

// Components
import Cursor from '../components/Cursor'
import { Divider } from '../components/Divider'
import { Spacing } from '../components/Spacing'

// Sections
import Nav from './nav/Nav'
import Sect1 from './sect1/Sect1'
import Sect2 from './sect2/Sect2'
import Sect3 from './sect3/Sect3'
import Sect4 from './sect4/Sect4'
import Sect5 from './sect5/Sect5'
import Sect6 from './sect6/Sect6'
import Sect7 from './sect7/Sect7'
import Sect8 from './sect8/Sect8'
import Sect9 from './sect9/Sect9'
import Sect10 from './sect10/Sect10'
import Footer from './footer/Footer'

const Index1 = () => {
    const ref = useRef(null)

    // useEffect(() => {
    //     const scroll = new LocomotiveScroll({
    //         el: ref.current,
    //         smooth: true,
    //         smoothMobile: true,
    //         inertia: 0.75,
    //     })
    //     console.log(scroll)
    // }, [])

    return (
        // <main ref={ref}>
        //     <Sect1 />
        // </main>


        <>
            <Cursor />
            <LocomotiveScrollProvider
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
                            <div className="div1"></div>
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
                            <Sect7 />
                            <div className="div4"></div>
                            <Sect8 />
                            <Spacing />
                            <Sect9 />
                            <div className="div5"></div>
                            <Sect10 />
                            <div className="div6"></div>
                            <Footer />
                            <br />
                        </div>
                    </div>
                </main>
            </LocomotiveScrollProvider>
        </>
    )
}

export default Index1


