import React from 'react'

export function Accordion({ children, className = '' }) {
  return <div className={className}>{children}</div>
}

export function AccordionItem({ children, value }) {
  return <details className='rounded-xl border p-0'>{children}</details>
}

export function AccordionTrigger({ children }) {
  return <summary className='cursor-pointer list-none rounded-xl px-4 py-3 font-medium hover:bg-gray-50'>{children}</summary>
}

export function AccordionContent({ children, className = '' }) {
  return <div className={`px-4 pb-4 text-sm text-gray-600 ${className}`}>{children}</div>
}
