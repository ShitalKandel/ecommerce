// import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import { useState, useEffect } from 'react';

function AllProducts(props) {
    const baseUrl = 'http://127.0.0.1:8000/api'
    const [products, setProducts] = useState([]);
    const [totalResult, setTotalResults] = useState(0);

    useEffect(() => {
        fetchData(baseUrl+'/products');
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => response.json())
            .then((data) => {
                console.log();
                setProducts(data.results);
                setTotalResults(data.count);
            });
    }

    var links = [];
    var limit = 1;
    var totalLinks = totalResult/limit;
    for (let i = 1; i <= totalLinks; i++) {
        links.push(<li className='page-item'>
            <Link onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)} to={`/products/?page=${i}`} className="page-link">{i}</Link>
        </li>);
    }

    function changeUrl(url){
        fetchData(url)
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
                <ul className="pagination">
                    {links}
                </ul>
            </nav>
        </section>
    );
}

export default AllProducts;
