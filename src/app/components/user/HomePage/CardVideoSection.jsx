'use client'
import React from 'react'

const CardVideoSection = () => {
  return (
    
    <div className='mt-32'>
      <h1 className='text-5x1 font-bold my-10 text-center'>Ola S1. The best scooter ever built</h1>
      <div className='px-36'>
        <img autoPlay loop controls style={{width: '100%' ,height :'100%'}} src='https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/s1-sport-web.png'/>
      </div>
    </div>
  )
}

export default CardVideoSection