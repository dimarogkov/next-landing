import { BannerLogos } from '@/types/interfaces/BannerLogos';

import Google from '@/public/banner_google.svg';
import Slack from '@/public/banner_slack.svg';
import Trustpilot from '@/public/banner_trustpilot.svg';
import Cnn from '@/public/banner_cnn.svg';
import Clutch from '@/public/banner_clutch.svg';

export const bannerLogos: BannerLogos[] = [
    {
        id: 0,
        src: Google,
        name: 'google',
    },
    {
        id: 1,
        src: Slack,
        name: 'slack',
    },
    {
        id: 2,
        src: Trustpilot,
        name: 'trustpilot',
    },
    {
        id: 3,
        src: Cnn,
        name: 'cnn',
    },
    {
        id: 4,
        src: Clutch,
        name: 'clutch',
    },
];
