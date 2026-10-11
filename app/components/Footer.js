import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white h-[7vh]">
      <div className="container mx-auto w-full h-full flex justify-center items-center">
        <p>&copy; {new Date().getFullYear()} Linkly. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer