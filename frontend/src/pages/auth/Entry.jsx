import React from 'react';
import { useNavigate } from 'react-router-dom';

const Entry = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className="bg-black text-on-surface font-body-md antialiased overflow-hidden">
<main className="relative h-screen w-full flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10"></div>
<img alt="Gourmet dish" className="w-full h-full object-cover animate-zoom" data-alt="high-contrast close-up of a molecular gastronomy dish on a dark ceramic plate with dramatic pinpoint lighting and deep shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOmr-2u4cMn-0WYsC0WS6JPU7ORvl91enPKvI1b55GWJ78i8oHLElBnlzY9hxiH8aOJJpOodjr9So6bbIr7O_aqGoKk-_kuZdun9zguFyuEB7uPRSPvLVp7zfqIfjd46Vysry09hVRurrtiminUiHfeBDdeg6DafsO-4Qe8Oey1q-ZznvWUzFgAxq8BWT7LgkA5GQUSIFRKSldG-IlCD_dkZLyKWkNB7yuVjJmT-PlCY3BkKyNmSFEykLF9BDncJzF1v9sOHDvtqk"/>
</div>
<header className="relative z-20 flex justify-center items-center h-20 px-6 mt-8 animate-fade-up">
<div className="flex flex-col items-center">
<span className="font-headline-lg text-headline-lg tracking-tighter text-primary-container uppercase font-black">
                    LUMINA KITCHEN
                </span>
<div className="h-0.5 w-12 bg-primary-container mt-1"></div>
</div>
</header>
<div className="relative z-20 flex flex-col items-center text-center px-container-padding pb-24 max-w-2xl mx-auto">
<div className="space-y-stack-md animate-fade-delayed">
<h1 className="font-headline-xl text-headline-xl text-white tracking-tight leading-none">
                    Exquisite Flavors <br/>
<span className="text-primary-fixed">Delivered</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant/80 max-w-sm mx-auto">
                    Experience the pinnacle of late-night culinary artistry from the comfort of your sanctuary.
                </p>
</div>
<div className="mt-stack-lg w-full max-w-xs animate-fade-delayed" style={{ animationDelay: '0.8s' }}>
<button 
    onClick={() => navigate('/verify')}
    className="group relative w-full bg-primary-container py-5 rounded-xl font-headline-md text-white overflow-hidden active:scale-95 transition-transform duration-300 shadow-[0_20px_40px_rgba(255,95,31,0.3)]">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Get Started
                        <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
</span>
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<div className="mt-stack-md flex justify-center items-center gap-4 text-on-surface-variant/60">
<span className="h-px w-8 bg-white/10"></span>
<p className="font-label-md text-label-md uppercase tracking-widest">Reserved for You</p>
<span className="h-px w-8 bg-white/10"></span>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
</main>
</div>
        </>
    );
}

export default Entry