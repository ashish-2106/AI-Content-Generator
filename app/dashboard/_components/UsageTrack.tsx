import React from 'react'

function UsageTrack() {
    return (
        <div className='m-5'>
            <div className='bg-primary p-3 text-white rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-2'>
                    <div className='h-2 bg-white rounded-full w-1/3'>

                    </div>
                </div>
                <h2 className='text-sm my-2'>500/10000 Credits Used</h2>
            </div>
            <button className='bg-secondary w-full p-2 my-3 rounded-lg'>Upgrade</button>
        </div>
    )
}

export default UsageTrack
