import { ServicesBlock } from '@/types/interfaces/ServicesBlock';

import { IoDocumentTextOutline } from 'react-icons/io5';
import { IoCardOutline } from 'react-icons/io5';
import { IoMedalOutline } from 'react-icons/io5';
import { IoBarChartOutline } from 'react-icons/io5';
import { IoTimeOutline } from 'react-icons/io5';
import { IoOptionsOutline } from 'react-icons/io5';

export const servicesBlocks: ServicesBlock[] = [
    {
        id: 0,
        data: {
            icon: IoDocumentTextOutline,
            title: 'Investment Banks',
            text: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
            btn: {
                href: '/',
                name: 'Read More',
            },
        },
    },
    {
        id: 1,
        data: {
            icon: IoCardOutline,
            title: 'Sales & Trading',
            text: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
            btn: {
                href: '/',
                name: 'Read More',
            },
        },
    },
    {
        id: 2,
        data: {
            icon: IoMedalOutline,
            title: 'Mortgage Loans',
            text: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
            btn: {
                href: '/',
                name: 'Read More',
            },
        },
    },
    {
        id: 3,
        data: {
            icon: IoBarChartOutline,
            title: 'Finance Analysis',
            text: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
            btn: {
                href: '/',
                name: 'Read More',
            },
        },
    },
    {
        id: 4,
        data: {
            icon: IoTimeOutline,
            title: 'Increased Efficiency',
            text: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
            btn: {
                href: '/',
                name: 'Read More',
            },
        },
    },
    {
        id: 5,
        data: {
            icon: IoOptionsOutline,
            title: 'Fundraising Advice',
            text: 'Until recently, the prevailing view asumed lorem ipsum was born as nonsense text.',
            btn: {
                href: '/',
                name: 'Read More',
            },
        },
    },
];
