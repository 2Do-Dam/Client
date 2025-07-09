'use client';

import React from 'react';
import ClientProviders from './ClientProviders';
import Header from '../components/layout/Header';
import HeroSection from '@/components/layout/HeroSection';


/**
 * Renders the main landing page layout with header and hero sections, wrapped in client-side providers.
 *
 * Displays the `Header` and `HeroSection` components within a `<main>` element, ensuring client-side context is available.
 */
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
