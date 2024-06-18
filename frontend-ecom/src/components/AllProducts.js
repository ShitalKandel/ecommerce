import logo from '../logo.svg';
import SingleProduct from './SingleProduct';

function AllProduct() {

    const products = [
        {
            'title': 'technolgy',
            'price': 200
        },
        {
            'title': 'Clothing',
            'price': 150
        }
    ]


    return (
        <section className="container mt-4">
            {/* Latest Product Section*/}
            <h3 className="md-3"><span className="text-dark">All Product</span></h3>
            <div className="row mb-4">
                {
                    products.map((product) => <SingleProduct product={product.title}/>)
                }
            </div>
            {/* End Latest Product */}

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default AllProduct;