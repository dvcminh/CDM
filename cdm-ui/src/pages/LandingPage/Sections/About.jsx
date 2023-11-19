import React from 'react'
import AboutCar from '../../../assets/images/LandingPage/about_car.jpg'

const About = () => {
  return (
    <div className='w-full bg-[#222F33] relative '>
        <div className='flex '>
          <div className='w-[900px] bg-white flex flex-col p-32 m-0 max-lg:px-16'>
              <h1 className='py-2 text-4xl font-bold max-lg:mt-12'>About</h1>
              <p className='py-2 text-xl  text-[#646D70] min-w-[435px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur eum quis maiores tempora, dolorem, eos debitis dolore, iste repellat at molestiae quae ipsa culpa quam fugiat minima omnis fugit! Earum esse quibusdam eveniet vel illo deserunt enim, ratione assumenda.</p>
              <button className='py-2 bg-black hover:bg-gray-500 rounded-full text-white hover:text-black font-medium w-[200px] my-6'>Read more</button>
          </div>
          <div className='bg-white flex-1 h-[300px]'>
            
          </div>
        </div>

        <div className='py-20 mx-auto text-white  xl:px-[300px] px-[60px]'>
           <h1 className='py-2 text-4xl font-bold '>Innovatie</h1>
           <div className='flex flex-row max-lg:flex-col'>
              <p className='py-2 text-xl text-gray-400 '>At CDMA, our commitment is to consistently evolve and revolutionize the automotive landscape, with a vision of making our vehicles 100% environmentally friendly and sustainable. Our priority is to ensure that these eco-friendly cars remain accessible to all. Immerse yourself in a driving experience powered by the sun, the wind, and cutting-edge insulation technology.</p>
              <p className='py-2 text-xl text-gray-400 lg:ml-14 max-lg:mt-10'>All our vehicles boast exceptional insulation properties, crafted with a blend of sustainable and natural materials wherever feasible. The distinctive aesthetic featuring sleek 'round corners' is achieved through meticulous material selection. We believe in the inherent advantages of constructing vehicles that align with our commitment to a greener future.</p>
           </div>
        </div>
        <img src={AboutCar} alt="car"  className='absolute top-[-40px] right-[10%] w-[40%]  max-xl:w-[300px]'  />
    </div>
  )
}

export default About