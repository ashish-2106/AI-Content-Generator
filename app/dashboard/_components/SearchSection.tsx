import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple
     to-blue-600 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold'>Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className='w-full flex justify-center'>
        <div className='flex my-5 gap-2 p-2 bg-white border rounded-md items-center w-[50%]'>
          <Search className='text-primary' />
          <input type="text" placeholder='Search' className='bg-transparent outline-none w-full text-black'
          onChange={(event)=>onSearchInput(event.target.value) }/>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
