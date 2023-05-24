import React from 'react'

export default function Gallery({images, galleryIndex, setGalleryIndex, handleClickPrevious, handleClickNext, setIsGalleryOpen}) {

    return (
    <div className='
      fixed
      top-0
      left-0
      bottom-0
      right-0
      w-screen
      h-screen
      bg-[rgba(0,0,0,0.75)]
      flex flex-col items-center justify-center
      '>
      <div className='relative max-w-xl flex flex-col'>
        <div className='mb-4 cursor-pointer self-end text-[#69707D] hover:text-orange-500'>
          <svg 
            onClick={() => setIsGalleryOpen(false)} width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fill-rule="evenodd"/></svg>
        </div>
        <img className='rounded-xl cursor-pointer' src={images[galleryIndex]} alt="product" />

        <div className='
              absolute
              bottom-1/2
              transform -translate-x-1/2
              translate-y-1/2
              p-5
              cursor-pointer
              rounded-full
              bg-gray-300
              text-black
              hover:text-orange-500
              '
              onClick={handleClickPrevious}
              >
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="currentColor" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </div>

        <div className='
            absolute
            bottom-1/2
            right-0
            transform translate-x-1/2
            translate-y-1/2
            p-5
            cursor-pointer
            rounded-full
            bg-gray-300
            text-black
            hover:text-orange-500
            '
          onClick={handleClickNext}
        >
          <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m5 1 8 8-8 8" stroke="currentColor" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
        </div>
      </div>
      <div className='max-w-md flex flex-col'>
          <div className='md:grid grid-cols-4 gap-4 md:mt-6'>
          {images.map((image, index) => (
            <img 
              className={`rounded-xl cursor-pointer hover:opacity-50 ${galleryIndex === index ? 'border-2 border-orange-500 opacity-25' : ''}`} key={index} 
              src={image}
              onClick={() => setGalleryIndex(index)}
              />
          ))}
          </div>
        </div>
    </div>
  )
}
