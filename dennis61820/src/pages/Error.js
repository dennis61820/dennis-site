import React from 'react'
import { Outlet } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section section-center'>
      <h2 className='title'>404</h2>
      <p>page not found</p>
      <Outlet />
    </section>
  )
}

export default Error
