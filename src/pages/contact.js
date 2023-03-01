import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/nav';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function Home() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div className="bg-my_bg min-h-[960px] bg-contain bg-repeat-y px-20 py-3">
      <Header />
      <main className=''>
        <NavBar />

        <div className='flex flex-col h-[300px] my-10'>
          <div className='flex-1 h-full'>
            <h1 className='text-[#285430] mb-4'>Reach out for</h1>
            <h1 className='text-[#BF0A30]'><span className='text-[#002868]'>CONS</span>ULTATION OR</h1>
          </div>
          <div className='flex-4 bg-vector_green bg-contain overflow-hidden h-full relative'>
            <h1 className='p-4 text-[#285430]'>INQUARIES</h1>
            
              <div className='absolute top-5 right-40 w-64 text-center font-bold'>
                
              <div className="bg-white py-2 bg-opacity-70 rounded-lg">
                <h6 className="text-[#BF0A30] text-sm lowercase">your@example.com</h6>
                <p className='text-[#3E3B34] leading-6 tracking-widest text-sm'>123 Monrovia, Libera</p>
                <p className='text-[#3E3B34] leading-6 tracking-widest text-sm'>Opposite this building</p>
                <p className='text-[#3E3B34] leading-6 tracking-widest text-sm'>+254 701 467872</p>
            </div>

              </div>
            
          </div>
        </div>

        
        <div className='flex mb-16 mt-8 bg-white bg-opacity-80 border-[0.5px] p-2 rounded-md'>
            <div className='w-[100%] p-20 pt-16'>
                <h2 className='mb-3 text-[#285430]'>CONTACT <span className='text-[#BF0A30]'>US</span></h2>
                <p className='text-[#3E3B34] leading-6 tracking-widest mb-10'>Our friendly team would love to hear from you</p>
                <form >
                    <div className='flex space-x-4'>
                        <div className='w-[100%]'>
                            <label>First name</label> <br/>
                            <input type="text" placeholder='First name'/>
                        </div>
                        <div className='w-[100%]'>
                            <label>First name</label><br/>
                            <input type="text" placeholder='First name'/>
                        </div>
                    </div>

                    <div>
                        <label>Email</label><br/>
                        <input type="email" placeholder='you@mail.com' />
                    </div>

                    <div>
                        <label>Phone number</label><br/>
                        <input type="tel" placeholder='+252 7567 5673' />
                    </div>

                    <div>
                        <label>Message</label><br/>
                        <textarea rows={4}></textarea>
                    </div>

                    <div>
                        <button type='submit' className='bg-[#434ce6] w-[100%] p-2 rounded-md'>SUBMIT</button>
                    </div>
                </form>
            </div>
            <div className='w-[100%] min-h-[500px] opacity-70'>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}
