'use client';

import React from 'react';
import ClientProviders from './ClientProviders';
import Header from '../components/layout/Header';
import HeroSection from '@/components/layout/HeroSection';
import ServiceSection from '@/components/layout/ServiceSection';
import CreatorSection from '@/components/layout/CreatorSection';
import StarterSection from '@/components/layout/StarterSection';

export default function Home() {
  return (
    <ClientProviders>
      <main>
        <Header />
        <HeroSection />
        <ServiceSection />
        <CreatorSection />
        <StarterSection />
      </main>
    </ClientProviders>
  );
}
