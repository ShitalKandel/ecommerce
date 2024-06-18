//Package
// import { Link } from 'react-router-dom';
import RetailerSidebar from "./RetailerSidebar";

function AddProduct(props) {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className="col-md-3 col-12 mb-2 mt-4">
                    <RetailerSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2 mt-4 bg-'>
                    <div className='row card'>
                    <h4 className="card-header">Add Product</h4>

                        <div className="card-body">
                            <form>
                            <div className="mb-3">
                                    <label for="Category" class="form-label">Category</label>
                                    <select className="form-control">
                                        <option>Technology</option>
                                        <option>Gadgets</option>
                                        <option>Clothing</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label for="Title" class="form-label">Title</label>
                                    <input type="text" className="form-control" id="Title" />
                                </div>
                                <div className="mb-3">
                                    <label for="Price" className="form-label">Price</label>
                                    <input type="number" className="form-control" id="Price" />
                                </div>
                                <div className="mb-3">
                                    <label for="Description" class="form-label">Description</label>
                                    <textarea className="form-control" id="Description" rows="8"></textarea> 
                                </div>
                                <div className="mb-3">
                                    <label for="productFile" className="form-label">Product Image</label>
                                    <input class="form-control" type="file" id="productFile" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;