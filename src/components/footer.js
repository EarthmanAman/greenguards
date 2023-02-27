import Image from 'next/image'
import Logo from "../../public/assets/logo.png"

const imageLoader = require("../../loader");

export default function Footer() {
  
  return (
    <div className='bg-[#D5E0D3] px-10 py-5'>
        <div className='flex justify-between w-full'>
        {/* Left */}
        <div className='flex'>
            
            {/* Logo */}
            <div className='mr-8'>
            <Image loader={imageLoader} src={Logo} width={50} height={50} alt="logo" />
            </div>

            {/* Navigation */}
            <div>
            <ul className='flex space-x-4 items-center uppercase text-[#7C8A7F] font-bold justify-between h-full'>
                <li className='text-[#285430]'>
                <a href='#'>Home</a>
                </li>
                <li>
                <a href='#'>About Us</a>
                </li>
                <li>
                <a href='#'>Services</a>
                </li>
                <li>
                <a href='#'>Gallery</a>
                </li>
                <li>
                <a href='#'>Career</a>
                </li>
            </ul>
            </div>
        </div>

        {/* Contact and flag */}
        {/* Right */}
        <div>
        <div className="flex justify-center items-center h-full">
            <p className='font-bold text-[#3E3B34]'>&copy; greenguards.com 2023</p>
            
        </div>
        </div>
        </div>
    </div>
  )
}
