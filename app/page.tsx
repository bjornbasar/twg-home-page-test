import HomePage from './components/home'
import Image from 'next/image'
import layers2Image from './assets/Layers2.svg'
import pageOneBg from './assets/01.jpg'
import pageThreeBg from './assets/02.jpg'
import About from './components/about'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section 
        id='home' 
        className="h-lvh bg-cover bg-center flex grow w-full" 
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)), url(${pageOneBg.src})`}}>
        <HomePage />
      </section>
      <section id='about' className="h-lvh flex grow w-full">
        <About />
      </section>
      <section 
        id='featured' 
        className="h-lvh bg-cover bg-center flex grow w-full"
        style={{ backgroundImage: `radial-gradient(ellipse at 50% 35%, rgba(0, 0, 0, 0), rgba(0, 0, 0, .2), rgba(0, 0, 0, .7), rgba(0, 0, 0, 1)), url(${pageThreeBg.src})`}}>
          <section className='relative'>
            <h1 className='absolute bottom-0 text-6xl'>Test 3</h1>
          </section>
      </section>
      <section id='features' className="h-lvh bg-cover bg-center flex grow w-full">       
        <Image
          src={layers2Image}
          alt='layers2'
        />
      </section>
      <section id='clients' className="h-lvh bg-cover bg-center flex grow w-full"></section>
      <section id='testimonials' className="h-lvh bg-cover bg-center flex grow w-full">Test 5</section>
      <section id='latestnews' className="h-lvh bg-cover bg-center flex grow w-full">Test 6</section>
      <section id='igfeed' className="h-lvh bg-cover bg-center flex grow w-full"></section>
      <section id='contactus' className="h-lvh bg-cover bg-center flex grow w-full">Test 7</section>
    </main>
  )
}
