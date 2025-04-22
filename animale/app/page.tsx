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
import BodyContentMobile from './components/Mobile/BodyContentMobile';

/* Components - ui */
import FloatingMenu from './components/ui/FloatingMenu';
import BannerMobile from './components/ui/BannerMobile';

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
      <div className="pt-[110px] bg-[#E6E6E6]">
        <BannerMobile />
      </div>
      <BodyContentMobile />
      <FooterMobile />
    </>
    );
}