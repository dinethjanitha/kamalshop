import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h2>404 | Not Found..!</h2>
      <h2>Back to <Link className=' underline text-blue-700' href="/">Home</Link></h2>
    </div>
  )
}

export default NotFound