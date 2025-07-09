'use client';

import React from 'react';
import ClientProviders from './ClientProviders';
import Header from '../components/layout/Header';
import HeroSection from '@/components/layout/HeroSection';


export default function Home() {
  return (
    <ClientProviders>
      <main>
        <Header />
        <HeroSection />
      </main>
    </ClientProviders>
  );
}
