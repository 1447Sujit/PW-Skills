import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Products = () => {

  const {data} = useContext(AppContext)
  const {products} = data;

  return (
    <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
        <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">Our Product</p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      </div>
      <div className="w-[90%] h-auto flex flex-wrap justify-around">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-56 flex flex-col items-center mb-12 border-white border-2 rounded-xl p-2"
          >
            <img src={product.image} alt="" />
            <p className="text-3xl font-bold text-white">{product.title}</p>
            <p className="text-xl font-bold text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
