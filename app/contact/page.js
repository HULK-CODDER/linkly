import React from 'react'

const contact = () => {
  return (
    <div className='flex flex-col justify-start items-center h-[84vh] relative bg-gray-200 gap-10'>
        <h1 className='text-5xl font-bold text-center mt-10'>Contact Us</h1>
        <p className='text-xl text-center mt-4 mx-4 w-1/2'>
            If you have any questions, feedback, or inquiries, feel free to reach out to us. We value your input and are here to assist you.
        </p>
        <p className='text-xl text-center mt-4 mx-4 w-1/2'>
            You can contact us via email at <a href="mailto:info@linkly.com" className='text-blue-500 hover:underline'>info@linkly.com</a>, or use the contact form below to send us a message directly. We aim to respond to all inquiries within 24-48 hours.
        </p>
    </div>
  )
}

export default contact