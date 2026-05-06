import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Botton() {
    const location = useLocation();
    const pathname = location.pathname;

    const navItems = [
        { path: "/home", icon: "home", label: "Home" },
        { path: "/search", icon: "search", label: "Search" },
        { path: "/order", icon: "receipt_long", label: "Orders" },
        { path: "/profile", icon: "person", label: "Profile" },
    ];

    return (
        <nav className="fixed bottom-0 w-full z-50 rounded-t-[32px] bg-black/90 dark:bg-black/95 backdrop-blur-2xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
            <div className="flex justify-around items-center h-24 pb-6 px-8 w-full">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link key={item.path} to={item.path}>
                            <div className={`flex flex-col items-center justify-center transition-all duration-300 cursor-pointer active:scale-90 ${isActive ? 'scale-105' : 'opacity-60 text-neutral-500 hover:text-white'}`}>
                                <span 
                                    className={`material-symbols-outlined transition-all duration-300 ${isActive ? 'active-glow' : ''}`}
                                    style={{ fontVariationSettings: isActive ? '"FILL" 1' : '"FILL" 0' }}
                                >
                                    {item.icon}
                                </span>
                                <span className={`font-epilogue text-[10px] font-bold uppercase tracking-widest mt-1 transition-all duration-300 ${isActive ? 'active-glow-text' : ''}`}>
                                    {item.label}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}