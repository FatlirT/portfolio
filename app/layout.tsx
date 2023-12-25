import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FatlirT\'s Portfolio',
  description: 'Fatlir Topalli, Computer Science MSci, Software, DevSecOps, Data Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center justify-center`}>
        <nav className="mb-16 w-full sticky backdrop-blur bg-gradient-to-b from-white/10 to-white/0">
          <Nav></Nav>
        </nav>
        {children}
        {/* <footer className="w-full max-w-3xl bg-white rounded-lg shadow m-4 dark:bg-gray-800">
          <Footer></Footer>
        </footer> */}
      </body>
    </html>
  );
}
