import logo from "../logo.svg";
import {Link} from 'react-router-dom';


function Categories(){
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
                                <h4 className="card-title"><Link to = "/">Categories Title</Link></h4>
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
                                <h4 className="card-title"><Link to = "/">Categories Title</Link></h4>
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
                                <h4 className="card-title"><Link to = "/">Categories Title</Link></h4>
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
                                <h4 className="card-title"><Link to = "/">Categories Title</Link></h4>
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
                                <h4 className="card-title"><Link to = "/">Categories Title</Link></h4>
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
                                <h4 className="card-title"><Link to = "/">Categories Title</Link></h4>
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
                                <h4 className="card-title"><Link to = "/">Categories Title</Link></h4>
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
                                <h4 className="card-title"><Link to = "/">Categories Title</Link></h4>
                            </div>
                            <div className="card-footer">
                                Product Purchased : 256
                            </div>
                        </div>
                    </div>
                    {/* Category Box End*/}

                </div>
                {/* End Popular Categories */} 
        </section>
    )
};

export default Categories;