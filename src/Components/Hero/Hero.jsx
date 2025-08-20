

function Hero() {
  return (
    <div>
    <div className='sm:h-[98vh] md:min-h-screen flex flex-col pt-30 md:pt-0 md:justify-center items-center gap-10 md:gap-20 p-4'>

        <div className='flex flex-col items-center justify-center gap-5 text-center'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-[4rem]'>Building Digital Solutions <br />
                <span className='text-[rgb(87,169,154)]'>from Concept to Code</span>
            </h1>
            <div className='h-2 w-48 md:w-[20vw] rounded-full bg-gradient-to-r from-[rgb(87,169,154)] to-[rgb(209,238,204)]'></div>
        </div>

        <div className='flex flex-col md:flex-row gap-15 md:gap-0 items-center justify-center'>
            
            <div>
                <img 
                    className='h-50  md:h-[40vh] md:w-auto bg-gradient-to-b from-[rgb(236,244,243)] to-[rgb(118,219,209)] border-2 border-white rounded-2xl md:border-r-0' 
                    src="/Gemini_Generated_Image_9y60we9y60we9y60__1_-removebg-preview.png" 
                    alt="Developer Portrait" />
            </div>

            <div className='w-full max-w-md md:max-w-none md:w-auto text-center md:text-left border-2 md:border-l-0 rounded-2xl md:rounded-l-none h-auto p-6 md:h-[30vh] flex flex-col items-center justify-center gap-6 -mt-2 md:mt-0'>
                <div>
                    <h1 className='font-medium text-lg md:text-xl'>• A full stack developer specializing in <br /> <span className='text-[rgb(118,219,209)]'>React</span>, <span className='text-[rgb(118,219,209)]'>Node.js</span>, and creating seamless user experiences.</h1>
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <button className='bg-[rgb(87,169,154)] font-medium text-white rounded-xl py-2 px-4'>View My Work</button>
                    <button className='border-2 border-[rgb(87,169,154)] py-2 px-4 rounded-xl text-[rgb(87,169,154)] font-medium'>Get In Touch</button>
                </div>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default Hero