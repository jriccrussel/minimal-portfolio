import proj1 from '../../assets/img/project-one.jpeg'
import proj2 from '../../assets/img/project-two.jpeg'
import proj3 from '../../assets/img/project-three.jpeg'
import proj4 from '../../assets/img/project-four.jpeg'
import proj5 from '../../assets/img/project-five.jpeg'

import prj1 from '../../assets/img/prj1.png'
import prj2 from '../../assets/img/prj2.png'
import prj3 from '../../assets/img/prj3.png'
import prj4 from '../../assets/img/prj4.png'
import prj5 from '../../assets/img/prj5.png'
import prj6 from '../../assets/img/prj6.png'
import prj7 from '../../assets/img/prj7.png'
import prj8 from '../../assets/img/prj8.png'
import prj9 from '../../assets/img/prj9.png'
import prj10 from '../../assets/img/prj10.png'
import prj11 from '../../assets/img/prj11.png'
import prj12 from '../../assets/img/prj12.png'
import prj13 from '../../assets/img/prj13.png'
import prj14 from '../../assets/img/prj14.png'

import { Divider } from '../../components/Divider'

import './Sect6.scss'

const data = [
    {
        id: 1,
        title: "/ Cows Crown",
        link: "/https://k-syu.com/cowscrown/index.html",
        img: prj1,
        name: "Cows Crown",
    },
    {
        id: 2,
        title: "/ Mizu Shinkyu",
        link: "https://mizu-shinkyu.com/",
        img: prj2,
        name: "Mizu Shinkyu",
    },
    {
        id: 3,
        title: "/ Hermano",
        link: "https://hermano.co.jp/",
        img: prj3,
        name: "Hermano",
    },
    {
        id: 4,
        title: "/ Morita Auto",
        link: "https://www.morita-auto.co.jp/",
        img: prj4,
        name: "Morita Auto",
    },
    {
        id: 5,
        title: "/ Horita",
        link: "https://www.e-horita.co.jp/",
        img: prj5,
        name: "Horita",
    },
    {
        id: 6,
        title: "/ Bukkaketei",
        link: "https://bukkaketei.com/",
        img: prj6,
        name: "Bukkaketeis",
    },
    {
        id: 7,
        title: "/ Sinkyuseikotsu",
        link: "https://y-sinkyuseikotsu.com/",
        img: prj7,
        name: "Sinkyuseikotsu",
    },
    {
        id: 8,
        title: "/ Mystique",
        link: "http://mystique-group.co.jp/",
        img: prj8,
        name: "Mystique",
    },
    {
        id: 9,
        title: "/ Reunir Gracias",
        link: "https://reunirgracias.iot-mansion.jp/",
        img: prj9,
        name: "Reunir Gracias",
    },
    {
        id: 10,
        title: "/ Suma Biz",
        link: "http://www.suma-biz.com/",
        img: prj10,
        name: "Suma Biz",
    },
    {
        id: 11,
        title: "/ Kimono Houmi",
        link: "https://kimono-houmi.com/",
        img: prj11,
        name: "Kimono Houmi",
    },
    {
        id: 12,
        title: "/ Dakishimeru",
        link: "https://july1st.tokyo/dakishimeru/",
        img: prj12,
        name: "Dakishimerus",
    },
    {
        id: 13,
        title: "/ Osaka Fugetsu",
        link: "https://osaka-fugetsu.com/",
        img: prj13,
        name: "Osaka Fugetsu",
    },
    {
        id: 14,
        title: "/ Pure Bella Vita",
        link: "https://purebellavita.com/",
        img: prj14,
        name: "Pure Bella Vita",
    },
]

const Sect6 = () => {
    return (
        <section className="project">
            <div className="project-container">
                <div>
                    <nav className="menu">
                        {data.map((item, index) => {
                            const { title, img, name, technologies, id, link } = item
                            
                            return(
                                <div className="menu__item-outer" key={index}>
                                    <div className="menu__item">
                                        <a className="menu__item-link" href={link} target="_blank">{title}</a>
                                        {/* <p className="tech">{technologies}</p> */}
                                        <img className="menu__item-img" src={img} alt="" />
                                        <div className="marquee">
                                            <div className="marquee__inner">
                                               <span>{name}</span>
                                               <span>{name}</span>
                                               <span>{name}</span>
                                               <span>{name}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`sect-div sectDiv${id}`}></div>
                                </div>
                            )
                        })}

                        {/* <div className="menu__item">
                            <a className="menu__item-link">/ Asterisk</a>
                            <img src={proj1} alt="" />
                            <div className="marquee">
                                <div className="marquee__inner">
                                    {Array(4).fill(null).map((_, i) => {
                                        return <span>Asterisks</span>
                                    })}
                                </div>
                            </div>
                        </div>

                        <Divider />

                        <div className="menu__item">
                            <a className="menu__item-link">/ Unlocked</a>
                            <img src={proj2} alt="" />
                            <div className="marquee">
                                <div className="marquee__inner">
                                    {Array(4).fill(null).map((_, i) => {
                                        return <span>Unlocked</span>
                                    })}
                                </div>
                            </div>
                        </div>

                        <Divider />

                        <div className="menu__item">
                            <a className="menu__item-link">/ Offbeat Radio</a>
                            <img src={proj3} alt="" />
                            <div className="marquee">
                                <div className="marquee__inner">
                                    {Array(4).fill(null).map((_, i) => {
                                        return <span>Offbeat Radio</span>
                                    })}
                                </div>
                            </div>
                        </div>

                        <Divider />

                        <div className="menu__item">
                            <a className="menu__item-link">/ Brutal</a>
                            <img src={proj4} alt="" />
                            <div className="marquee">
                                <div className="marquee__inner">
                                    {Array.from({length:4}, (_, index) => (<span key={index}>Brutal</span>))}
                                </div>
                            </div>
                        </div>

                        <Divider />

                        <div className="menu__item">
                            <a className="menu__item-link">/ The Crew</a>
                            <img src={proj5} alt="" />
                            <div className="marquee">
                                <div className="marquee__inner">
                                    {Array.from({length:4}, (_, index) => (<span key={index}>The Crew</span>))}
                                </div>
                            </div>
                        </div> */}

                    </nav>
                </div>
            </div>
        </section>
    )
}

export default Sect6
