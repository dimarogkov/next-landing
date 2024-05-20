import { StaticImageData } from 'next/image';
import { ListItem } from './ListItem';
import { IconType } from 'react-icons';

export interface Data {
    label?: string;
    title?: string;
    text?: string;
    price?: number;
    list?: ListItem[];
    icon?: IconType;
    img?: {
        src: StaticImageData;
        name: string;
    };
    btn?: {
        href: string;
        name: string;
    };
}
