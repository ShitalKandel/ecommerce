import logo from '../logo.svg';
import SingleProduct from './SingleProduct';

function CategoryProduct() {
    return (
        <section className="container mt-4">
            {/* Latest Product Section*/}
            <h3 className="md-3"><span className="text-primary">Technology</span> Product</h3>
            <div className="row mb-4">
                <SingleProduct title="Redmi 6"/>
                <SingleProduct title = "Redmi 6a"/>
                <SingleProduct title = "Samsung S1"/>
                <SingleProduct title = "Iphone 10"/>    
                <SingleProduct title = "MacBook"/>
                <SingleProduct title = "Poco S19"/>
                <SingleProduct title = "Huwai Y5"/>
                <SingleProduct title = "Lenovos"/>
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

export default CategoryProduct;