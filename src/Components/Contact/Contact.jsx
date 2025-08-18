import React from 'react'
import { 
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
 } from '../ui/card'
 import { Input } from "@/Components/ui/input"
 import { Label } from "@/Components/ui/label"
 import { Button } from '../ui/button'
 import { Textarea } from "@/Components/ui/card"

function Contact() {
  return (
    <div className='p-6 h-screen flex flex-col gap-10 items-center justify-center'>
          <div className='w-full flex flex-col items-center justify-center gap-3 p-2'>
            <header className="text-2xl font-medium">Cont<span className="text-[rgb(87,169,154)]">act</span></header>
            <div className='h-1 w-30 md:w-[5vw] rounded-full bg-gradient-to-r from-[rgb(87,169,154)] to-[rgb(209,238,204)]'></div>
          </div>

        <Card className="w-full md:w-[50%] ">
      <CardHeader>
        <CardTitle>Fill the form to Contact me</CardTitle>
        <CardDescription>
          Enter your email and message below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Message</Label>
              </div>
              <Textarea placeholder="Type your message here." />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full  bg-[rgb(87,169,154)]">
          Submit
        </Button>
      </CardFooter>
    </Card>
    </div>
  )
}

export default Contact