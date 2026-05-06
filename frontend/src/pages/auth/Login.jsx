import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#000000] text-on-background font-body-md min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
            <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 h-16 bg-black/40 backdrop-blur-md">
                <div className="flex items-center">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 active:scale-95 transition-all text-primary" onClick={() => navigate('/')}>
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2">
                    <h1 className="text-primary font-black tracking-widest text-lg font-headline-md">Restro</h1>
                </div>
                <div className="w-10"></div>
            </header>
            <main className="flex-grow flex items-center justify-center px-container-padding pt-24 pb-12">
                <div className="w-full max-w-sm space-y-stack-lg">
                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl group">
                        <img alt="Premium dining visual" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAO3J8dpSNz9JK4gql2CKh0HMzm931TVCBmwkAojczjCOszkUUT1-aWf5mlIf9oglRJ21QGQa--5FvAQU6rhm4OYdR6SHWwkqZ1DSOv3MRIPIq6-w9Z7bD6TNlIliWIh3TSPR3cj_Axdmv6a9-6M6T0296ARtN5fMMryhS1UCnfaQOtnt02UHl4V3L9ITumMTkxzJrkXcv9MmprCC5xmH0AJs6-e0IuO3hxtYNuy-BI4krJopLn8h7Iq4k_Pglk44qqzOvYJsuKI4" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <h2 className="font-headline-lg text-headline-lg text-white mb-1">Welcome</h2>
                            <p className="font-body-md text-on-surface-variant/80">Sign in to Lumina Kitchen</p>
                        </div>
                    </div>
                    <div className="glass-panel1 p-8 rounded-2xl shadow-xl">
                        <form className="space-y-stack-md" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-3">
                                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider px-1" htmlFor="mobile">
                                    Mobile Number
                                </label>
                                <div className="relative flex items-center group">
                                    <span className="absolute left-4 text-on-surface-variant font-body-md border-r border-white/10 pr-3">+91</span>
                                    <input className="w-full bg-surface-container-low border border-white/10 rounded-xl pl-16 pr-4 py-4 text-on-background placeholder:text-white/20 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all outline-none text-lg tracking-widest" id="mobile" maxLength={10} pattern="[0-9]{10}" placeholder="0000000000" required type="tel" />
                                </div>
                                <p className="text-[11px] text-on-surface-variant/50 px-1 leading-relaxed">
                                    A 6-digit verification code will be sent via SMS
                                </p>
                            </div>
                            <button className="w-full bg-primary-container text-white font-bold py-4.5 rounded-xl shadow-lg shadow-primary-container/20 spring-interaction hover:brightness-110 active:brightness-90 transition-all mt-6 text-lg" type="submit" onClick={() => navigate('/verify')}>
                                Send OTP
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[140px] -z-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-secondary-container/5 blur-[120px] -z-10 rounded-full -translate-x-1/3 translate-y-1/3"></div>
        </div>
    );
};

export default Login;
