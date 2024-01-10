import PageSection from './components/page-section'
import pageOneBg from './assets/01.jpg'
import { Typography } from '@mui/material'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageSection id='home' url={`url(${pageOneBg.src})`}>
        <section id='header' className='flex flex-row grow justify-items-stretch w-full'>
          <section id='logo' className='w-1/2'>Logo</section>
          <section id='buttons' className='w-1/2 flex justify-end'>
            <section className='w-1/4 flex justify-end'>Search</section>
            <section className='w-1/4 flex justify-end'>Login</section>
            <section className='w-1/4 flex justify-end hidden md:flex'>
              <Typography>EN</Typography>
            </section>
            <section className='w-1/4 flex justify-end'>=</section>
          </section>
        </section>
      </PageSection>
      <PageSection id='about'>Test 2</PageSection>
      <PageSection id='featured'>Test 3</PageSection>
      <PageSection id='features'>Test 4</PageSection>
      <section id='clients'></section>
      <PageSection id='testimonials'>Test 5</PageSection>
      <PageSection id='latestnews'>Test 6</PageSection>
      <section id='igfeed'></section>
      <PageSection id='contactus'>Test 7</PageSection>
    </main>
  )
}
