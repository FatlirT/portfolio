'use client';
import { useState } from "react";

const Toggle = ({ defPref, defOption, altOption }: { defPref: boolean; defOption: string; altOption: string; }) => {

    const [isDefault, setIsDefault] = useState(defPref);

    const handleToggleClick = () => {
        setIsDefault(!isDefault);
    };

    return (

        <div onClick={handleToggleClick} className="hover:cursor-pointer hover:bg-dark-acc/20 active:bg-dark-acc/90 active:border-2 active:border-white border-2 border-transparent toggle-container bg-dark-acc/60 px-3 py-2 text-sm font-medium flex w-fit">
            <div className={`toggle-switch bg-light-acc active:bg-light-acc active:m-[-2px] active:border-2 ${isDefault ? '' : 'alt'}`}></div>
            <div>
                <label className="toggle-label hover:cursor-pointer">{defOption} {altOption}</label>
            </div>
        </div >
    );
};
export default Toggle;