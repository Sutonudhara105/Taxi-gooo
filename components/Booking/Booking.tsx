import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import AutocompleteAddress from './AutocompleteAddress'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import Cars from './Cars';
import Cards from './Cards';
import DistanceTime from './DistanceTime';


function Booking() {
    const screenHight=window.innerHeight*0.72;

    const{carAmount,setCarAmount}= 
    useContext(SelectedCarAmountContext) 
    const router:any= useRouter()

  return (
    <div className='p-5 '>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <div className='border-[1px] p-5 
        rounded-md' >
        <AutocompleteAddress/>
       
        <Cars/>
        <Cards/>
        <button className={`w-full 
         bg-yellow-400 
        p-1 rounded-md 
        mt-4 ${!carAmount?'bg-gray-200':null}`} 
         
        onClick={()=>router.push('/payment')} 
        >Book</button>
        
        </div> 
    </div>
  )
}

export default Booking