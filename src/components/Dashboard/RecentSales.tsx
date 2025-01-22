import React from 'react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const RecentSales = () => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>Recent Sales</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <Avatar className="hidden sm:flex h-9 w-9">
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium">AmirHossein</p>
          <p className="text-sm text-muted-foreground">
            amir.cph4@gmail.com
          </p>
        </div>
        <p className="ml-auto font-medium">+$1,999.00</p>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="hidden sm:flex h-9 w-9">
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium">AmirHossein</p>
          <p className="text-sm text-muted-foreground">
            amir.cph4@gmail.com
          </p>
        </div>
        <p className="ml-auto font-medium">+$1,999.00</p>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="hidden sm:flex h-9 w-9">
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium">AmirHossein</p>
          <p className="text-sm text-muted-foreground">
            amir.cph4@gmail.com
          </p>
        </div>
        <p className="ml-auto font-medium">+$1,999.00</p>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="hidden sm:flex h-9 w-9">
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <p className="text-sm font-medium">AmirHossein</p>
          <p className="text-sm text-muted-foreground">
            amir.cph4@gmail.com
          </p>
        </div>
        <p className="ml-auto font-medium">+$1,999.00</p>
      </div>
    </CardContent>
  </Card>
  )
}

export default RecentSales