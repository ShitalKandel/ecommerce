import RetailerSidebar from './RetailerSidebar';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

function Customers(props) {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className="col-md-3 col-12 mb-2">
                    <RetailerSidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone-Number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            Jhon Chamling
                                        </td>
                                        <td>jhon@gmail.com</td>
                                        <td>
                                            1234567890
                                        </td>
                                        <td>
                                            <button className='btn btn-primary btn-sm '>Orders</button>
                                            <button className='btn btn-danger btn-sm ms-1'>Remove From List</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            Alex Rawal
                                        </td>
                                        <td>alex@gmail.com</td>
                                        <td>
                                            1234567890
                                        </td>
                                        <td>
                                            <button className='btn btn-primary btn-sm '>Orders</button>
                                            <button className='btn btn-danger btn-sm ms-1'>Remove From List</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Customers;