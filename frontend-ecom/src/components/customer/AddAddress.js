//Package
// import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";


function AddAddress(props) {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className="col-md-3 col-12 mb-2 mt-4">
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2 mt-4 bg-'>
                    <div className='row card'>
                    <h4 className="card-header">Add Address</h4>

                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="textarea" class="form-label">Address</label>
                                    <textarea  className="form-control" id="textarea"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAddress;