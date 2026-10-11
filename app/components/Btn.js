import React from 'react'

const Btn = (param) => {
  return (
    <div>
        <button onClick={param.onClick}
  className={`
    group relative overflow-hidden
    px-3 py-2
    rounded-2xl
    bg-linear-to-b from-gray-700 to-gray-900
    text-white font-semibold text-lg
    border border-gray-600
    shadow-[0_8px_25px_rgba(0,0,0,0.35)]
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_35px_rgba(0,0,0,0.45)]
    active:translate-y-0
    active:scale-95
    cursor-pointer
    ${param.len ? "w-full" : ""}
  `}
>
  <span className={`relative z-10 flex items-center gap-3  ${param.len ? (param.arrow ? "justify-around" : "justify-center") : ""}`}>
    {param.name}
    {param.arrow &&  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>}
   
  </span>

  {/* Shine effect */}
<span
  className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
/>
</button>
    </div>
  )
}

export default Btn