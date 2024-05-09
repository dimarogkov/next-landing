import { PricingBlock } from '@/types/interfaces/PricingBlock';

export const pricingBlocks: PricingBlock[] = [
    {
        id: 0,
        data: {
            label: 'Free Trial',
            text: 'Perfect for testing the waters',
            price: 0,
            list: [
                { id: 0, text: 'Lorem ipsum dolor sit amet' },
                { id: 1, text: 'Sed do eiusmod tempor incididunt' },
                { id: 2, text: 'Consectetur adipiscing elit' },
            ],
            btn: {
                href: '/',
                name: 'Start Trial',
            },
        },
        isActive: false,
    },
    {
        id: 1,
        data: {
            label: 'Business',
            text: 'Perfect for small businesses',
            price: 299,
            list: [
                { id: 0, text: 'Lorem ipsum dolor sit amet' },
                { id: 1, text: 'Sed do eiusmod tempor incididunt' },
                { id: 2, text: 'Consectetur adipiscing elit' },
                { id: 3, text: 'Lorem ipsum dolor sit amet last' },
            ],
            btn: {
                href: '/',
                name: 'Start Trial',
            },
        },
        isActive: true,
    },
    {
        id: 2,
        data: {
            label: 'Enterprise',
            text: 'Perfect for big companies',
            price: 500,
            list: [
                { id: 0, text: 'Lorem ipsum dolor sit amet' },
                { id: 1, text: 'Sed do eiusmod tempor incididunt' },
                { id: 2, text: 'Consectetur adipiscing elit' },
                { id: 3, text: 'Lorem ipsum dolor sit amet last' },
                { id: 4, text: 'Consectetur adipiscing elit' },
            ],
            btn: {
                href: '/',
                name: 'Start Trial',
            },
        },
        isActive: false,
    },
];
