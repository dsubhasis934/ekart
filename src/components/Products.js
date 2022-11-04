
import React, { useState, useEffect, useRef } from 'react';
import { add } from '../redux/cartSystem';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//import { Audio } from 'react-loader-spinner';
import { SpinnerDiamond } from 'spinners-react';
function Products() {
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false);
    const [Data, setData] = useState([]);
    const [Filter, setFilter] = useState(Data);
    const handleAdd = (product) => {
        dispatch(add(product));
    }
    let component = true;
    let componentDidMount = useRef(component);
    useEffect(() => {

        const getproducts = async () => {
            setLoading(true);
            let url = 'https://fakestoreapi.com/products';
            const response = await fetch(url);
            if (componentDidMount) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentDidMount = false;
            }
        }
        getproducts();
    }, []);
    const Load = () => {
        return (
            <>
                <SpinnerDiamond size={50} thickness={100} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
            </>

        )
    }
    //create for calling data categorywise.
    const filterProduct = (cat) => {
        const updatedlist = Data.filter((x) => x.category === cat);
        setFilter(updatedlist);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">

                    <button className='btn btn-outline-dark fw-bold' onClick={() => {
                        setFilter(Data);
                    }}>All</button>
                    <button className='btn btn-outline-dark ms-2 fw-bold' onClick={() => {
                        filterProduct("men's clothing")
                    }}>Mens Garments</button>
                    <button className='btn btn-outline-dark ms-2 fw-bold' onClick={() => {
                        filterProduct("women's clothing")
                    }}>Womens Garments</button>
                    <button className='btn btn-outline-dark ms-2 fw-bold' onClick={() => {
                        filterProduct("electronics")
                    }}>Electronics</button>
                </div>
                {Filter.map((product) => {
                    return (
                        <>

                            <div className="col-md-3 mb-2">
                                <div className="card h-100 text-center p-4 border border-dark" key={product.id}>
                                    <img src={product.image} className="card-img-top border border-dark" alt="not downloaded" />
                                    <div className="card-body">
                                        <p className="card-title mb-0 fw-bold">{product.title.substring(0, 12)}</p>
                                        <p className="card-text fw-bold">${product.price}</p>
                                        {/* pass id which take in product using useparam hook */}
                                        <div className="button d-flex fw-bold justify-content-around">
                                            <button className="btn btn-primary"><Link to={`/products/${product.id}`} className="text-decoration-none fw-bold text-black" >Buy</Link></button>
                                            <button className="btn btn-outline-dark fw-bold" onClick={() => { handleAdd(product) }}>Cart</button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
                }
            </>
        )

    }
    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <p className="fs-3 fw-bolder text-center">Latest Products</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {Loading ? <Load /> : <ShowProducts />}
                </div>
            </div>
        </>
    )
}

export default Products
