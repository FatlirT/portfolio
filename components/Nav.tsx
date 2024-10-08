'use client';
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import FT from "./svg/FT";


const Nav = () => {

    const { setTheme, resolvedTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8 w-full mx-auto overflow-x-clip flex flex-row justify-between">
                <div className="sm:mx-0 mx-4 relative flex w-full h-16 items-center justify-between">


                    <div className="items-center flex">
                        <div className="flex flex-shrink-0 items-center ">
                            <a href="/"><FT className="h-4 w-auto drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)]" />
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="items-center flex space-x-4">
                                <a href="/#skills" className="hover:drop-shadow-lg drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)] active:bg-foreground/60 hover:bg-foreground/40 rounded-md px-3 py-2 text-sm font-medium">Skills</a>
                                <a href="/#projects" className="hover:drop-shadow-lg drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)] active:bg-foreground/60 hover:bg-foreground/40 rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                <a href="/articles" className="hover:drop-shadow-lg drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)] active:bg-foreground/60 hover:bg-foreground/40 rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Articles</a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block"><ThemeToggle mode={resolvedTheme} toggleMode={setTheme}></ThemeToggle></div>


                    <div className="inset-y-0 left-0 flex items-center sm:hidden">

                        {/* <!-- Mobile menu button--> */}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-foreground/45 hover:drop-shadow-md active:bg-foreground/70 active:border-2 active:m-[-2px] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)]" onClick={handleToggleClick} aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>

                            {/* <!-- Icon when menu is closed. Menu open: "hidden", Menu closed: "block" --> */}
                            <svg className={`mob-menu icon ${isOpen ? "close" : ""} h-6 w-6 mob-menu`} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path className="mob-menu icon bar" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75" />
                                <path className="mob-menu icon bar" stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5" />
                                <path className="mob-menu icon bar" stroke-linecap="round" stroke-linejoin="round" d="M3.75 17.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className={`pb-12 w-full absolute opacity-0 sm:hidden mob-menu tray ${isOpen ? "block anim" : "hidden"}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="/#skills" className="w-full hover:bg-foreground/30 active:bg-foreground/50 active:border-2 active:border-white border-transparent border-2 box-border block rounded-md px-3 py-2 text-base font-medium  drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)] hover:drop-shadow-md">Skills</a>
                    <a href="/#projects" className="w-full hover:bg-foreground/30 active:bg-foreground/50 active:border-2 active:border-white border-transparent border-2 box-border block rounded-md px-3 py-2 text-base font-medium drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)] hover:drop-shadow-md" aria-current="page">Projects</a>
                    <a href="/articles" className="w-full hover:bg-foreground/30 active:bg-foreground/50 active:border-2 active:border-white border-transparent border-2 box-border block rounded-md px-3 py-2 text-base font-medium drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.8)] hover:drop-shadow-md" aria-current="page">Articles</a>
                    <div className="sm:hidden px-3 py-2">
                        <ThemeToggle mode={resolvedTheme} toggleMode={setTheme}></ThemeToggle>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Nav;