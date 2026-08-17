'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <Button onClick={() => setTheme('light')} variant={'ghost'}>
            <Sun className="w-2 h-2"/>
        </Button>
    }

    return (
        <Button variant={'ghost'} onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
            {theme === 'light' ? <Moon className="w-2 h-2"/> : <Sun className="w-2 h-2"/>}
        </Button>
    )
}