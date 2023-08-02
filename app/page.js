import Image from 'next/image'
import HeroSection from '../app/heroSection/HeroSection'
import Navbar from "./(components)/Navbar"
export default function Home() {
  return (
   <>
   <Navbar/>
   {/* <HeroSection/> */}
    {/* <Image  src='/img.jpg' width={50000} height={10} className='w-[100%] h-[100vh]'/> */}
   </>
  )
}
