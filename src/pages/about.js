import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/nav';

import {MdOutlineArrowRightAlt} from "react-icons/md"



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

        
        <Footer />
      </main>
    </div>
  )
}
