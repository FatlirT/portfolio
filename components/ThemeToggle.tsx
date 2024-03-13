'use client';
import { useEffect, useState } from "react";
import Toggle from "./Toggle";
import { useTheme } from "next-themes";

const ThemeToggle = () => {

    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const handleToggleClick = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
    };

    if (!mounted) return (
        <p>ThemeToggle</p>
    );


    return (

        <div onClick={handleToggleClick}>
            <Toggle defPref={resolvedTheme === 'light' ? true : false} defOption="☀️" altOption="🌙"></Toggle>
        </div>
    );
};
export default ThemeToggle;