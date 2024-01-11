'use client'
import Image from "next/image";
import PillButton from "./pill-button/pill-button";
import layersImage from '../assets/Layers.svg'
import rightArrowImage from '../assets/ArrowRight.svg'
import { useScroll, animated, useSpring } from "@react-spring/web";
import React from "react";

export default function About() {
  return (
    <div className='relative'>
      <section className='absolute top-0 left-0 w-1/3' style={{ top: '-150px' }}>
        <Image
          src={layersImage}
          alt='layers1'
          className='max-w-sm md:max-w-xl h-full object-cover'
        />
      </section>
      <animated.div className='grid grid-cols-6'>
        <section className='col-start-3 col-span-3 md:mt-60'>
          <animated.div className='text-6xl'><h1>Welcome to the world of WASSP Multibeam</h1></animated.div>
          <animated.div className='text-xs grid grid-cols-10 mt-8'>
            <section className="word"><h6>01</h6></section>
            <section className="word"><h6>about WASSP</h6></section>
            <section className='col-span-5 col-end-11'>
              <section className="word">WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep exploration, offers unparalleled accuracy, detail, and versatility. Target fish with steerable sounders, generate real-time 3D charts, map fish in water, and make better decisions with the user-friendly advanced mode.</section>
              <section className='mt-6'>
                <PillButton height="50px">Our Story <Image src={rightArrowImage} priority alt='Our Story'/></PillButton>
              </section>
            </section>
          </animated.div>
        </section>
      </animated.div>
    </div>
  );
}