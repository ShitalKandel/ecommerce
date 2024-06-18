import { Link } from 'react-router-dom';


function RetailerSidebar() {
    return (
        <div className="list-group">
            <Link to="/retailer/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
            <Link to="/retailer/products" className="list-group-item list-group-item-action">Products</Link>
            <Link to="/retailer/add-product" className="list-group-item list-group-item-action">Add Product</Link>
            <Link to="/retailer/orders" className="list-group-item list-group-item-action">Orders</Link>
            <Link to="/retailer/customers" className="list-group-item list-group-item-action">Customers</Link>
            <Link to="/retailer/reports" className="list-group-item list-group-item-action">Reports</Link>
            <Link to="/retailer/profile" className="list-group-item list-group-item-action">Profile</Link>
            <Link to="/retailer/change-password" className="list-group-item list-group-item-action">Change Password</Link>
            <a href="#" className="list-group-item list-group-item-action text-danger">Logout</a>
        </div>
    )
}

export default RetailerSidebar; 