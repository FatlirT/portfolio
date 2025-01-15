import React, { ImgHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface props extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string,
    href: string;
    children: ReactNode;
}

const LinkMy = ({ className, href, children }: props) => {
    return (
        <Link className={className + " hover:text-my-blue"} href={href} >{children}</Link>
    );
};

export default LinkMy;