'use client';
import React from 'react';
/* Hooks */
import { useIsMobile } from './hooks/useDevice'

/* Components - desktop */
import Header from './components/Desktop/Header';
import BodyContent from './components/Desktop/BodyContent';
import Footer from './components/Desktop/Footer';

/* Components - desktop */
import HeaderMobile from './components/Mobile/HeaderMobile';
import FooterMobile from './components/Mobile/FooterMobile';

/* Components - ui */
import FloatingMenu from './components/ui/FloatingMenu';

export default function Home() {

  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <>
        <Header />
        <FloatingMenu />
        <div className="pt-[110px]">
          <BodyContent />
        </div>
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