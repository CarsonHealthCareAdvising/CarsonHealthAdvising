import React from 'react'

export function Input(props) {
  return <input {...props} className={`h-10 w-full rounded-xl border border-gray-300 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-black/20 ${props.className ?? ''}`} />
}
