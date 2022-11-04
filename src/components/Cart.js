import React from 'react'
import { useSelector } from 'react-redux'
import { remove } from '../redux/cartSystem'
import { useDispatch } from 'react-redux'
function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => { return state.cart });
  const handleRemove = (product) => {
    dispatch(remove(product));
  }
  return (
    <>
      <div className="cartWrapper">
        <p className="text-center text-decoration-underline fs-3 fw-bold">Your Cart</p>
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt="" className="cartCard-image border border-dark" />
            <p className='fs-3 fw-bold'>{product.title}</p>
            <p className='fs-3 fw-bold'>${product.price}</p>
            {/* here we use products id because we need to delete that perticular item */}
            <button className="btn btn-outline-dark fw-bold" onClick={() => { handleRemove(product.id) }}>Remove</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart
