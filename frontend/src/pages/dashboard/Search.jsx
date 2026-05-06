import React from "react";
import { useNavigate } from "react-router-dom";
import Botton from "../../components/Botton";

export default function Search() {
    const navigate = useNavigate();
    
    const categories = [
        { title: "Italian", count: 24, delay: 200, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsgvJMio8Q8upW2-gkr-dGG1NdKQPks1UiI2q4-zy2gehpTEuZ-9JDu4dEpWi2xV9blAvlAYWIdrpdYloXsvd7S5IEmnS6wsXoAjY-0u2ivIWTJ0WnjnrLdEeeP8NaPpdJJY8Y5-CrRtEfEnJRTSg0ojE3DxgMycGkNZ4PRE6lFEjIQ0cMCXwyOT0ynWFLuPfmDBLFwltSTJHNr-TeHtkRAOriVSOqSSKxwtsfQCgQVeO8vN61x52LT0uE7dNnSHr8jJ5Icpkzb6A" },
        { title: "Japanese", count: 18, delay: 300, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHnlut7f891hi7UX68AWDoG9T1O6fq9GZw6D_wzUydXiEHwfXmgT-wO1mT75N2aNPmp3o-FiZaWt1MF7TpqW0Wu0xQc_NHJv19yBdCRpvpCmAggG0DFlfQ458iVAz0qW16F2HoFdSCMf8oR4lXnWaHsGr1Kdep0cW_tNz56AJy340lWQLc06ksrxjWROZISRJeyBUlItu6a6diC_6Up0mkXXpIGd1_pELo1RQ2HLKcgERZFSY4BaTJE752bsD0tBgsjXEtjFSKamk" },
        { title: "Mexican", count: 32, delay: 400, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhRQsoz48GhqFIbgtX8L9ebaoIVQLgSeGBZ9m213D6W0WNhzT55ggroYWZArYFWijOHYJEGBZrfZZjaOs-7R5XgAQ6qMyq39e_Ou4HKr7SjMHS-OHW0uuQZh1OwsbRTyyeVFutbzmTTVXHq0A2xwbh7qRds115Wrg_6GhutGErBwnJcpitL3pP705zehG2bUAW-7Jk36_A08GlHYeqzAvnoWrCN3PZxKYYC_HkWZIgM2whnzvhXl00oPPbjdj9hRd0yDosIQK95-w" },
        { title: "French", count: 12, delay: 500, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBobdWY_KaGCxL-3wh1wapyz5hKmkMnAqpnjMu1X73arUE67mqPDocewcD6w1kbbyTLHXfgQRwU86RMKHAbRnIIAiCzstrUJozOhdYcKOBljaenD34m1-KM0VwYSr-wcOiozIfqHYFUSboLhUgdggIPWFQ9nxk5FNBIMg579rDQlsByt5BCIAXUq6T2CVOpgBF86ZWcEWroiKgZdSgSGySmRZTgYaNbXpupCx9GiIFVbOqw5V77A-5wmRjJIwJHaTUecZNHlciNCfk" },
        { title: "Indian", count: 20, delay: 600, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFEx0WTq5SaNd1tGp2STeJQ1yOAqy0CVziXi2TKgRO_iLJxrqW8Eahcf1BSgcjcc-6Xl74CSZNRzaHFBYYrOZYBSjP881AsN5T5uXoKYwpsfS9AT9nrKsSGMkI8g9Sg_JmaX22ggS5XM5BTFM5HMzD1cOMapF1YBp_iY5N23sn6LBLwPRXHkEtBeZqyGDE2z3YgjgLdP4hLMYDix3W_GH3dJdUgb-NgdoDVpzm_3XdubGL5ViM68t7iKPRyZ3ctJl36io2vPZwg6M" },
        { title: "Mediterranean", count: 15, delay: 700, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtoDRoBPdbsXKDdSmCIQbFKeMlYyFsdgvgWhcjnhAGwLl_rs_EWilPUMNt2-9qnO292kuYNdojTGZ4k1I6uWsEMsBb2e5OreKxns26JhEceiPvBXTWftEmW2Yg30FyVebLvwPOZDYeUZxMC3oi7tF-Hhj1GS3WWoVi5wN87um9PpFEEzDj2z9mQuIZIoeY-fqE-Y6yrOJRwaluw9EpuV-FOUZbwiJg7htJ88149xx-_z2lu_vPrAsjn-5kD8C-G_OgCUDkQY-eFvQ" },
    ];

    return (
        <div className="bg-black text-on-background font-body-md min-h-screen pb-32">
            <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 flex justify-between items-center px-6 h-16">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="active:scale-95 transition-all duration-200 ease-out text-orange-500 flex items-center justify-center">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </button>
                    <h1 className="font-epilogue font-bold tracking-tight text-xl text-white">Explore Cuisines</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button className="hover:scale-95 transition-transform duration-300 text-orange-500">
                        <span className="material-symbols-outlined">search</span>
                    </button>
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
                        <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgRPlhI9lPfUlkZIEmkWdNkjVAFb0uelLpPS0ssiR412LQjR3vNgK14uNuEjSQQm39QOgLg2TbyGsrpQbTwopJI063IhSoLPNxyjh7zUzwqH9zVBi85ahiXorrOAV1GoRM--xmwiob1eT-FsQNFfnkTK21FBQPyiXY-d8TnN9M_2yKBt5RRuEbq4zNrguu4pkCOtqGC0tJux87KWRrmTrNc1ey9kWQUFDRryf-5UpgIYlI4J9qUDMnD-K62yuBzrzfYFiJbttmd7w" />
                    </div>
                </div>
            </header>
            
            <main className="mt-24 px-6 max-w-5xl mx-auto">
                <div className="mb-stack-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-zinc-500 group-focus-within:text-orange-500 transition-colors">search</span>
                        </div>
                        <input className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-body-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all backdrop-blur-md outline-none" placeholder="Search for flavors, dishes, or restaurants..." type="text"/>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <div key={index} className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass-card animate-fade-in-up active:scale-95 transition-transform duration-300 bg-white/5 border border-white/10" style={{ animationDelay: `${cat.delay}ms` }}>
                            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={cat.img} alt={cat.title} />
                            <div className="absolute inset-0 category-overlay flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                <h3 className="font-headline-md text-white">{cat.title}</h3>
                                <p className="font-label-md text-orange-500 uppercase tracking-widest text-[10px]">{cat.count} RESTAURANTS</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Botton />
        </div>
    );
}