'use client';
import React from 'react';
/* Hooks */
import { useIsMobile } from './hooks/useDevice'

/* Components */
import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';
import FloatingMenu from './components/FloatingMenu';
import Footer from './components/Footer';
import FooterMobile from './components/FooterMobile';

export default function Home() {

  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <>
        <Header />
        <FloatingMenu />
        <main className="">
            <div className="h-[200vh] bg-gray-50">
            </div>
          </main>
        <Footer />
      </>
    )
  }
  return (
    <>
      <HeaderMobile />
      {/* push content below the fixed header */}
      <main className="">
        <div className="relative h-[200vh] bg-gray-50">
          {/* you can replace this with your real content */}
        </div>
      </main>
      <FooterMobile />
    </>
    );
}