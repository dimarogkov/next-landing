import { StaticImageData } from 'next/image';

export type AboutListItem = {
    id: number;
    text: string;
};

export type AboutData = {
    label?: string;
    title?: string;
    text?: string;
    list?: AboutListItem[];
    img?: {
        src: StaticImageData;
        name: string;
    };
    btn?: {
        href: string;
        name: string;
    };
};

export interface AboutBlock {
    id: number;
    data: AboutData;
    colorType: string;
}
