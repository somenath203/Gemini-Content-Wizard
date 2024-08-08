'use client';

import { Bot, FileClock, Home, LogOut, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useClerk } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";


const Sidebar = () => {

  const pathname = usePathname();

  const { signOut } = useClerk();

  const sidebarMenuList = [
    {
        name: 'Home',
        icon: <Home size={25} />,
        path: '/dashboard'
    },
    {
        name: 'History',
        icon: <FileClock size={25} />,
        path: '/history'
    },
    {
        name: 'Profile',
        icon: <User2 size={25} />,
        path: '/user-profile'
    }
  ];

  const logoutUser = async () => {
     
    await signOut();

    toast("You have been logged out successfully.", {
        position: 'top-right'
    });

  }

  return (
    <div className="h-screen p-5 shadow-sm border">

        <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
            <div>
                <Bot size={40} className="text-primary" />
            </div>
            <div>
                <span className="text-lg">Gemini Content Wizard</span>
            </div>
        </div>

        <div>
            {sidebarMenuList.map((menu, index) => (
                <Link href={menu.path} key={index} className={`flex items-center gap-2 mb-2 mt-6 p-2 py-4 ${menu.path === pathname && 'bg-primary text-white'} hover:bg-primary hover:text-white rounded-lg cursor-pointer`}>

                    {menu.icon}

                    <h2 className="text-lg">{menu.name}</h2>

                </Link>
            ))}

            <Button className='flex items-center justify-center gap-2 mt-4' onClick={logoutUser}>
                <span className="text-base text-white">Logout</span>
                <span><LogOut size={20} /></span>
            </Button>

        </div>

    </div>
  )
};

export default Sidebar;