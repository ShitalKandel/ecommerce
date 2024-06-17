//Package
// import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";


function Profile(props) {
    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className="col-md-3 col-12 mb-2 mt-4">
                    <Sidebar />
                </div>
                <div className='col-md-9 col-12 mb-2 mt-4 bg-'>
                    <div className='row card'>
                    <h4 className="card-header">Update Profile</h4>

                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="firstName" class="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName" />
                                </div>
                                <div className="mb-3">
                                    <label for="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" />
                                </div>
                                <div className="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" className="form-control" id="username" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="psw" className="form-label">Profile Image</label>
                                    <input class="form-control" type="file" id="formFile" />
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

export default Profile;