import React from 'react'

export function Button({ children, variant = 'default', size = 'md', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    default: 'bg-black text-white hover:opacity-90',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50'
  }
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base'
  }
  return (
    <button className={`${base} ${variants[variant] ?? variants.default} ${sizes[size] ?? sizes.md} ${className}`} {...props}>
      {children}
    </button>
  )
}
