import Image from 'next/image'
import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/nav';
import BannerImage from "../../public/assets/field.jpg"
import Environmental from "../../public/assets/environmental.png"
import Hand from "../../public/assets/hand.png"
import Slider from "react-slick";
import { IoIosArrowDropright } from "react-icons/io";
import {MdOutlineArrowRightAlt, MdOutlineMinimize} from "react-icons/md"
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
          
          <div className='bg-carousel_1 bg-contain h-full relative flex flex-col  px-10'>
            {/* <div className=''>
                <GoQuote color='#BF0A30' size={25} className="mb-3"/>
                <p className='uppercase font-bold'>We are inspired by nature and believe we have a duty as human to do whether it takes to protect it.
                We are inspired by nature and believe we have a duty as human to do whether it takes to protect it.
                </p>
            </div> */}

                <div className='text-left absolute -bottom-5'>
                    <h2 className='text-[#285430] mb-2'>We provide professional environmental </h2>
                    <div className="flex items-end">
                    <h2 className='text-[#BF0A30]'><span className='text-[#002868]'>and</span> health consultancy</h2>
                    <MdOutlineMinimize size={60} color='#BF0A30'/>
                </div>
            </div>
          </div>
        </div>
        
        <div className='my-30'>
          

          <div className='flex space-x-3 pl-5 text-center w-[100%] mt-8 relative'>
           

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

        <div className=''>
            <Footer />
        </div>
      </main>
    </div>
  )
}
