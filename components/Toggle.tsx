'use client';
import { useState } from "react";

const Toggle = ({ defOption, altOption }: { defOption: string; altOption: string; }) => {

    const [isDefOpt, setIsDefOpt] = useState(false);

    const handleToggleClick = () => {
        setIsDefOpt(!isDefOpt);
    };

    return (

        <div onClick={handleToggleClick} className="hover:bg-neutral-600 active:bg-[#252a30ab] active:border-2 active:m-[-2px] toggle-container px-3 py-2 text-sm font-medium flex">
            <div className={`toggle-switch hover:bg-white active:bg-[#a3a3a3] active:m-[-2px] active:border-2 ${isDefOpt ? 'toggle-switch-anim' : 'toggle-switch-anim-reverse'}`}></div>
            <div>
                <label className="toggle-label">{defOption} {altOption}</label>
            </div>
        </div>
    );
};
export default Toggle;