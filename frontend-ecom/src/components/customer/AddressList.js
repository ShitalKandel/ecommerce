//Package
// import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";


function AddressList(props) {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className="col-md-3 col-12 mb-2 mt-4">
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2 mt-4 bg-'>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <p>Kavresthali-2 , Kathmandu</p>
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