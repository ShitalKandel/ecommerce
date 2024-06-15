import logo from "../logo.svg";
import { Link } from 'react-router-dom';


function Categories() {
    return (
        <section className="container mt-3">
            {/* Popular Categories */}
            <h3 className="md-3">All Categories <a href="#" className='float-end btn btn-dark '>View all Categories <i class="fa-solid fa-arrow-right-to-bracket"></i></a></h3>
            <div className="row mb-3">

                {/* Category Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card shadow">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/">Categories Title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Product Purchased : 256
                        </div>
                    </div>
                </div>
                {/* Category Box End*/}

                {/* Category Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card shadow">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/category/technology/1">Gadgets</Link></h4>
                        </div>
                        <div className="card-footer">
                            Product Purchased : 256
                        </div>
                    </div>
                </div>
                {/* Category Box End*/}

                {/* Category Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card shadow">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/">Gadgets</Link></h4>
                        </div>
                        <div className="card-footer">
                            Product Purchased : 256
                        </div>
                    </div>
                </div>
                {/* Category Box End*/}

                {/* Category Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card shadow">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/">Categories Title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Product Purchased : 256
                        </div>
                    </div>
                </div>
                {/* Category Box End*/}

                {/* Category Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card shadow">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/">Categories Title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Product Purchased : 256
                        </div>
                    </div>
                </div>
                {/* Category Box End*/}

                {/* Category Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card shadow">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/">Categories Title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Product Purchased : 256
                        </div>
                    </div>
                </div>
                {/* Category Box End*/}

                {/* Category Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card shadow">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/">Categories Title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Product Purchased : 256
                        </div>
                    </div>
                </div>
                {/* Category Box End*/}

                {/* Category Box */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="card shadow">
                        <img src={logo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/">Categories Title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Product Purchased : 256
                        </div>
                    </div>
                </div>
                {/* Category Box End*/}

            </div>
            {/* End Popular Categories */}

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
};

export default Categories;