import React from 'react'

export default function ListItems() {

  const [items, setItems] = React.useState([
    'Collections', 'Men', 'Women', 'About', 'Contact'
  ])

  return (
    <div className='hidden md:flex'>
      {items.map((item, index) => (
        <ul key={index}>
          <li className='ml-6 lg:ml-8 cursor-pointer relative'>
            <span className='before:absolute before:w-0 before:-bottom-12 before:left-1/2 before:h-0.5 before:bg-orange-500 before:duration-500 ease-in-out hover:before:w-full hover:before:left-0 transform hover:before:scale-x-100'>{item}</span>
          </li>
       </ul>
      
      ))}
    </div>
  )
}
