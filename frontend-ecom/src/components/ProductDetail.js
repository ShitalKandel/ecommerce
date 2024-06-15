import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function ProductDetail() {
    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4 ">
                    <img src={logo} className="img-thumnail shadow" alt="..." />
                </div>
                <div className="col-8">
                    <h3>Product Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus faucibus lacus vel dui pellentesque, non aliquam nulla volutpat. Ut consectetur lectus eget metus elementum porta. Etiam vulputate malesuada interdum. Quisque.</p>
                    <h5 className="card-title">Price : Rs. 200</h5>
                    <p className='mt-3'>
                        <Link title="Demo" className="btn btn-dark me-1" target='_blank'><i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i> Demo
                        </Link>
                        <button title="Add to cart" className="btn btn-warning "><i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i> Add to Cart
                        </button>
                        <button title="Buy Now" className="btn btn-info ms-1"><i class="fa fa-credit-card" aria-hidden="true"></i> Buy Now
                        </button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-1"><i class="fa-regular fa-heart fa-1x" aria-hidden="true"></i> Wishlist
                        </button>
                    </p>
                    <div className='product tags mt-5'>
                        <h4>Tags</h4>
                        <p>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Redmi</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Oppo</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Samsung</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Apple</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Nokia</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>Geoni</Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Related Products*/}
            <div id="relatedProductSlider" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        1
                    </div>
                    <div className="carousel-item">
                        2
                    </div>
                    <div className="carousel-item">
                        3
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#relatedProductSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* End Related Products*/}

        </section>)
};

export default ProductDetail;