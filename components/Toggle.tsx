'use client';
import { useState } from "react";

const Toggle = ({ defOption, altOption }: { defOption: string; altOption: string; }) => {

    const [isDefault, setIsDefault] = useState(true);

    const handleToggleClick = () => {
        setIsDefault(!isDefault);
    };

    return (

        <div onClick={handleToggleClick} className="hover:cursor-pointer hover:bg-slate-900/50 dark:hover:bg-neutral-900/80 active:bg-[#252a30ab] active:border-2 active:border-white border-2 border-transparent toggle-container px-3 py-2 text-sm font-medium flex w-fit">
            <div className={`toggle-switch hover:bg-white active:bg-[#d5d5d5] active:m-[-2px] active:border-2 ${isDefault ? '' : 'alt'}`}></div>
            <div>
                <label className="toggle-label hover:cursor-pointer">{defOption} {altOption}</label>
            </div>
        </div >
    );
};
export default Toggle;