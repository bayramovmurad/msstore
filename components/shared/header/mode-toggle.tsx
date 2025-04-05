"use client";

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoonIcon, SunIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";




export const ModeToggle = () => {

    const [mounted, setMounted] = useState(false); 
    const {theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    },[]);

    if(!mounted) {
        return null;
    }
    
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0">
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant="ghost" onClick={() => setTheme("light")}>
            <SunIcon /> Light
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button variant="ghost" onClick={() => setTheme("dark")}>
            <MoonIcon /> Dark
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button variant="ghost" onClick={() => setTheme("system")}>
            <SunMoon /> System
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}