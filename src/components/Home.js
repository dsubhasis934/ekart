import React from 'react';
import Products from './Products';
function Home() {
    return (
        <>
            <div className="card text-bg-dark">
                <img src="/assets/img/bg.jpg" className="card-img" alt="downloaded" height="510px" />
                <div className="card-img-overlay text-white fw-bold d-flex flex-column justify-content-center">
                    <p className="card-title fs-1">Welcome to EKART</p>
                    <p className="card-text fs-2">Scroll down for explore our new items!</p>
                    <p className="card-text fs-3">Hurry Up!!</p>
                </div>
            </div>
            {/* we call products.js because it shows then after home page */}
            <Products />
        </>
    )
}

export default Home
