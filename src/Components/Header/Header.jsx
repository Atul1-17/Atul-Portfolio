import Logo from '../Logo/Logo'
import { AlignJustify  } from 'lucide-react';
import { ModeToggle } from '../mode-toggle';


function Header() {
    const navItem = [
        {
            name: "Home",
            route: "/"
        },
        {
            name: "AboutMe",
            route: "/aboutme"
        },
        {
            name: "MyWork",
            route: "/mywork"
        },
        {
            name: "Contact",
            route: "/contact"
        }
    ]

    const handleSlider = ()=> {
        const menuSlider = document.getElementById("menuSlider")

        if (menuSlider.classList.contains("flex")) {
            menuSlider.classList.add("hidden")
            menuSlider.classList.remove("flex")
        }
        else{
            menuSlider.classList.remove("hidden")
            menuSlider.classList.add("flex")
        }
    }



  return (
    <div className='fixed w-full '>
        <div className='relative backdrop-blur-lg h-[10vh] flex items-center justify-around '>
        <Logo />

        <div className='w-[35vw] h-[5vh] flex items-center justify-center rounded-full  '>
            <ul className='hidden md:flex gap-15 '>
                {navItem.map((item) => (
                <li key={item.name}>
                    <button className=' font-medium cursor-pointer hover:text-[rgb(87,169,154)] '>
                        {item.name}
                    </button>
                </li>
            ))}
            </ul>

        </div>

        {/* mobile menu bar */}

            <div className='md:hidden'>
                <AlignJustify onClick={() => {handleSlider()}}/>
            </div>

            <div className='rounded-full h-5 cursor-pointer'>
                <ModeToggle />
            </div>

            <div id='menuSlider' className='hidden h-[25vh] absolute backdrop-blur-lg mt-[32vh] sm:mt-[30vh] sm:h-[20vh] w-full bg-black/80 flex-col items-center justify-center'>
                <div className=''>
                    <ul className='flex flex-col md:hidden gap-5 '>
                        {navItem.map((item) => (
                        <li key={item.name}>
                            <button className=' font-medium cursor-pointer hover:text-[rgb(87,169,154)] text-white'>
                                {item.name}
                            </button>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

            <button className='hidden md:block cursor-pointer p-3 font-medium rounded-xl hover:bg-[rgb(87,169,154)]/80 text-white bg-[rgb(87,169,154)]'>
                resume
            </button>
        </div>

    </div>

  )
}

export default Header