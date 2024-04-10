'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const PreviewMeeting = ({ formValue }) => {
    const [date, setDate] = useState()
    const[timeSlots, setTimeSlots] = useState()

    useEffect(() => {
        formValue?.duration && createTimeSlot(formValue?.duration)
    }, [formValue]);
    
    const createTimeSlot = (interval) => {
        const startTime = 8*60;
        const endTime = 22 * 60;
        const totalSlots = (endTime -startTime)/ interval;
        const slots = Array.from({length:totalSlots} ,(_,i) => {
            const totalMinutes = startTime + i * interval;
            const hours = Math.floor(totalMinutes / 60)
            const minutes = totalMinutes % 60;
            const formattedHours = hours > 12 ? hours - 12 : hours
            const period = hours >= 12 ? 'PM': 'AM';
            return `${String(formattedHours).padStart(2,'0')}:${String(minutes).padStart(2,'0')} ${period}`
        })
         setTimeSlots(slots)
       
    }
    
      
    return (
        <div className='p-5 py-10 shadow-lg m-5 border-t-8'
        
        style={{borderTopColor:formValue?.themeColor}}>

            <Image src='logo.svg' width={100} height={100} alt='logo' />
            <div className='grid grid-cols-1 md:grid-cols-3 mt-5'>
                <div className='Meeting-Info p-4 border-r '>
                    <h2>User Name</h2>
                    <h2 className='font-bold text-2xl'>{formValue?.eventName ? formValue.eventName : 'Meeting Name'}</h2>
                    <div className='mt-5 flex gap-4 flex-col'>
                        <h2 className='flex gap-2'><Clock />{formValue?.duration} Min</h2>
                        <h2 className='flex gap-2'><MapPin />{formValue?.locationType} Meeting</h2>
                        <Link href={formValue?.locationUrl ? formValue?.locationUrl : '#'} className='text-primary'>{formValue?.locationUrl}</Link>
                    </div>
                </div>

                <div className='Time&Data-Selection md:col-span-2 flex px-4'>
                    <div className='flex flex-col'>
                    <h2 className='font-bold text-lg'>Select Data & Time </h2>
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border mt-5"
                            disabled={(date) => date <= new Date()}
                        />
                    </div>
                    <div className='flex flex-col w-full overflow-auto gap-4 p-5 scroll-smooth'
                    style={{maxHeight:'400px'}}>
                        {timeSlots?.map((time,index)=>(
                          <Button className="border-primary text-primary" variant="outline">{time}</Button>
                        ))}
                    </div>
                </div>


            </div>

        </div>
    )
}

export default PreviewMeeting