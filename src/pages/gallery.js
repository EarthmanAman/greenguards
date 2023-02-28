import Image from 'next/image'
import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/nav';
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from "react-icons/md"
import { GoQuote } from 'react-icons/go';
import Contact from "../../public/assets/contact.jpg"
import Field from "../../public/assets/field.jpg"

const imageLoader = require("../../loader");


export default function Gallery() {
   
  return (
    <div className="bg-my_bg min-h-[900px] bg-contain bg-repeat-y px-20 py-3 relative">
      <Header />
      <NavBar />
      <main className=''>
        

        <div className='mt-12'>
            <h1 className='text-[#BF0A30]'><span className='text-[#002868]'>Ga</span>llery</h1>
        </div>

        <div className='flex items-end my-8 px-16'>
            <div className='flex-[1.5] space-x-3 font-Calibri font-bold text-[#7C8A7F]'>
                <a href='' className='text-[#002868]'>ALL</a>
                <a href=''>PROJECTS</a>
                <a href=''>COMMUNITY</a>
            </div>
            {/* <div className='flex-[2] px-16'>
                <h6 className='mb-3'>PROJECT ONE</h6>
                <p className='text-sm'>We are inspired by nature and believe we have a duty as human to do whether it takes to protect it.
                    Nature and believe we have a duty as human to do whether it takes to protect it</p>
            </div> */}
            <div className='flex-[0.5]'>
                <div className='flex justify-end'>
                    <MdOutlineKeyboardArrowLeft size={30}/>
                    <MdOutlineKeyboardArrowRight size={30}/>
                </div>
            </div>
        </div>
        
        <div className='mt-5'>
            <div className='flex space-x-3 h-[200px] my-3'>
                <div className='flex-1 overflow-hidden'>
                    <Image  loader={imageLoader} src={Field} className="h-[100%] object-cover opacity-80" alt="environmental" />
                </div>
                <div className='flex-1 overflow-hidden'>
                    <Image loader={imageLoader} src={Contact} className="h-[100%] object-cover opacity-80" alt="environmental" />
                </div>
                <div className='flex-[2] overflow-hidden'>
                    <Image loader={imageLoader} src={Contact} className="h-[100%] object-cover opacity-80" alt="environmental" />
                </div>
            </div>

            <div className='flex space-x-3 h-[200px] my-3'>
                <div className='flex-[2] overflow-hidden'>
                    <Image  loader={imageLoader} src={Field} className="h-[100%] object-cover opacity-80" alt="environmental" />
                </div>
                <div className='flex-1 overflow-hidden'>
                    <Image loader={imageLoader} src={Contact} className="h-[100%] object-cover opacity-80" alt="environmental" />
                </div>
                <div className='flex-1 overflow-hidden'>
                    <Image loader={imageLoader} src={Contact} className="h-[100%] object-cover opacity-80" alt="environmental" />
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


        <div className='absolute w-[90%] bottom-0 left-20 right-20'>
            <Footer />
        </div>
      </main>
    </div>
  )
}
