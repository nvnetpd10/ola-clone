'use client';
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useSearchParams} from 'next/navigation'
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const SearchResultCard = ({item , latitude_key , longitude_key , setActiveField , area_Key}) => {
    const pickup_latitude = 19.0785451
    const pickup_longitude= 72.878176
    const pickup_area = "Mumbai , Mumbai Suburban, Maharashtra, India"
    const destination_latitude = 42.2781401
    const destination_longitude = 74.9159946
    const destination_area = "Delhi , Town of Delhi , Delaware County , New York , United States"

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname  = usePathname();


    const handleSelect= ()=>{
        const params=new URLSearchParams(searchParams)
        params.set([latitude_key] , pickup_latitude)
        params.set([longitude_key], pickup_longitude)
        params.set([area_Key] , pickup_area)
        
        router.replace(pathname+"?" + params.toString())
    }
  return (
    <div onClick={handleSelect} className='flex items-center py-2 z-10 bg-white cursor-pointer'>
        <div className='pr-5'>
            <LocationOnIcon/>
        </div>
        <div>
            <p className='font-semibold'> mumbai</p>
            <p className='font-semibold opacity-60'>
                mumbai gokuldham market
            </p>
        </div>
    </div>
  );
};

export default SearchResultCard;