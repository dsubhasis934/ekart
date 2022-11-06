import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; //it work as a subscribe thats mean it takes data from store.
function Navbar() {
    const items = useSelector((state) => { return state.cart }); //it takes the whole application state..so we just take cart field of the state
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/ekart">EKART</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/ekart">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="/login" className='btn btn-outline-dark fw-bold'>Login</Link>
                            <Link to="/register" className='btn btn-outline-dark ms-2 fw-bold'>Register</Link>
                            <Link to="/cart" className='btn btn-outline-dark ms-2 fw-bold'>Cart(${items.length})</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
