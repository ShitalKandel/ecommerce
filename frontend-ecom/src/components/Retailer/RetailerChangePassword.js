

import RetailerSidebar from './RetailerSidebar';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function RetailerChangePassword(props) {
    return (
        <div className='container mt-4'>
            <div className='row '>
                <div className="col-md-3 col-12 mb-2 mt-4">
                    <RetailerSidebar />
                </div>
                <div className="col-md-9 col-12 mb-2 mt-4">
                    <div className="row card">
                        <h4 className='card-header'>Change Password</h4>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="username" class="form-label">Old Password</label>
                                    <input type="password" className="form-control" id="psw" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">New Password</label>
                                    <input type="password" className="form-control" id="psw" />
                                </div>
                                <div className="mb-3">
                                    <label for="psw" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="psw" />
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

export default RetailerChangePassword;