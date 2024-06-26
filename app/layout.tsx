import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/blocks/Header';
import Footer from '@/components/blocks/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next Landing',
    description: 'Generated by Dmytro Rogkov',
};

type Props = {
    children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
