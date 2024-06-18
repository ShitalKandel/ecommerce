// import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';

function AllProduct() {
    const baseUrl = useState('http://localhost:8000/api')
    const [products, setProducts] = useState([]);
    const [totalResult, setTotalResults] = useState(0);


    useEffect(() => {
        fetchData(baseUrl+'/products');
    }, []);


    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.results);
                setTotalResults(data.count);
            });
    }


    function changeUrl(baseurl) {
        fetchData(baseurl);
    }

    var links = [];
    for (let i = 1; i <= totalResult; i++) {
        links.push(<li class="page-item"><Link onClick={() => changeUrl( baseUrl + '/products/?page=${i}')} to={'/products/?page=${i}'} class="page-link">{i}</Link></li>
        )
    }

    return (
        <section className="container mt-4">
            {/* Latest Product Section*/}
            <h3 className="md-3"><span className="text-dark">All Product</span></h3>
            <div className="row mb-4">
                {
                    products.map((product) => <SingleProduct product={product} />)
                }
            </div>
            {/* End Latest Product */}

            <nav aria-label="Page navigation example">

                <ul class="pagination">
                    {links}
                </ul>
            </nav>
        </section>
    )
}

export default AllProduct;