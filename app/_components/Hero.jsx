import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
    <div className='text-center max-w-3xl'>
        <h2 className='font-bold text-[60px] text-slate-700'>Easy scheduling meeting ahead</h2>
        <h2 className='mt-5 text-xl text-slate-500'>Scheduler is your scheduling automation platform for eliminating the back-and-forth emails to find the perfect time — and so much more.</h2>
          <div className='flex gap-4 flex-col mt-5'>
            <h3>Sign up free with Google or Github.</h3>
            <div className='flex justify-center gap-8'>
                <Button className="p-7 flex gap-4">
                <Image src="/google.png" alt="google" width={30} height={30}/>
                Sign up with Google</Button>
                <Button className="p-7 flex gap-4">
                <Image src="/facebook.png" alt="google" width={30} height={30}/>
                Sign up with Facebook</Button>
            </div>
            <hr />
            <h2> <Link href='/' className='text-primary'>Sign up Free with Email </Link></h2>
          </div>
    </div>
    </div>
  )
}

export default Hero