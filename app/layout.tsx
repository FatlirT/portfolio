import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FatlirT\'s Portfolio',
  description: 'Fatlir Topalli, Computer Science MSci, Software, DevSecOps, Data Engineer'
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="overflow-x-hidden" suppressHydrationWarning lang="en">
      <body className={`${inter.className} flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden`}>
        <Providers>
          <nav className="z-50 mb-16 w-full sticky backdrop-blur bg-gradient-to-b from-white/10 to-white/0">
            <Nav></Nav>
          </nav>
          <main id="main" className="drop-shadow-2xl overflow-visible flex flex-col items-center justify-between w-full max-w-7xl mx-auto px-16 mb-16">
            {children}
          </main>
          <footer className="w-full shadow">
            <Footer></Footer>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
