import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Statistics = () => {

  const {data} = useContext(AppContext)
  const {statistics} = data;

  return (
    <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
    <div className="w-full h-auto flex flex-wrap flex-col items-center text-center">
      <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
        "Pure Hardwork, No Shortcuts!"
      </p>
      <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
    </div>
    <div className="w-full flex flex-wrap justify-evenly">
      {statistics.map((stat, index) => (
        <div key={index} className="w-30 flex flex-col items-center mb-12">
          <img className="w-20 h-20" src={stat.image} alt="" />
          <p className="text-3xl font-bold text-white">{stat.number}</p>
          <p className="text-3xl font-bold text-gray-500">{stat.description}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Statistics
