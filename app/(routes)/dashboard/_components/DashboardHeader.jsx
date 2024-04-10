'use client'
import { LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChevronDown } from "lucide-react"
import Image from "next/image"


const DashboardHeader = () => {
    const { user } = useKindeBrowserClient()

    return user && (
        <div className="p-4 px-10">
            <div >
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center float-right">

                        <Image src={user?.picture} alt="user-logo" height={40} width={40} className="rounded-full" />
                        <ChevronDown />

                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem><LogoutLink>Logout</LogoutLink></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default DashboardHeader