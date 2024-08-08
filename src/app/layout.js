import { ClerkProvider } from '@clerk/nextjs';
import { Outfit } from 'next/font/google';

import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import '@toast-ui/editor/dist/toastui-editor.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Gemini Content Wizard',
  description:
    'This is a content generator app created with the help of NextJS and Google Gemini where user can generate content across various topics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={outfit.className}>

          <Toaster />

          {children}
          
        </body>
      </ClerkProvider>
    </html>
  );
}
