import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/nav';

import {MdOutlineArrowRightAlt, MdOutlineMinimize} from "react-icons/md"
import {SiFacebook, SiLinkedin, SiTwitter} from "react-icons/si"
import {GoQuote} from "react-icons/go"

import Image from 'next/image'
import Environmental from "../../public/assets/environmental.png"
import Hand from "../../public/assets/hand.png"
import Philosophy from "../../public/assets/philosophy.png"
import Chairman from "../../public/assets/man1.png"
import BannerImage from "../../public/assets/field.jpg"


const imageLoader = require("../../loader");


export default function Home() {
  
  return (
    <div className="bg-my_bg min-h-[960px] bg-contain bg-repeat-y px-20 py-3">
      <Header />
      <main className=''>
        <NavBar />

        <div className='h-[250px] my-16'>
          
          <div className='bg-carousel_1 bg-contain h-full relative flex flex-col justify-center items-center px-64 text-center'>
            <div className='absolute left-3 -top-7'>
                <h1 className='text-[#285430] mb-1'>About Us</h1>
                
                <h6 className='px-4 text-[#BF0A30]'><span className="text-[#002868]">& wh</span>at we do</h6>
                {/* <h1 className='text-[#BF0A30] mb-7'><span className='text-[#285430]'>OUR </span>SERVICES</h1> */}
                {/* <h1 className='text-[#BF0A30]'><span className='text-[#002868]'>CONS</span>ULTING FIRM IN</h1> */}
            </div>
            {/* <h3 className='text-[#BF0A30] mb-7'><span className='text-[#002868]'>OUR </span>UNIQUENESS</h3> */}
            <p className='uppercase font-bold'>We are inspired by nature and believe we have a duty as human to do whether it takes to protect it.
            We are inspired by nature and believe we have a duty as human to do whether it takes to protect it.
            </p>
          </div>
        </div>
        {/* <div className='flex flex-col h-[300px] my-10'>
          <div className='flex-1 h-full'>
            <h1 className='text-[#285430] mb-1'>About us</h1>
            <h1 className='text-[#285430]'><span className='text-[#BF0A30]'>&</span></h1>
          </div>
          <div className='flex-4 bg-vector_green bg-contain overflow-hidden h-full relative'>
            <div className="flex items-center">
              <h2 className='p-4 text-[#285430]'><span className="text-[#002868]">what </span>we do</h2>
              <MdOutlineArrowRightAlt size={40}/>
            </div>
              <div className='absolute top-5 right-40 w-64 text-center font-bold'>
                
              <div className="bg-white py-2 bg-opacity-70 rounded-lg">
                <h6 className="text-[#BF0A30] text-sm lowercase">your@example.com</h6>
                <p className='text-[#3E3B34] leading-6 tracking-widest text-sm'>123 Monrovia, Libera</p>
                <p className='text-[#3E3B34] leading-6 tracking-widest text-sm'>Opposite this building</p>
                <p className='text-[#3E3B34] leading-6 tracking-widest text-sm'>+254 701 467872</p>
            </div>

              </div>
            
          </div>
        </div> */}

        {/*WHO ARE WE*/}
        <div className='my-30'>
          

          <div className='flex space-x-3 pl-5 text-center w-[100%] mt-8'>
            <div className='text-left flex-[1.5]'>
                <h2 className='text-[#285430] mb-2'>We provide professional environmental </h2>
                <div className="flex items-end">
                    <h2 className='text-[#BF0A30]'><span className='text-[#002868]'>and</span> health consultancy</h2>
                    <MdOutlineMinimize size={60} color='#BF0A30'/>
                </div>
            </div>

            <div className="flex-1">
              <p className='text-[#3E3B34] leading-6 tracking-widest'>
                    We provide professional environmental and health consultancy in Liberia, Africa, and the world at large
                    professional environmental and health consultancy in Liberia, Africa, and the world at large.
                   
                </p>
            </div>
            <div className="flex-1">
                <p className='text-[#3E3B34] leading-6 tracking-widest'>
                    We provide professional environmental and health consultancy in Liberia, Africa, and the world at large
                    professional environmental and health consultancy in Liberia, Africa, and the world at large
                    
                  </p>
            </div>

            
          </div>

        </div>

         {/* OUR PHILOSOPHY */}
         <div className='px-10 py-5 flex justify-between items-center my-20 bg-[#F1F9F0]'>
          <div className='flex-1'>
            <Image loader={imageLoader} src={Philosophy} className="h-[100%] w-auto" alt="flag" />
          </div>
          <div className='flex-[1.5] px-16'>
            <div className='text-right'>
              <h2 className='text-[#285430] mb-2'>OUR</h2>
              <h2 className='text-[#BF0A30]'><span className='text-[#002868]'>PHI</span>LOSOPHY</h2>
            </div>
            <div className='mt-6'>
              <p className='text-[#3E3B34] leading-6 tracking-widest mb-4'>We provide professional environmental and health consultancy in Liberia, Africa, and the world at large.
              We provide professional environmental and health consultancy in Liberia, Africa, and the world at large</p>
              <p className='text-[#3E3B34] leading-6 tracking-widest mb-4'>We provide professional environmental and health consultancy in Liberia, Africa, and the world at large.
              We provide professional environmental and health consultancy in Liberia, Africa, and the world at large</p>
              <p className='text-[#3E3B34] leading-6 tracking-widest mb-4'>We provide professional environmental and health consultancy in Liberia, Africa, and the world at large.
              We provide professional environmental and health consultancy in Liberia, Africa, and the world at large</p>
            </div>
          </div>
        </div>

        {/* OUR TEAM */}
        <div className='px-1 '>
          <div className='left px-10'>
              <h2 className='text-[#285430] mb-2'>OUR TEAM </h2>
              <h2 className='text-[#BF0A30]'><span className='text-[#002868]'>OF</span> EXPERTS</h2>
          </div>

          <div className='my-8 px-20 flex'>
              <div className='w-[100%] m-2 border-[1px] p-3 rounded-lg'>
                <div className='mb-3'>
                  <Image loader={imageLoader} src={Chairman} className="h-[100%] w-auto" alt="flag" />
                </div>
                <div className='pl-2 text-center'>
                  <h6 className='text-[#002868]'>Dr. Firstname Lastname</h6>
                  <p className='text-[#3E3B34] leading-6 tracking-widest text-sm'>Chairman</p>
                </div>
                <div className='flex justify-center my-2'>
                  <hr className='w-[30%]'/>
                </div>
                
                <div className='flex justify-center space-x-4'>
                  <a href=''><SiFacebook color='#4267B2'/></a>
                  <a href=''><SiLinkedin color='#0077B5'/></a>
                  <a href=''><SiTwitter color='#1DA1F2'/></a>
                </div>
              </div>

              <div className='w-[100%] m-2 border-[1px] p-3 rounded-lg'>
                <div className='mb-3'>
                  <Image loader={imageLoader} src={Chairman} className="h-[100%] w-auto" alt="flag" />
                </div>
                <div className='pl-2 text-center'>
                  <h6 className='text-[#002868]'>Dr. Firstname Lastname</h6>
                  <p className='text-[#3E3B34] leading-6 tracking-widest text-sm'>Chairman</p>
                </div>
                <div className='flex justify-center my-2'>
                  <hr className='w-[30%]'/>
                </div>
                
                <div className='flex justify-center space-x-4'>
                  <a href=''><SiFacebook color='#4267B2'/></a>
                  <a href=''><SiLinkedin color='#0077B5'/></a>
                  <a href=''><SiTwitter color='#1DA1F2'/></a>
                </div>
              </div>

              <div className='w-[100%] m-2 border-[1px] p-3 rounded-lg'>
                <div className='mb-3'>
                  <Image loader={imageLoader} src={Chairman} className="h-[100%] w-auto" alt="flag" />
                </div>
                <div className='pl-2 text-center'>
                  <h6 className='text-[#002868]'>Dr. Firstname Lastname</h6>
                  <p className='text-[#3E3B34] leading-6 tracking-widest text-sm'>Chairman</p>
                </div>
                <div className='flex justify-center my-2'>
                  <hr className='w-[30%]'/>
                </div>
                
                <div className='flex justify-center space-x-4'>
                  <a href=''><SiFacebook color='#4267B2'/></a>
                  <a href=''><SiLinkedin color='#0077B5'/></a>
                  <a href=''><SiTwitter color='#1DA1F2'/></a>
                </div>
              </div>

              <div className='w-[100%] m-2 border-[1px] p-3 rounded-lg'>
                <div className='mb-3'>
                  <Image loader={imageLoader} src={Chairman} className="h-[100%] w-auto" alt="flag" />
                </div>
                <div className='pl-2 text-center'>
                  <h6 className='text-[#002868]'>Dr. Firstname Lastname</h6>
                  <p className='text-[#3E3B34] leading-6 tracking-widest text-sm'>Chairman</p>
                </div>
                <div className='flex justify-center my-2'>
                  <hr className='w-[30%]'/>
                </div>
                
                <div className='flex justify-center space-x-4'>
                  <a href=''><SiFacebook color='#4267B2'/></a>
                  <a href=''><SiLinkedin color='#0077B5'/></a>
                  <a href=''><SiTwitter color='#1DA1F2'/></a>
                </div>
              </div>
            
          </div>
        </div>

          {/* Banner */}
          <div className='bg-[#F1F9F0] py-5 h-[180px] flex items-center justify-center w-full text-center pl-16 my-16'>
          <div>
            <p className='uppercase font-bold'>We are inspired by nature and believe we have a duty as human to do whether it takes to protect it.</p>
            <a href='/contact'>
                <button className='bg-[#5FBF00] px-4 py-2 rounded-lg mt-5 text-[#3C493E] font-bold'>CONTACT US</button>
            </a>
          </div>
          
        </div>

        <Footer />
      </main>
    </div>
  )
}
