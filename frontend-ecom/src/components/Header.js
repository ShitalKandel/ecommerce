import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Web-Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">Category</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Account
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
                <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/customer/logout">Logout</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Retailer
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/retailer/register">Register</Link></li>
                <li><Link className="dropdown-item" to="/retailer/login">Login</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/retailer/dashboard">Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/retailer/logout">Logout</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">New Orders (1)</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">My Car(7)</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Header;