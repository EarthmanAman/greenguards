import Image from 'next/image'
import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/nav';
import BannerImage from "../../public/assets/field.jpg"
import Environmental from "../../public/assets/environmental.png"
import Hand from "../../public/assets/hand.png"
import Slider from "react-slick";
import { IoIosArrowDropright } from "react-icons/io";
import {GoQuote} from "react-icons/go"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const imageLoader = require("../../loader");


export default function Gallery() {
   
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
  return (
    <div className="bg-my_bg min-h-[900px] bg-contain bg-repeat-y px-20 py-3 relative">
      <Header />
      <NavBar />
      <main className=''>
        {/* Carousel */}
        <div className='h-[250px] my-16'>
          
          <div className='bg-carousel_1 bg-contain h-full relative flex flex-col justify-center items-center px-64 text-center'>
            <div className='absolute left-3 -top-7'>
                <h1 className='text-[#285430] mb-4'>Our services</h1>
                {/* <h1 className='text-[#BF0A30] mb-7'><span className='text-[#285430]'>OUR </span>SERVICES</h1> */}
                {/* <h1 className='text-[#BF0A30]'><span className='text-[#002868]'>CONS</span>ULTING FIRM IN</h1> */}
            </div>
            {/* <h1 className='p-4 text-[#285430]'>Liberia</h1> */}
            {/* <h3 className='text-[#BF0A30] mb-7'><span className='text-[#002868]'>OUR </span>UNIQUENESS</h3> */}
            <p className='uppercase font-bold'>We are inspired by nature and believe we have a duty as human to do whether it takes to protect it.
            We are inspired by nature and believe we have a duty as human to do whether it takes to protect it.
            </p>
          </div>
        </div>
        

        {/*WHO ARE WE*/}
        <div className='my-30'>
          <div className='text-right'>
            {/* <h2 className='text-[#285430] mb-2'>Who are we</h2> */}
            <h2 className='text-[#BF0A30]'><span className='text-[#002868]'>What</span> Do we do</h2>
          </div>

          {/* <div className='flex space-x-3 pl-32 text-center w-[70%] mt-8'>
            <div>
              <p className='text-[#3E3B34] leading-6 tracking-widest'>
                    We provide professional environmental and health consultancy in Liberia, Africa, and the world at large
                    professional environmental and health consultancy in Liberia, Africa, and the world at large
                </p>
            </div>
            <div>
                <p className='text-[#3E3B34] leading-6 tracking-widest'>
                    We provide professional environmental and health consultancy in Liberia, Africa, and the world at large
                    professional environmental and health consultancy in Liberia, Africa, and the world at large
                  </p>
            </div>
          </div> */}

          <div className='my-8 ml-20'>

            <div className="relative flex flex-wrap space-x-8">
              <a href='' className="flex-1">
                <div className='relative border-[1px] border-[#285430]  p-10 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={55} color="#757575" />
                  <div className='absolute -right-3 -z-10 -bottom-8 w-[80%]'>
                    <Image loader={imageLoader} src={Environmental} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

              <a href='' className="flex-1">
                <div className='relative border-[1px] border-[#285430]  p-10 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={55} color="#757575" />
                  <div className='absolute -right-3 -bottom-2 -z-10 w-[80%]'>
                    <Image loader={imageLoader} src={Hand} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

              <a href='' className="flex-1">
                <div className='relative border-[1px] border-[#285430]  p-10 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={55} color="#757575" />
                  <div className='absolute -right-3 -bottom-8 -z-10 w-[80%]'>
                    <Image loader={imageLoader} src={Environmental} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

            
              
            </div>

            <div className="relative flex flex-wrap space-x-3">
              <a href='' className="flex-1">
                <div className='relative border-[1px] border-[#285430]  p-6 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={55} color="#757575" />
                  <div className='absolute -right-3 -z-10 -bottom-8 w-[80%]'>
                    <Image loader={imageLoader} src={Environmental} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

              <a href='' className="flex-1">
                <div className='relative border-[1px] border-[#285430]  p-6 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={55} color="#757575" />
                  <div className='absolute -right-3 -bottom-2 -z-10 w-[80%]'>
                    <Image loader={imageLoader} src={Hand} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

              <a href='' className="flex-1">
                <div className='relative border-[1px] border-[#285430]  p-6 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={55} color="#757575" />
                  <div className='absolute -right-3 -bottom-8 -z-10 w-[80%]'>
                    <Image loader={imageLoader} src={Environmental} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

              <a href='' className="flex-1">
                <div className='relative border-[1px] border-[#285430] p-6 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={55} color="#757575" />
                  <div className='absolute -right-3 -bottom-8 -z-10 w-[80%]'>
                    <Image loader={imageLoader} src={Environmental} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

              
            </div>


          </div>

        </div>
        
          {/* Banner */}
        <div className='bg-[#F1F9F0] py-5 flex h-[200px] w-full justify-between items-center pl-16 mb-16'>
          <div className='flex-[1.5]'>
            <GoQuote color='#BF0A30' size={25} className="mb-3"/>
            <p className='uppercase font-bold'>We are inspired by nature and believe we have a duty as human to do whether it takes to protect it.</p>
          </div>
          <div className='flex-1 relative h-[100%]'>
            {/* <p className='absolute right-0'>We are inspire</p> */}
            <div className='absolute right-0'>
              <Image loader={imageLoader} src={BannerImage} className="h-[150px] w-auto" alt="flag" />
            </div>
          </div>
        </div>
        
        <div className=''>
            <Footer />
        </div>
      </main>
    </div>
  )
}
