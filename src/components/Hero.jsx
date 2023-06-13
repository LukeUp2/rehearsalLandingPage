import React from 'react'
import styles from '../styles'
// import { discount, robot } from '../assets'

function Hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 '>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white' >20%</span>
            Discount for {' '}
            <span className='text-white' >1 Month</span>
          </p>
        </div> */}

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[20px]'>
            Rehearsal <br className='sm:block hidden'/> 
            <span className='text-gradient text-[35px]'>
              XR Communication
            </span> {' '}
            
          
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In odio debitis, ad consequuntur commodi perspiciatis sint at totam mollitia velit vitae consequatur magnam omnis necessitatibus? Saepe explicabo vero ducimus officia.
        </p>
      </div>

      <div className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z=[5]'/> */}
        <iframe height={500} width={700} src="https://embed.lottiefiles.com/animation/107445"></iframe>
        {/* <div className='absolute top-0 pink__gradient w-[40%] h-[35%] z-[0]'/> */}
        <div className='opacity-[0.5] absolute bottom-40 white__gradient w-[80%] h-[80%] rounded-full z-[1]'/>
        <div className='absolute right-20 bottom-20 blue__gradient w-[50%] h-[50%] z-[0]'/>
      </div>
    </section>
  )
}

export default Hero