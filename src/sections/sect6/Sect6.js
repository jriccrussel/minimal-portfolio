import proj1 from '../../assets/img/project-one.jpeg'
import proj2 from '../../assets/img/project-two.jpeg'
import proj3 from '../../assets/img/project-three.jpeg'
import proj4 from '../../assets/img/project-four.jpeg'
import proj5 from '../../assets/img/project-five.jpeg'

import { Divider } from '../../components/Divider'

import './Sect6.scss'

const data = [
    {
        id: 1,
        title: "/ Asterisk",
        img: proj1,
        name: "Asterisks",
        technologies: "ReactJS"
    },
    {
        id: 2,
        title: "/ Unlocked",
        img: proj2,
        name: "Unlocked",
        technologies: "Shopify"
    },
    {
        id: 3,
        title: "/ Offbeat Radio",
        img: proj3,
        name: "Offbeat Radio",
        technologies: "GSAP"
    },
    {
        id: 4,
        title: "/ Brutal",
        img: proj4,
        name: "Brutals",
        technologies: "ReactJS"
    },
    {
        id: 5,
        title: "/ The Crew",
        img: proj5,
        name: "The Crews",
        technologies: "Wordpress"
    },
]

const Sect6 = () => {
    return (
        <section className="project">
            <div className="project-container">
                <div>
                    <nav className="menu">
                        {data.map((item, index) => {
                            const { title, img, name, technologies, id } = item
                            
                            return(
                                <div className="menu__item-outer" key={index}>
                                    <div className="menu__item">
                                        <a className="menu__item-link">{title}</a>
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

                                    <div className={`sectDiv${id}`}></div>
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
