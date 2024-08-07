'use client';

import { useEffect, useState } from "react";

const Splash = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hasPlayedAnimation = localStorage.getItem('hasPlayedAnimation');

        if (!hasPlayedAnimation) {
            setVisible(true);
            localStorage.setItem('hasPlayedAnimation', 'true');
        }
    }, []);

    return visible && (
        <div className="splash flex w-full flex-row items-center justify-center">
            <svg width="1000" height="300" viewBox="-400 -100 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className="drop-shadow-lg" id="FT">
                    <path className="fill-my-blue" id="T" d="M166.008 15.88C166.008 20.8293 163.533 23.304 158.584 23.304H134.392V93.448C134.392 98.4827 131.917 101 126.968 101H111.352C110.499 101 110.072 100.659 110.072 99.976V23.304H78.712C78.0293 23.304 77.688 22.8773 77.688 22.024V9.73599C77.688 4.95733 80.1627 2.56799 85.112 2.56799H165.112C165.709 2.56799 166.008 2.90933 166.008 3.592V15.88Z" fill="#00C0FF" />
                    <path id="F" d="M72.192 14.088C72.192 17.16 71.6373 19.2933 70.528 20.488C69.504 21.6827 67.4987 22.28 64.512 22.28L24.448 22.536V41.608L54.656 41.736C56.192 41.736 56.96 42.3333 56.96 43.528V59.016C56.96 60.296 56.192 61.1067 54.656 61.448H24.448V97.032C24.448 99.6773 22.528 101 18.688 101H3.584C2.90133 101 2.56 100.701 2.56 100.104V10.12C2.56 4.91466 4.77867 2.312 9.216 2.312H68.224C70.8693 2.312 72.192 3.25066 72.192 5.128V14.088Z" fill="white" />
                </g>
            </svg>

        </div>
    );
};

export default Splash;


