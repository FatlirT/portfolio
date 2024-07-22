'use client';
import { useEffect, useState } from "react";
import Toggle from "./Toggle";

const ThemeToggle = ({ mode, toggleMode }: { mode: string | undefined, toggleMode: Function; }) => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const handleToggleClick = () => {
        toggleMode(mode === 'light' ? 'dark' : 'light');
    };

    const defaultOption = { name: "light", symbol: "☀️" };
    const altOption = { name: "dark", symbol: "🌙" };


    return (
        <Toggle onClick={handleToggleClick} mode={mode} defOption={defaultOption} altOption={altOption}></Toggle>
    );
};
export default ThemeToggle;