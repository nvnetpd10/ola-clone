'use client'
import { Grid } from '@mui/material'
import React from 'react'

const Layout = ({Children}) => {
  return (
    <div className='h-screen'>
      <Grid container>
        <Grid item xs={12} md={8} lg={5}>
        {Children}
          
        </Grid>
        <Grid item className='h-screen w-full' xs={0} md={4} lg={7}>
          <img className='w-full h-full object-cover object-right-top' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN1btmtvSKRI6PVsv1KY-pI6cY7XlWM5bLVw&usqp=CAU'  alt=''/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Layout