import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Footer = () => {
  
  const {data} = useContext(AppContext)
  const { logo, contactEmail, contactImage, sections } = data.footer;

  return (
    <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
    <div>
      <img className="w-40 h-16" src={logo} alt="PW Skills Logo" />
      <p className="my-4">Email us: {contactEmail}</p>
      <img className="w-32 h-32" src={contactImage} alt="Contact Us" />
    </div>
    {sections.map((section, index) => (
      <div key={index}>
        <h2 className="font-bold text-xl mt-4">{section.title}</h2>
        <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
        <div>
          {section.links.map((link, linkIndex) => (
            <p key={linkIndex}>{link}</p>
          ))}
        </div>
      </div>
    ))}
  </footer>
  )
}

export default Footer
