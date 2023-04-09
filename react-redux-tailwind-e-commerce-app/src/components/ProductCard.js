import React from 'react'

function ProductCard({product}) {
  return (
    <div className='hover:border-blue-400 w-1/5 h-[350px] border rounded-lg m-2 p-2 flex flex-col items-center space-y-2'>
      <img onClick={()=> window.location =`detail/${product.id}`} className='h-32 object-cover' src={product?.image} alt="" />
      <div className="font-bold mt-2 h-16 text-center">{(product?.title).substring(0,35)}{product.title.length>35?'...':''}</div>
      <div className='text-sm opacity-70 text-center'>{(product.description).substring(0,45)}...</div>
      <div className='font-bold text-lg'>{product.price} $</div>
      <button className='bg-blue-400 text-white rounded-lg border w-full p-2'>Add Basket</button>
    </div>
  )
}

export default ProductCard