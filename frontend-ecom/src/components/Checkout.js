//Package
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

function Checkout(props) {
    return (
        <div className='container'>
            <h3 className='mb-4'>All Item(4)</h3>
            <div className='row'>
                <div className='col-md-8 col-12'><div className='table-responsive table-border'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Link><img src={logo} className='thumbnail' width='80' alt="..." /> Redmi</Link>
                                </td>
                                <td>Rs. 500</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <Link><img src={logo} className='thumbnail' width='80' alt="..." />Poco</Link>
                                </td>
                                <td>Rs. 500</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <Link><img src={logo} className='thumbnail' width='80' alt="..." />Iphone 12</Link>
                                </td>
                                <td>Rs. 500</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <Link><img src={logo} className='thumbnail' width='80' alt="..." />Sony S17</Link>
                                </td>
                                <td>Rs. 500</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Total</th>
                                <th>Rs. 2000</th>
                            </tr>
                            <tr>
                                <td colSpan='3' align='center'>
                                    <Link to='/categories' className='btn btn-success m-2'>Continue Shopping</Link>
                                    <Link to='' className='btn btn-warning'>Proceed to Pay</Link>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Checkout;