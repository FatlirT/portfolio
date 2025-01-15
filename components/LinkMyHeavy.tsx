import React, { ImgHTMLAttributes, ReactNode } from 'react';
import LinkMy from './LinkMy';

interface props extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string,
    href: string;
    children: ReactNode;
}

const LinkMyHeavy = ({ className, href, children }: props) => {
    return (
        <LinkMy className={className + 'hover:underline'} href={href} >{children}</LinkMy>
    );
};

export default LinkMyHeavy;