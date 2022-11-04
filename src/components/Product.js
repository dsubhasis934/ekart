import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSystem';

function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [Product, setProduct] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        getProduct();
    }, []);
    const getProduct = async () => {
        setLoading(true);
        const url = `https://fakestoreapi.com/products/${id}`;//always use backti  when you try to inbuild javascript object.
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
    }
    const Load = () => {
        return (
            <>
                Loading..
            </>

        )
    }
    const handleAdd = (product) => {
        dispatch(add(product));
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={Product.image} alt="" height="400px" width="400px" className="border border-dark" />
                </div>
                <div className="col-md-6">
                    <p className="text-uppercase text-black-50 fs-14">{Product.category}</p>
                    <p className="product-title">{Product.title}</p>
                    <p className="lead">{Product.description}</p>
                    <button className="btn btn-outline-dark mt-2 fw-bold" onClick={() => { handleAdd(Product) }}>Add To Cart</button>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    {Loading ? <Load /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}

export default Product
