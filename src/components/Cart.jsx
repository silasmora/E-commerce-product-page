import React from 'react'
import image from '/images/image-product-1.jpg'
import deleteIcon from '/images/icon-delete.svg'

export default function Cart({quantity, setQuantity, isAddToCart, setIsAddToCart, setCartItem, setIsCartVisible}) {

  const itemPrice = (125).toFixed(2)
  const cartTotal = (itemPrice * quantity).toFixed(2)

  function handleDeleteItem() {
    setCartItem([])
    setIsAddToCart(false)
    setQuantity(0)
  }

  return (
    <div onMouseLeave={() => setIsCartVisible(false)}>
      {isAddToCart? (
        <div className='absolute top-28 right-0 bg-gray-200 rounded-lg shadow-xl'>
          <p className='text-black font-bold pb-6 border-b border-gray-300 p-6'>Cart</p>
          <div className='flex justify-between px-6 pt-6'>
            <div className='flex'>
              <img className='h-12 w-12 rounded-lg' src={image} alt="image" />
              <div className='mx-4'>
                <p>Fall Limited Edition Sneakers</p>
                <p>{itemPrice} x   <span>{quantity}</span>  <span className='font-bold text-black'>${cartTotal}</span>
                </p>
              </div>
            </div>
            <img 
              className='self-center cursor-pointer w-max hover:bg-gray-100' 
              src={deleteIcon}
              onClick={handleDeleteItem}
              alt="delete" />
          </div>
          <div className='p-6'>
            <button className='bg-orange-500 text-white w-full rounded-lg cursor-pointer py-4 px-6 shadow-xl hover:opacity-50'>Checkout</button>
          </div>
        </div>
      ) : (
        <div className='absolute top-28 right-0 bg-gray-200 rounded-lg shadow-xl'>
          <p className='text-black font-bold pb-6 border-b border-gray-300 p-6'>Cart</p>
          <p className='m-24'>Your cart is empty.</p>
        </div>
      )}
    </div>
  )
}
