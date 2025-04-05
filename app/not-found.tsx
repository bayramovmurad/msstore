"use client"

import { Button } from "@/components/ui/button"
import { APP_NAME } from "@/lib/constant"
import Image from "next/image"


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center flex-col shadow-lg rounded-lg min-w-1/3 p-6">
            <Image 
            src="/images/logo.svg" 
            alt={APP_NAME}
            width={40}
            height={40}
            />
            <h1 className="text-3xl font-bold my-2">Not Found</h1>
            <p className="text-destructive mb-3">Could not found requested page</p>
            <Button variant="outline" onClick={() => (window.location.href = "/")}>Back To Home</Button>
        </div>
    </div>
  )
}
export default NotFound