// src/app/layout.tsx
"use client"; // Ensure this is at the top

import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Poppins } from "next/font/google";
import SousFooter from '../components/SousFooter';
import Providers from '../components/Providers';
import SessionProviderWrapper from '../components/SessionProviderWrapper';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProviderWrapper>
          <Header />
          <Providers>{children}</Providers>
          <Footer />
          <SousFooter />
        </SessionProviderWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
