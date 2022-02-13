import './Sect10.scss'

const data = [
    {
        id: 1,
        name: "dribble",
        link: "https://dribbble.com/jriccrussel",
    },
    {
        id: 2,
        name: "behance",
        link: "https://www.behance.net/jriccrusse99c1",
    },
    {
        id: 3,
        name: "github",
        link: "https://github.com/jriccrussel",
    },
    {
        id: 4,
        name: "linkedin",
        link: "https://ph.linkedin.com/in/jeffone-audric-russel-826208119",
    },
]

const Sect10 = () => {
    return (
        <section className="socials">
            <div className="socials-container">
                {data.map((item, i) => {
                    const {id, name, link} = item
                    return (
                        <>
                            <div className="socials-id dr" key={item.id}>
                                <a href={link} target="_blank">{name}</a>
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    )
}

export default Sect10
