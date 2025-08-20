import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"


function AboutMe() {
  return (
    <div className=' p-6 md:h-screen'>
        <div className='w-full flex flex-col items-center justify-center gap-3 p-2'>
          <header className="text-2xl font-medium">About <span className="text-[rgb(87,169,154)]">Me</span></header>
          <div className='h-1 w-30 md:w-[5vw] rounded-full bg-gradient-to-r from-[rgb(87,169,154)] to-[rgb(209,238,204)]'></div>
        </div>

        <div className="border-2 md:h-[40vh]  rounded-2xl mt-3 p-10 flex flex-col md:flex-row md:items-center justify-center md:justify-around gap-6">
          <h1 className="text-3xl md:hidden font-medium">Hi Everyone,<br /> I am <span className="text-[rgb(87,169,154)]">Atul Bopche</span> from Nagpur, India.</h1>

          {/* for big screen */}  
          <div className="flex flex-col gap-10">
            <h1 className="hidden md:block text-5xl font-medium">Hi Everyone,<br /> I am <span className="text-[rgb(87,169,154)]">Atul Bopche</span> from <br />Nagpur, India.</h1>
            <div className='hidden md:block h-2 w-48 md:w-[20vw] rounded-full bg-gradient-to-r from-[rgb(87,169,154)] to-[rgb(209,238,204)]'></div>
          </div>
          <div>
            <img className="bg-gradient-to-b h-[20vh] md:h-auto md:w-[30vw] from-[white] to-[rgb(118,219,209)] rounded-2xl" src="/Gemini_Generated_Image_9y60we9y60we9y60-removebg-preview.png" alt="" />
          </div>

        </div>

        <div className=" w-full mt-10 p-3 gap-5 flex flex-col md:flex-row">
          <Card className=" h-[28vh] md:w-[50%]">
            <CardHeader>
              <CardTitle className='text-2xl'>Experience</CardTitle>
                <div className='h-1 w-30 md:w-[5vw] rounded-full bg-gradient-to-r from-[rgb(87,169,154)] to-[rgb(209,238,204)]'></div>
              <CardDescription className='text-center font-medium text-lg md:text-lg'>
                <h1 className="text-6xl font-bold ">Coming soon</h1>
                
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className=" h-[28vh] md:w-[50%]">
            <CardHeader>
              <CardTitle className='text-2xl'>Skills</CardTitle>
                <div className='h-1 w-30 md:w-[5vw] rounded-full bg-gradient-to-r from-[rgb(87,169,154)] to-[rgb(209,238,204)]'></div>
              <CardDescription className="text-center font-medium text-lg md:text-lg">
                <h1 className="text-6xl font-bold ">Coming soon</h1>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
    </div>
  )
}

export default AboutMe