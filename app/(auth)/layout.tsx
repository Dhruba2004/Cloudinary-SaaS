import React from 'react'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='auth bg-base-200 flex justify-center items-center min-h-screen'>{children}</div>
  )
}

export default Layout