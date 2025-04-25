function Navbar() {
    return (
        <nav className="navbar bg-dark navbar-dark">
            <div className="container-fluid d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapsibleNavbar"
                        aria-controls="collapsibleNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav d-flex flex-row">
                        <li className="nav-item ms-3">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link disabled" href="#" aria-disabled="true">Item2</a>
                        </li>
                        <li className="nav-item ms-3">
                            <a className="nav-link disabled" href="#" aria-disabled="true">Item2</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
