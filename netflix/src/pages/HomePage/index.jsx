import React from 'react'
import { LinkText } from '../../components/LinkText'
import { Heading } from '../../components/globals'

export const HomePage = () => {
  return (
    <div className='bg-black flex flex-col justify-center align-middle items-center h-[100vh]'>
      <Heading>HomePage</Heading>
      <LinkText to={'/signup'} text={"Sign Up Page"} />
    </div>
  )
}
