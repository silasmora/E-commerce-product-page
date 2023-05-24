import { useState } from 'react'
import ProductPage from './components/ProductPage'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

function App() {
  
  const [isCartVisible, setIsCartVisible] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [isAddToCart, setIsAddToCart] = useState(false)


  return (
    
    <div className='max-w-screen-xl mx-auto md:flex lg:justify-center md:items-center flex-col relative'>
      <Navbar setIsCartVisible={setIsCartVisible} cartItems={cartItems} quantity={quantity}/>
      <ProductPage 
        quantity={quantity}
        setQuantity={setQuantity}
        setCartItems={setCartItems}
        setIsAddToCart={setIsAddToCart}/>
      {isCartVisible && <Cart 
        quantity={quantity}
        setQuantity={setQuantity} 
        isAddToCart={isAddToCart}
        isCartVisible={isCartVisible}
        setIsCartVisible={setIsCartVisible}
        setIsAddToCart={setIsAddToCart}
        cartItems={cartItems}
        setCartItem={setCartItems}/>}
    </div>
    
  )
}

export default App
