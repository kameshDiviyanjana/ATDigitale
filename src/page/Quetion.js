import React from 'react'

const Quetion = () => {
  return (
    <div className=' w-full  h-full bg-white '>
    <div className=' py-3 px-3'>
        <div className=' ml-7 mr-7'>
            <h1 className=' text-center text-primary  text-3xl font-semibold'>Frequently asked questions</h1>
        </div>
        <div className='flex  flex-col place-items-center'>
             <div className='   h-full w-full flex flex-col place-items-center py-4 px-4 '>
               <div className=' bg-gary1 lg:h-[200px] lg:w-[846px]  py-4 px-4 shadow-lg  '>
                   <div className='py-5 px-5  relative  '>
                   <h1 className='  text-primary  text-[22px] font-semibold '>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h1>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 top-6 absolute right-0 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
</svg>
                   </div>
                   <div className=' mt-3 text-[#6F6C90] font-thin py-5 px-5 '>
                    <p>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
                  

                   </div>
               </div>
               <div className=' bg-gary1 lg:h-[79px] lg:w-[846px]  flex justify-center shadow-lg mt-5 py-5 px-5 relative'>
                   <h1 className=' text-[22px] font-semibold'>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</h1>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-0 mr-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
               </div>
               <div className=' bg-gary1 lg:h-[79px] lg:w-[846px] flex justify-center shadow-lg mt-5 py-5 px-5 relative'>
                   <h1 className=' text-[22px] font-semibold'>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</h1>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-0 mr-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

               </div>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Quetion
