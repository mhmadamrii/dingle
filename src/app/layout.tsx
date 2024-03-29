import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { ConfettiProvider } from '~/components/providers/confetti-provider';
import { ToastProvider } from '~/components/providers/toaster-provider';
import Provider from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Minimalist Lms System',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}

// https://www.youtube.com/watch?v=Big_aFLmekI&t=2647s
