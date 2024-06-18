import RetailerSidebar from "./RetailerSidebar";
import { Link } from "react-router-dom";

function RetailerProducts(props) {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className="col-md-3 col-12 mb-2">
                    <RetailerSidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row ">
                        <h3><Link className="btn btn-primary mb-2 float-end" to="/retailer/add-product"><i className="fa fa-plus-circle"></i>
                        Add Product</Link></h3>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Oppo</td>
                                <td>Rs. 500</td>
                                <td>Published</td>
                                <td>
                                    <a href="#" className="btn btn-info">View</a>
                                    <a href="#" className="btn btn-primary ms-1">Edit</a>
                                    <a href="#" className="btn btn-danger ms-1">Delete</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RetailerProducts;