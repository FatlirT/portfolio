'use client';
import { useState } from "react";

type Option = {
    name: string,
    symbol: string;
};

const Toggle = ({ onClick, mode, defOption, altOption }: { onClick: Function; mode: string; defOption: Option; altOption: Option; }) => {

    const handleToggleClick = () => {
        onClick();
    };

    return (

        <div onClick={handleToggleClick} className="hover:cursor-pointer hover:bg-dark-acc/20 active:bg-dark-acc/90 active:border-2 active:border-white border-2 border-transparent toggle-container bg-dark-acc/60 px-3 py-2 text-sm font-medium flex w-fit">
            <div className={`toggle-switch bg-light-acc active:bg-light-acc active:m-[-2px] active:border-2 ${mode === defOption.name ? '' : 'alt'}`}></div>
            <div>
                <label className="toggle-label hover:cursor-pointer">{defOption.symbol} {altOption.symbol}</label>
            </div>
        </div >
    );
};
export default Toggle;