import React from 'react'

export function Textarea(props) {
  return <textarea {...props} className={`min-h-[120px] w-full rounded-xl border border-gray-300 bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-black/20 ${props.className ?? ''}`} />
}
