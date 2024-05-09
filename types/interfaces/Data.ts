import { StaticImageData } from 'next/image';
import { ListItem } from './ListItem';

export interface Data {
    label?: string;
    title?: string;
    text?: string;
    price?: number;
    list?: ListItem[];
    img?: {
        src: StaticImageData;
        name: string;
    };
    btn?: {
        href: string;
        name: string;
    };
}
