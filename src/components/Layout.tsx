import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({
  children
}: LayoutProps) {
  const location = useLocation();
  // Pages that start with a transparent header/hero section
  const isHeroPage = location.pathname === '/' || location.pathname.includes('/destination/') || location.pathname === '/destinations' || location.pathname === '/services' || location.pathname === '/about' || location.pathname === '/experiences' || location.pathname === '/blogs' || location.pathname === '/contact';
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
      <Navbar />

      {/* 
        For Hero pages, we don't add top padding so the hero image can go under the transparent navbar.
        We ensure it fills at least the screen height.
      */}
      <main className={`flex-grow flex flex-col ${isHeroPage ? '' : 'pt-20'}`}>
        {children}
      </main>

      {!isHomePage && <Footer />}
    </div>
  );
}