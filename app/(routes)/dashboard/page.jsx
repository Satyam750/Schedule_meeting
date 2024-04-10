'use client'


import { Button } from '@/components/ui/button'
import { app } from '@/config/FirebaseConfig';
import { LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import MeetingType from './meeting-type/page';

const Dashboard = () => {

    const db = getFirestore(app)
    const {user} = useKindeBrowserClient()
    const[ loading, setLoading] = useState(true)

    const router = useRouter();

    useEffect(()=>{
       user && isBusinessRegistered()
    },[user])

    const isBusinessRegistered = async () => {

        const docRef = doc(db, "Business", user.email)
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data());
            setLoading(false)
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            router.replace('/create-business')
            setLoading(false)

        }

    }
    
    if(loading){
        return (
            <h2>Loading ...</h2>
        )
    }

    return (
        <div>
            <MeetingType/>
        </div>
    )
}

export default Dashboard