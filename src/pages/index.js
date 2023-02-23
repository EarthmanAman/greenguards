import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Slider from "react-slick";
import {MdPlayCircleOutline} from "react-icons/md"
import { IoIosArrowDropright } from "react-icons/io";
import {GoQuote} from "react-icons/go"
import {SiFacebook, SiLinkedin, SiTwitter} from "react-icons/si"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Logo from "../../public/assets/logo.png"
import Flag from "../../public/assets/flag.png"
import Environmental from "../../public/assets/environmental.png"
import Hand from "../../public/assets/hand.png"
import BannerImage from "../../public/assets/field.jpg"
import Chairman from "../../public/assets/man1.png"

const inter = Inter({ subsets: ['latin'] })

const imageLoader = require("../../loader");


export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

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
    <div className="bg-my_bg min-h-[960px] bg-contain bg-repeat-y px-20 py-3">
      <Head>
        <title>HOME | GREENGUARDS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
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
          <div className='flex items-center'>
            <div className='mr-2'>
              <Image loader={imageLoader} src={Flag} width={40} height={40} alt="flag" />
            </div>
            <div>
              <button className='bg-[#5FBF00] py-1 px-2 rounded-md text-[#3C493E] text-[0.8rem] font-bold'>
                CONTACT
              </button>
            </div>
            
          </div>
          </div>
        </div>

        {/* Carousel */}
        <div className='flex flex-col h-[400px] my-10'>
          <div className='flex-1 h-full'>
            <h1 className='text-[#285430] mb-4'>Environmental</h1>
            <h1 className='text-[#BF0A30]'><span className='text-[#002868]'>CONS</span>ULTING FIRM IN</h1>
          </div>
          <div className='flex-4 bg-carousel_1 bg-contain overflow-hidden h-full relative'>
            <h1 className='p-4 text-[#285430]'>Liberia</h1>
            
              <div className='absolute top-5 right-40 w-64 text-center font-bold'>
                <Slider {...settings}>
                  <p className='text-[#3E3B34] leading-6 tracking-widest'>
                    We provide professional environmental and health consultancy in Liberia, Africa, and the world at large
                    
                  </p>

                  <p className='text-[#3E3B34] leading-6 tracking-widest'>
                    We engage in environmental and health research in Liberia, Africa, and the world;
                  </p>

                  <p className='text-[#3E3B34] leading-6 tracking-widest'>
                    We engage in waste management services, consultancy, and research
                  </p>

                  <p className='text-[#3E3B34] leading-6 tracking-widest'>
                    We provide training and education in environmental researchers, pollution monitoring, and mitigation services through symposia, seminars, lectures, and scientific/development workshops/conferences
                  </p>

                </Slider>
              </div>
            
          </div>
        </div>

        {/*WHO ARE WE*/}
        <div className='my-30'>
          <div className='text-right'>
            <h2 className='text-[#285430] mb-2'>Who are we</h2>
            <h2 className='text-[#BF0A30]'><span className='text-[#002868]'>& What</span> Do we do</h2>
          </div>

          <div className='flex space-x-3 pl-32 text-center w-[70%] mt-8'>
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
          </div>

          <div className='my-8 pl-32'>

            <Slider {...settings2} className="relative">
              <a href=''>
                <div className='relative border-[1px] border-[#285430] w-[90%] p-6 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={45} color="#757575" />
                  <div className='absolute -right-3 -z-10 -bottom-8 w-[80%]'>
                    <Image loader={imageLoader} src={Environmental} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

              <a href=''>
                <div className='relative border-[1px] border-[#285430] w-[90%] p-6 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={55} color="#757575" />
                  <div className='absolute -right-3 -bottom-2 -z-10 w-[80%]'>
                    <Image loader={imageLoader} src={Hand} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

              <a href=''>
                <div className='relative border-[1px] border-[#285430] w-[90%] p-6 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={55} color="#757575" />
                  <div className='absolute -right-3 -bottom-8 -z-10 w-[80%]'>
                    <Image loader={imageLoader} src={Environmental} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

              <a href=''>
                <div className='relative border-[1px] border-[#285430] w-[90%] p-6 rounded-lg mb-10'>
                  <h3>Environmental Consulting</h3>
                  <p className='text-sm my-3'>To provide professional environmental and health consultancy in Liberia.
                    Professional environmental and health consultancy in Liberia</p>
                  <IoIosArrowDropright size={55} color="#757575" />
                  <div className='absolute -right-3 -bottom-8 -z-10 w-[80%]'>
                    <Image loader={imageLoader} src={Environmental} className="w-[100%] h-auto" alt="environmental" />
                  </div>
                </div>
              </a>

              
            </Slider>


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

        {/* MESSAGE FROM CHAIRMAN */}
        <div className='px-10 py-5 flex justify-between mb-20'>
          <div className='flex-1'>
            <Image loader={imageLoader} src={Chairman} className="h-[100%] w-auto" alt="flag" />
          </div>
          <div className='flex-1 px-16'>
            <div className='text-right'>
              <h2 className='text-[#285430] mb-2'>MESSAGE FROM</h2>
              <h2 className='text-[#BF0A30]'><span className='text-[#002868]'>CHA</span>IRMAN</h2>
            </div>
            <div className='mt-6'>
              <p className='text-[#3E3B34] leading-6 tracking-widest mb-4'>We provide professional environmental and health consultancy in Liberia, Africa, and the world at large.
              We provide professional environmental and health consultancy in Liberia, Africa, and the world at large</p>
              <p className='text-[#3E3B34] leading-6 tracking-widest'>We provide professional environmental and health consultancy in Liberia, Africa, and the world at large.
              We provide professional environmental and health consultancy in Liberia, Africa, and the world at large</p>
            </div>
          </div>
        </div>

        <div className='px-10'>
          <div className='left'>
              <h2 className='text-[#285430] mb-2'>OUR TEAM </h2>
              <h2 className='text-[#BF0A30]'><span className='text-[#002868]'>OF</span>EXPERTS</h2>
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
      </main>
    </div>
  )
}
