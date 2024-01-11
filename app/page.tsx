import HomePage from './components/home'
import Image from 'next/image'
import layers2Image from './assets/Layers2.svg'
import pageOneBg from './assets/01.jpg'
import pageThreeBg from './assets/02.jpg'
import About from './components/about'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-inherit">
      <section 
        id='home' 
        className="h-lgh bg-cover bg-center flex grow w-full" // background: linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, #052133 100%), url(<path-to-image>), lightgray 50% / cover no-repeat;
        style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, #052133 100%), url(${pageOneBg.src})`}}>
        <HomePage />
      </section>
      <section id='about' className="h-lgh flex grow w-full bg-inherit">
        <About />
      </section>
      <section 
        id='featured' 
        className="h-lgh bg-inherit bg-cover bg-center flex grow w-full"
        style={{ backgroundImage: `linear-gradient(180deg, #052133 0%, rgba(4, 29, 47, 0.00) 28.65%, rgba(4, 25, 43, 0.00) 73.18%, #052133 100%), url(${pageThreeBg.src})`}}>
          <section className='relative'>
            <h1 className='absolute bottom-0 text-6xl'>Test 3</h1>
          </section>
      </section>
      <section id='features' className="h-lgh bg-cover bg-center flex grow w-full">       
        <Image
          src={layers2Image}
          alt='layers2'
        />
      </section>
      <section id='clients' className="h-lgh bg-cover bg-center flex grow w-full"></section>
      <section id='testimonials' className="h-lgh bg-cover bg-center flex grow w-full">Test 5</section>
      <section id='latestnews' className="h-lgh bg-cover bg-center flex grow w-full">Test 6</section>
      <section id='igfeed' className="h-lgh bg-cover bg-center flex grow w-full"></section>
      <section id='contactus' className="h-lgh bg-cover bg-center flex grow w-full">Test 7</section>
    </main>
  )
}
