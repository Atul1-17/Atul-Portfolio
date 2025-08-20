import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

function MyWork() {
  return (
    <div className="md:h-screen p-6 w-full flex items-center justify-center flex-col gap-8">
        <div className=" flex flex-col items-center">
          <header className="pt-25 text-2xl font-medium">My <span className="text-[rgb(87,169,154)]">Work</span></header>
          <div className='h-1 w-20 md:w-[5vw] rounded-full bg-gradient-to-r from-[rgb(87,169,154)] to-[rgb(209,238,204)]'></div>
        </div>

        {/* <div className="h-[80%] flex items-center justify-center">
          <h1 className="text-6xl font-bold">Coming soon</h1>
        </div> */}

          <Card className=" h-[80%] md:w-[100%]">
              <CardDescription className='text-center font-medium text-lg md:text-lg'>
                <h1 className="text-6xl font-bold ">Coming soon</h1>
                
              </CardDescription>
        </Card>

    </div>
  )
}

export default MyWork