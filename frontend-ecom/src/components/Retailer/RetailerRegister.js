//Package
// import { Link } from 'react-router-dom';


function RetailerRegister(props) {
    return (
        <div className='container'>
            <h3 className='mb-4'></h3>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header'>Register</h4>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="firstName" class="form-label">First Name</label>
                                    <input type="text" className="form-control" id="firstName"/>
                                </div>
                                <div className="mb-3">
                                    <label for="lastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" />
                                </div>
                                <div className="mb-3">
                                    <label for="username" class="form-label">Username</label>
                                    <input type="text" className="form-control" id="username"/>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label for="psw" className="form-label">Password</label>
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

export default RetailerRegister;