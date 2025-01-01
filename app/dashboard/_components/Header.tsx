"use client"
import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import React from 'react'

function Header({onSearchInput}:any) {
    return (
        <div className='flex justify-between bg-white items-center p-5 shadow-sm border-b-2  '>
            <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
                <Search />
                <input type="text" placeholder='search...' className='outline-none'  onChange={(event)=>onSearchInput(event.target.value) }/>
            </div>
            <div className='flex gap-2 items-center '>
                {/* <h2 className='bg-primary p-1 rounded-full text-sm text-white px-2'>Join Membershiip for $9.99/Month </h2> */}
                <UserButton/>
            </div>
        </div>
    )
}

export default Header
