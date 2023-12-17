import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Inter } from 'next/font/google';

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
      <body className={inter.className}>
        <nav className="sticky backdrop-blur bg-gradient-to-b from-black/40 to-black/50 ">
          <Nav></Nav>
        </nav>
        {children}</body>
    </html>
  );
}
