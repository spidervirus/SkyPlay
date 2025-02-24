"use client"
import Marquee from 'react-fast-marquee'
import LogoGradient from '@/svg/LogoGradient'
import LogoName from '@/svg/LogoName'
import Link from 'next/link'
import ChevronRight from '@/svg/ChevronRight'

export default function Home() {

  return (
    <main className='min-h-full w-auto items-center justify-start bg-black flex flex-col gap-3'>
      <header className='items-center bg-black flex flex-row gap-4 h-20 p-7 fixed z-10 left-0 top-0 justify-between w-full'>
        <a href="/" className="flex items-center delay-75 cursor-pointer">
          <div className='overflow-hidden rounded-xl'>
            <LogoGradient className='h-[35px] w-[35px] sm:h-[50px] sm:w-[50px]' />
          </div>
          <LogoName className='w-[8rem] sm:w-[10rem] sm:h-[4rem]' />
        </a>
        <Link target="_blank" href="https://github.com/wanjohiryan/arc3dia" className="group relative inline-flex items-center overflow-hidden rounded-2xl h-min w-min py-1.5 px-2.5 text-lg outline-none text-black transition duration-300 bg-white focus:ring-[0.1875rem] focus:ring-accent sm:flex">
          <div className="ease translate-x-0 font-semibold transition duration-300 group-hover:-translate-x-8">
            Github
          </div>
          <div className="ease absolute right-5 translate-x-full opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" >
            <ChevronRight viewBox="0 0 60 80" className="h-[24px] w-[24px] stroke-current stroke-2" />
          </div>
        </Link>
        <div className='-bottom-2.5 h-2.5 left-0 absolute r-0 w-full'>
          <Marquee className="h-full w-full">
            <div
              className='w-screen h-[10px] bg-transparent bg-[url(/images/wave.svg)] bg-[length:40px_8px] bg-repeat-x turn-stile'></div>
          </Marquee>
        </div>
      </header>
      <section className='pt-[7rem] relative w-full items-center justify-center flex flex-col gap-10 h-min overflow-hidden'>
        {/**LOGO */}
        <div className='h-[220px] w-[220px] relative'>
          {/**BG */}
          <div className='relative flex items-center justify-center h-full w-full'>
            <div className="blur-logo scale-80" />
            <div className="slogan scale-80" />
          </div>
          <div className='inset-0 opacity-[.1] rounded-3xl overflow-hidden absolute h-full aspect-square items-center flex'>
            <div className='bg-[url(/images/inter.png)] bg-repeat bg-[length:64px] w-full h-full rounded-0' />
          </div>
        </div>
        <div className='outline-none flex flex-col justify-center relative items-center'>
          <div className="mb-20 self-center items-center flex flex-col w-1/2 text-center">
            <h1 className="min-[1200px]:text-[60px] min-[810px]:text-[48px] max-[809px]:text-[32px] -tracking-[1px] leading-[1.1em] delay-500">
              You’ve never shipped a game this fast before. Really.
            </h1>
            <Link href="/" className="group delay-700 m-0 relative inline-flex items-center overflow-hidden py-4 sm:px-[3.25rem] px-0 outline-none transition duration-300 cursor-pointer " >
              <div className="ease min-[1200px]:text-[60px] min-[810px]:text-[48px] max-[809px]:text-[32px] -tracking-[1px] leading-[1.1em] text-center text-accent translate-x-0 duration-300 font-bold">Get started</div>
              <div className="ease transition duration-300 group-hover:translate-x-[10px] text-accent relative">
                <ChevronRight className="min-[810px]:h-[44px] min-[1200px]:h-[60px] max-[809px]:h-[30px] aspect-square stroke-current stroke-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
