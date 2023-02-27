import Image from 'next/image'
import Logo from "../../public/assets/logo.png"
import Flag from "../../public/assets/flag.png"

const imageLoader = require("../../loader");


export default function NavBar() {

  return (
    
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
                  <a href='/'>Home</a>
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
          <div className='flex items-center'>
            <div className='mr-2'>
              <Image loader={imageLoader} src={Flag} width={40} height={40} alt="flag" />
            </div>
            <div>
                <a href='/contact'>
                    <button className='bg-[#5FBF00] py-1 px-2 rounded-md text-[#3C493E] text-[0.8rem] font-bold'>
                        CONTACT
                    </button>
                </a>
            </div>
            
          </div>
          </div>
        </div>
  )
}
