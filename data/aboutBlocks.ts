import { AboutColorType } from '@/types/enums/AboutColorType';
import { AboutBlock } from '@/types/interfaces/AboutBlock';

import AboutOne from '@/public/about_1.svg';
import AboutTwo from '@/public/about_2.svg';
import AboutThree from '@/public/about_3.svg';

export const aboutBlocks: AboutBlock[] = [
    {
        id: 0,
        data: {
            label: 'Sales Monitoring',
            title: 'Simplify your sales monitoring',
            text: 'Stay on top of things and revamp your work process with our game-changing feature. Get a birds eye view with our customizable dashboard.',
            list: [
                { id: 0, text: 'Lorem ipsum dolor sit amet' },
                { id: 1, text: 'Consectetur adipiscing elit' },
                { id: 2, text: 'Sed do eiusmod tempor incididunt ut labore' },
            ],
            img: {
                src: AboutOne,
                name: 'about',
            },
            btn: {
                href: '/',
                name: 'Learn More',
            },
        },
        colorType: AboutColorType.blue,
    },
    {
        id: 1,
        data: {
            label: 'Customer Support',
            title: 'Get in touch with your customers',
            text: 'Stay on top of things and revamp your work process with our game-changing feature. Get a birds eye view with our customizable dashboard.',
            list: [
                { id: 0, text: 'Lorem ipsum dolor sit amet' },
                { id: 1, text: 'Consectetur adipiscing elit' },
                { id: 2, text: 'Sed do eiusmod tempor incididunt ut labore' },
            ],
            img: {
                src: AboutTwo,
                name: 'about',
            },
            btn: {
                href: '/',
                name: 'Learn More',
            },
        },
        colorType: AboutColorType.green,
    },
    {
        id: 2,
        data: {
            label: 'Growth Monitoring',
            title: 'Monitor your site’s new subscribers',
            text: 'Stay on top of things and revamp your work process with our game-changing feature. Get a birds eye view with our customizable dashboard.',
            img: {
                src: AboutThree,
                name: 'about',
            },
            btn: {
                href: '/',
                name: 'Learn More',
            },
        },
        colorType: AboutColorType.pink,
    },
];
