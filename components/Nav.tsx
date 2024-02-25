'use client';
import Image from "next/image";
import Toggle from "./Toggle";
import { useState } from "react";

const Nav = () => {

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
                            <a href="/"><Image className="h-8 w-auto drop-shadow-[0.1rem_0_0.25rem_#00011099]" src="/images/ft.png" alt="Fatlir Topalli logo"
                                width="100" height="100" />
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="items-center flex space-x-4">
                                <a href="#" className="drop-shadow-[0.1rem_0_0.25rem_#00011099] hover:bg-gray-700  rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                <a href="#" className="drop-shadow-[0.1rem_0_0.25rem_#00011099] hover:bg-slate-700  rounded-md px-3 py-2 text-sm font-medium" aria-current="page">About me</a>
                                <a href="#" className="drop-shadow-[0.1rem_0_0.25rem_#00011099] hover:bg-slate-700  rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Articles</a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden sm:block"><Toggle defOption="☀️" altOption="🌙"></Toggle></div>


                    <div className="inset-y-0 left-0 flex items-center sm:hidden">

                        {/* <!-- Mobile menu button--> */}
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-900/50 dark:hover:bg-neutral-900/80 active:bg-[#252a30ab] active:border-2 active:m-[-2px] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={handleToggleClick} aria-controls="mobile-menu" aria-expanded="false">
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
            <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                    <a href="#" className="w-full hover:bg-slate-900/50 dark:hover:bg-neutral-900/80 active:bg-[#252a30ab] active:border-2 active:border-white border-transparent border-2 box-border block rounded-md px-3 py-2 text-base font-medium active:text-neutral-200">About me</a>
                    <a href="#" className="w-full hover:bg-slate-900/50 dark:hover:bg-neutral-900/80 active:bg-[#252a30ab] active:border-2 active:border-white border-transparent border-2 box-border block rounded-md px-3 py-2 text-base font-medium active:text-neutral-200" aria-current="page">Projects</a>
                    <div className="sm:hidden px-3 py-2">
                        <Toggle defOption="☀️" altOption="🌙"></Toggle>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Nav;