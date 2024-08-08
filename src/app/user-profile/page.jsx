'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

import { Button } from "@/components/ui/button";


const Page = () => {

  const { user } = useUser();

  return (

    <div className="p-10">

      <Link href='/dashboard'>
        <Button className='flex items-center justify-center gap-2 ml-5'>
          <ArrowLeft />
          <span>Back to Dashboard</span>
        </Button>
      </Link>

      <div className="ml-5 mt-10 flex flex-col justify-center lg:justify-start items-center lg:items-start gap-8">

        <p className="text-2xl lg:text-4xl text-primary font-bold">Profile</p>

        <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start gap-5">
 
          <Image 
            src={user?.imageUrl} 
            alt={user?.primaryEmailAddress?.emailAddress} 
            width={120} 
            height={120}
            className="rounded-full shadow-xl"
          />

          <p className="px-4 lg:px-0 text-lg lg:text-2xl text-primary flex flex-col lg:flex-row lg:gap-2 text-center"> <span>Full Name:</span> <span className="font-bold">{user?.firstName} {user?.lastName}</span> </p>

          <p className="px-4 lg:px-0 text-lg lg:text-2xl text-primary flex flex-col lg:flex-row lg:gap-2 text-center"> <span>Email Address:</span> <span className="font-bold">{user?.primaryEmailAddress?.emailAddress}</span> </p>

        </div>

      </div>

  </div>
  )
}

export default Page;