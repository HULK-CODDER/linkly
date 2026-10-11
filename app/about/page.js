import React from 'react'
import Image from "next/image";
const about = () => {
  return (
    <div className="flex flex-col justify-start items-center h-[84vh] relative">
    <Image src={`/aboutbg.png`} alt={"Second Background"} fill={true} className="z-0" />
    <span className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center z-10 gap-10">

        <h1 className="text-5xl font-bold text-center mt-10">About Linkly</h1>
        <p className="text-xl text-center mt-4 mx-4 w-1/2">
            Linkly is a user-friendly URL shortener that allows you to easily shorten your long URLs and track their performance. Our tool is designed to help you manage your links effectively, providing insights into click-through rates and other important metrics.
        </p>
        <p className="text-xl text-center mt-4 mx-4 w-1/2">
            With Linkly, you can create branded short links that are easy to share and remember. Whether you're a marketer, blogger, or business owner, Linkly is the perfect solution for managing your online presence.
        </p>
    </span>
    </div>
  )
}

export default about