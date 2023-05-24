import React, { useState } from 'react'
import previous from '/images/icon-previous.svg'
import next from '/images/icon-next.svg'
import minus from '/images/icon-minus.svg'
import plus from '/images/icon-plus.svg'
import Gallery from './Gallery'


export default function ProductPage({setCartItems, quantity, setQuantity, setIsAddToCart}) {

  const images = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'  
  ]
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  
  function handleClickPrevious() {
    if (!isGalleryOpen) {
      setCurrentIndex(prevIndex => prevIndex === 0 ? images.length -1 : prevIndex - 1)
    } else {
      setGalleryIndex(prevIndex => prevIndex === 0 ? images.length -1 : prevIndex - 1)
    }
  }

  function handleClickNext() {
    if (!isGalleryOpen) {
      setCurrentIndex(prevIndex => prevIndex === images.length -1 ? 0 : prevIndex + 1)
    } else {
      setGalleryIndex(prevIndex => prevIndex === images.length -1 ? 0 : prevIndex + 1)
    }
  }

  function handleAddToCart() {
    setCartItems(prevCartItems => [...prevCartItems, {quantity: quantity, price: 125}])
    setIsAddToCart(true)
  }

  return (
    <div className='md:flex md:max-w-4/5 md:m-14 lg:m-20'>
      <div className='relative max-w-3xl md:flex flex-col md:w-1/2'>
        <img className='md:hidden' src={images[currentIndex]} alt="product" />

        <img onClick={() => setIsGalleryOpen(true)} className='hidden md:block md:rounded-xl md:cursor-pointer' src={images[currentIndex]} alt="product" />

        <div className='
              absolute
              left-0
              bottom-1/2
              h-[11%]
              w-[11%]
              transform translate-x-1/2
              cursor-pointer
              rounded-full
              bg-gray-300
              flex items-center justify-center
              md:hidden
              '
              onClick={handleClickPrevious}
              >
          <img
            className='h-1/3' src={previous} alt="previous"
          />
        </div>

        <div
          className='
            absolute
            right-0
            bottom-1/2
            h-[11%]
            w-[11%]
            transform -translate-x-1/2
            cursor-pointer
            rounded-full
            bg-gray-300
            flex items-center justify-center
            md:hidden'
          onClick={handleClickNext}
        >
          <img className='h-1/3' src={next} alt="next" />
        </div>

        <div className='hidden md:grid grid-cols-4 gap-4 md:mt-6'>
          {images.map((image, index) => (
            <img 
              className={`rounded-xl cursor-pointer hover:opacity-50 ${currentIndex === index ? 'border-2 border-orange-500 opacity-25' : ''}`} key={index} 
              src={image}
              onClick={() => setCurrentIndex(index)}
              />
          ))}
        
        </div>
        
      </div>

      {/*second child */}
      <div className='p-6 md:w-1/2 lg:p-0 lg:mx-20 lg:my-10'>
        <p className='text-orange-600/75 text-sm font-bold uppercase tracking-widest'>Sneaker Company</p>
        <h1 className='text-3xl font-bold text-black py-4 lg:text-4xl'>Fall Limited Edition Sneakers</h1>
        <p className='mb-4'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they'll withstand everything the weather can offer.</p>

        <div className='py-4'>
          <div className='flex justify-between md:flex-col'>
            <div className='flex items-center'>
              <span className='text-3xl text-black font-bold'>$125.00</span>
              <span className='ml-2 bg-orange-400/25 px-2 rounded-md text-bold text-orange-600/75 font-bold'>50%</span>
            </div>
            <span className='flex items-center cross line-through opacity-50 font-bold'>$250.00</span>
          </div>
          
        </div>
        
        <div className='py-4'>
          <div className='md:flex items-center'>
            <div className='bg-gray-300/50 flex justify-between items-center py-4 px-6 rounded-md mb-4 shadow-md md:w-1/3 md:mb-0 md:px-4'>
              <img 
                className='h-1/4 cursor-pointer' 
                src={minus} 
                alt="minus" 
                onClick={() => setQuantity(prevQuantity => prevQuantity === 0 ? 0 : prevQuantity - 1)}
                />
              <span className='text-black font-bold'>{quantity}</span>
              <img 
                className='h-1/4 cursor-pointer' 
                src={plus} 
                alt='plus' 
                onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}
                />
            </div>
            <button 
              onClick={handleAddToCart}
              className='bg-orange-500 text-white w-full rounded-lg cursor-pointer py-4 px-6 shadow-xl flex justify-center items-center md:w-2/3 md:ml-4 hover:opacity-50'>
              <svg className='mr-2' width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fill-rule="nonzero"/></svg> 
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {isGalleryOpen && <Gallery 
          images={images} 
          galleryIndex={galleryIndex} 
          setGalleryIndex={setGalleryIndex} 
          setIsGalleryOpen={setIsGalleryOpen}
          handleClickPrevious={handleClickPrevious}
          handleClickNext={handleClickNext}
          />}
    </div>
  )
}
