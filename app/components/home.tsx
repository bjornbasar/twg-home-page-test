import logoImage from '../assets/Logo.svg'
import menuImage from '../assets/Menu.svg'
import downArrowImage from '../assets/ArrowDown.svg'
import rightArrowImage from '../assets/ArrowRight.svg'
import Image from 'next/image'
import TextButton from './text-button/text-button'
import PillButton from './pill-button/pill-button'

export default function HomePage() {
    return (
        <section className='h-lvh bg-cover bg-center w-full'>
            <section id='header' className='flex flex-row grow justify-items-stretch mx-7 mt-16 h-5 md:h-9'>
                <section id='logo' className='w-1/2 md:w-2/3'>
                    <Image
                    src={logoImage}
                    alt='Logo'
                    priority
                    />
                </section>
                <section id='buttons' className='w-1/2 md:w-1/3 flex justify-end'>
                    <section className='w-1/4 flex justify-end text-sm'><TextButton>Search</TextButton></section>
                    <section className='w-1/4 flex justify-end text-sm'><TextButton>Login</TextButton></section>
                    <section className='w-1/4 flex justify-end hidden md:flex text-sm'>
                    <TextButton>EN &nbsp;<Image
                    src={downArrowImage}
                    alt='Logo'
                    priority
                    /></TextButton>
                    </section>
                    <section className='w-1/4 flex justify-end text-md'>
                    <TextButton>
                        <Image
                        src={menuImage}
                        alt='Logo'
                        priority
                        />
                    </TextButton>
                    </section>
                </section>
            </section>
            <section id='banner' className='my-16 md:my-32 w-3/6 items-center ml-7 h-48'>
                <section className='text-md md:text-2xl'><h6>Sea it all</h6></section>
                <section className='text-2xl md:text-6xl'><h1>MULTIBEAM SONAR PRODUCTS & SOLUTIONS.</h1></section>
            </section>
            <section id='footer' className='px-12 bottom-2 absolute md:right-0 grid md:grid-cols-6 grid-rows-2 w-full md:w-auto'>
                <section className='md:col-start-2 md:ml-48 mb-4 md:mb-auto'>
                    <section className='w-48 text-xs md:text-sm'>WASSP multi-beam enables sustainable fishing, exploration, and surveys with versatility and detail.</section>
                </section>
                <section className='md:col-end-7'><PillButton height='50px'>Contact Us <Image src={rightArrowImage} priority alt='Contact us'/></PillButton></section>
            </section>
        </section>
    )
}