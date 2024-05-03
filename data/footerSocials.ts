import { FooterSocial } from '@/types/interfaces/FooterSocial';

import X from '@/public/footer_x.svg';
import Facebook from '@/public/footer_facebook.svg';
import Feed from '@/public/footer_feed.svg';

export const footerSocials: FooterSocial[] = [
    {
        id: 0,
        src: X,
        name: 'x',
    },
    {
        id: 1,
        src: Facebook,
        name: 'facebook',
    },
    {
        id: 2,
        src: Feed,
        name: 'feed',
    },
];
