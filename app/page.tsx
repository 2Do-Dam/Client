'use client';

import React from 'react';
import ClientProviders from './ClientProviders';
import Header from '../components/layout/Header';


export default function Home() {
  return (
    <ClientProviders>
      <main>
        <Header />
      </main>
    </ClientProviders>
  );
}
