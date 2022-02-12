import './Sect2.scss'

import hero from "../../assets/img/hero-image.jpg"
import heroTwo from "../../assets/img/hero-image2.png"

const Sect2 = () => {
    return (
        <div className="hero-image">
            <div className="hero-image-container" data-scroll data-scroll-speed="2">
                <img src={heroTwo} alt="" />
            </div>
        </div>
    )
}

export default Sect2
