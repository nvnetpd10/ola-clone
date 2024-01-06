'use client '
import React from 'react'
import { useRouter } from 'next/navigation';
import WestIcon from '@mui/icons-material/West'
import { Avatar, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import RideCard from '../components/user/RideCard/RideCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WifiIcon from '@mui/icons-material/Wifi';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';



const Profile = () => {
  const router= useRouter();
    
    const goBack =()=>{
        router.back()
    }
  return (
    <div className='px-2 lg:px-5 py-2'>
      <div className='px-2 lg:px-5 py-2'>
      <WestIcon onClick ={goBack} className = 'cursor-pointer'/>
      </div>
      <div className='flex flex-col items-center space-y-2'>
        <Avatar sx={{bgcolor: deepOrange[500]}}>R</Avatar>
        <p>Ram</p>
        <p>9926203617</p>
      </div>
      <div className='border rounded-sm mt-5'>
        <RideCard/>
        <div className='flex flex-col items-center p-3'>
          <Button onClick={()=>router.push("/your-rides")} variant='text' >See all rides</Button>
        </div>
      </div>
      <div className='border mt-5'>
        <div className='flex items-center p-3 border-b'>
          <AccountBalanceWalletIcon className='text-green-600'/>
          <p className='ml-4' > Ola money</p>
        </div>
        <div className='flex items-center p-3 border-b'>
          <ContactPhoneIcon/>
          <p className='ml-4' > Emergency Contact</p>
        </div>
        <div className='flex items-center p-3 border-b'>
          <WifiIcon/>
          <p className='ml-4' > Ola Wi-Fi Crediantials</p>
        </div>
      </div>
      <div>
        <Button  className='w-full bg-red-500 text-white' variant ='contained'  color='error'>
          Log Out
        </Button>
      </div>
    </div>
  )
}

export default Profile