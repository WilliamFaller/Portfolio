import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

enum Tab {
  Home = '/',
  Project = 'projects',
  Studies = 'studies',
  About = 'about',
}

export const metadata: Metadata = {
  title: 'Portfolio - William Faller',
  description: 'Bem vindo ao meu portfolio!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-br">
      <body className="bg-zinc-800 text-white text-lg font-bold">
        {children}
      </body>
    </html>
  );
}
