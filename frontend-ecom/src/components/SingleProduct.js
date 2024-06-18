//Package
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

function SingleProduct(props) {
    return (
        <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
                <Link to="product/technology-timer/1"><img src={logo} className="card-img-top" alt="..." />
                </Link>
                <div className="card-body">
                    <h4 className="card-title">
                        <Link to="product/technology-timer/1">{props.product.title}</Link>
                    </h4>
                    <h5 className="card-title text-muted">Price : Rs. {props.product.price }</h5>
                </div>
                <div className="card-footer">
                    <button title="Add to cart" className="btn btn-success btn-sm"><i class="fa fa-shopping-cart fa-1x" aria-hidden="true"></i></button>
                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1"><i class="fa fa-heart fa-1x" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;