//Package
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";


function AddressList(props) {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className="col-md-3 col-12 mb-2 mt-4">
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link to="/customer/add-address" className="btn btn-outline-success mb-4 float-end"><i className='fa fa-plus-circle'></i>
                             Add Address</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body text-muted">
                                    <h6>
                                        <i className="fa fa-check-cirlce text-success mb-2"></i><br />
                                        Kavresthali-2 , Kathmandu</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body text-muted">
                                    <h6>
                                        <span className="badge bg-dark">Make Default</span>
                                        Kavresthali-2 , Kathmandu</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body text-muted">
                                    <h6>
                                        <span className="badge bg-dark">Make Default</span>
                                        Kavresthali-2 , Kathmandu</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body text-muted">
                                    <h6>
                                        <span className="badge bg-dark">Make Default</span>
                                        Kavresthali-2 , Kathmandu</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card shadow">
                                <div className="card-body text-muted">
                                    <h6>
                                        <span className="badge bg-dark">Make Default</span>
                                        Kavresthali-2 , Kathmandu</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressList;