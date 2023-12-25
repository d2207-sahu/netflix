import React from 'react'
import { LinkText } from '../../components/LinkText'
import { Heading } from '../../components/globals'
import Header from '../../components/layouts/Header'

export const HomePage = () => {
  return (
    <div className='bg-black flex flex-col justify-center align-middle items-center h-[100vh]'>
      <Header/>
      <Heading>HomePage</Heading>
      <LinkText to={'/signup'} text={"Sign Up Page"} />
    </div>
  )
}
