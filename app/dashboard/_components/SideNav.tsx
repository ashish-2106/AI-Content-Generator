"use client";
import { HistoryIcon, Home, Settings, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

function SideNav() {
    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: HistoryIcon,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: Wallet,
            path: '/dashboard/billing'
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/setting'
        },
    ]

    
    const path = usePathname();
    useEffect(() => {
        console.log(path)
    }, [path]);

    return (
        <div className='h-screen relative p-3 shadow-sm border bg-white'>
            <div className='flex justify-center'>
                <img src="/logo.svg" alt="logo" width={120} height={100} />
            </div>
            <hr className='my-7 border' />
            <div className='mt-3'>
                {
                    MenuList.map((menu, index) => (
                        <Link key={menu.path} href={menu.path}>
                        <div  
                            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer 
                                items-center 
                                ${path === menu.path ? 'bg-primary text-white' : ''}`}
                        >
                            <menu.icon className='h-7 w-6' />
                            <h2 className='text-lg'>{menu.name}</h2>
                        </div>
                        </Link>
                    ))

                }
            </div>
            <div className='absolute bottom-0 left-0 w-full'>
                <UsageTrack/>
            </div>
        </div>
    )
}

export default SideNav