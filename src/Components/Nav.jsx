import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Nav = () => {

  const {data} = useContext(AppContext)
  const {navbarLinks} = data;

  return (
    <div>
      <nav className="w-full h-14 bg-indigo-200 flex items-center justify-between px-4 md:px-4">
      <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>
      <ul className="md:flex font-semibold hidden">
        {navbarLinks.map((link, index) => (
          <li key={index} className="mx-[10px] cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
      <div className="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
        Login/SignUp
      </div>
      <div className="md:hidden">
        <a className="text-4xl font-semibold" href="#">
          &#8801;
        </a>
      </div>
    </nav>
    </div>
  )
}

export default Nav;
