"use client"

import React, { useState } from 'react'
import Btn from '../components/Btn'

const shortner = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate =  () => {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                "url": url,
                "shorturl": shorturl
            });
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch("/api/generate", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.success){
                    setgenerated(`https://linkly-xi-coral.vercel.app//${shorturl}`)
                    seturl("")
                    setshorturl("")
                }
                else{
                    alert(result.message)
                }
            })
            ;
        }
        const CopyToClipboard = () => {
            navigator.clipboard.writeText(generated);
        }

    return (
        <div className="flex flex-col justify-start items-center h-[84vh] gap-4 bg-gray-300">
            <div className="mt-15 w-1/3 h-1/2 flex flex-col justify-around items-center rounded-lg shadow-[0_8px_25px_rgba(0,0,0,0.35)] bg-gray-200">
                <h1 className="text-3xl font-bold text-center">Shorten your URLs</h1>
                <span className="flex flex-col gap-6 w-full px-4">
                    <input type="text" value={url} onChange={(e) => seturl(e.target.value)} placeholder="Enter your URL here" className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                    <input type="text" value={shorturl} onChange={(e) => setshorturl(e.target.value)} placeholder="Enter your custom alias here" className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </span>
                <span className='w-[80%]'>
                   <Btn name="Generate" arrow={false} len={true} onClick={generate} />
                </span>
                
                {generated && <span className="text-lg text-center flex gap-6 items-center"><span> Your Link is: <a href={generated} target="_blank" className="text-blue-500 underline">{generated}</a> 
                 </span><Btn name="📋" arrow={false} len={false} onClick={CopyToClipboard} />
                </span>}
            </div>
        </div>
    )
}

export default shortner 
