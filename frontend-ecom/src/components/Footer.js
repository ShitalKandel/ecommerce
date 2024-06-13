function Footer() {
    return (

        <footer className="d-flex flex-wrap justify-content-between container align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    Python Ecommerce Platform
                </a>
                <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pt-3 m-5">
                <li className="ms-3"><i className="fa-brands fa-facebook fa-2x"></i></li>
                <li className="ms-3"><i className="fa-brands fa-instagram fa-2x"></i></li>
                <li className="ms-3"><i className="fa-brands fa-google fa-2x"></i></li>
            </ul>
        </footer>
    )
};


export default Footer;