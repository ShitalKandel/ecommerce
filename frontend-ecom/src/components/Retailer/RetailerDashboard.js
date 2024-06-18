import RetailerSidebar from "./RetailerSidebar";

function RetailerDashboard(props) {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className="col-md-3 col-12 mb-2">
                    <RetailerSidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total Products</h4>
                                    <p><a href="#">123</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total Orders</h4>
                                    <p><a href="#">123</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-2">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h4>Total Customers</h4>
                                    <p><a href="#">123</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RetailerDashboard;