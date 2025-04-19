'use client';
import React from 'react';
import Header from './components/Header';
import { useIsMobile } from './hooks/useDevice'
import HeaderMobile from './components/HeaderMobile';
import FloatingMenu from './components/FloatingMenu';

export default function Home() {

  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <>
        <Header />
        <FloatingMenu />
        <main className="pt-[140px]">
            {/* dummy div to force scrolling */}
            <div className="h-[200vh] bg-gray-50">
              {/* you can replace this with your real content */}
            </div>
          </main>
      </>
    )
  }
  return (
    <>
      <HeaderMobile />
      {/* push content below the fixed header */}
      <main className="pt-[140px]">
          <div className="h-[200vh] bg-gray-50">
            {/* you can replace this with your real content */}
          </div>
        </main>
    </>
    );
}