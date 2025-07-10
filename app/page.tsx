'use client';

import { useState } from 'react';
import React from 'react';
import ClientProviders from './ClientProviders';
import Header from '../components/layout/Header';
import HeroSection from '@/components/layout/HeroSection';
import ServiceSection from '@/components/layout/ServiceSection';
import CreatorSection from '@/components/layout/CreatorSection';
import StarterSection from '@/components/layout/StarterSection';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    setMousePosition({ x, y });
  };
  
  return (
    <ClientProviders>
      <main>
        <Header />
        <div
          style={{
            height: '100vh',
            overflowY: 'scroll',
            scrollSnapType: 'y mandatory',
          }}
        >
          <div id="section1" style={{ height: '100vh', scrollSnapAlign: 'start' }}>
            <HeroSection />
          </div>
          <div id="section2" style={{ height: '100vh', scrollSnapAlign: 'start' }}>
            <ServiceSection />
          </div>
          <div id="section3" style={{ height: '100vh', scrollSnapAlign: 'start' }}>
            <CreatorSection />
          </div>
          <div id="section4" style={{ height: '100vh', scrollSnapAlign: 'start' }}>
            <StarterSection />
          </div>
        </div>
      </main>
    </ClientProviders>
  );
}
