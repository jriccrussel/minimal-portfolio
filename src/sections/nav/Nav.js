import './Nav.scss'

const Nav = () => {
    
    const yr = new Date()
    const year = yr.getFullYear()

    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="site-title">by Jeffone Audric Russel</div>
                <div className="site-type">folio</div>
                <div className="site-year">{year}</div>
            </div>
        </div>
    )
}

export default Nav
