import React, { useState, useEffect } from "react";
import TopNav from "../../components/TopNav";
import Botton from "../../components/Botton";
import { useNavigate } from "react-router-dom";
import Trending from "../../components/Trending";

const API_BASE = import.meta.env.VITE_BACKEND_API || import.meta.env.BACKEND_API || 'http://localhost:5000';

export default function Home() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch(`${API_BASE}/api/categories`);
            const data = await response.json();
            if (Array.isArray(data)) {
                setCategories(data);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleCategoryClick = (id) => {
        setActiveCategory(activeCategory === id ? null : id);
    };
    return (
        <div className="bg-black min-h-screen text-white">
            <TopNav />
            <div className="pt-28 px-container-padding max-w-7xl mx-auto space-y-section-gap pb-32">
                <section className="relative">
                    <div className="glass-card rounded-xl p-1 flex items-center shadow-lg bg-white/5 backdrop-blur-xl border border-white/10">
                        <div className="pl-4 pr-3 text-neutral-500">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input className="bg-transparent border-none focus:ring-0 w-full py-4 text-on-surface placeholder:text-neutral-500 font-body-md outline-none" placeholder="Search for flavors, restaurants..." type="text" />
                        <button onClick={() => navigate("/menu")} className="bg-primary-container text-white px-6 py-3 rounded-lg font-label-md mr-1 hover:opacity-90 active:scale-95 transition-all">
                            Discover
                        </button>
                    </div>
                </section>

                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-headline-md text-headline-md text-on-surface">Categories</h2>
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 -mx-container-padding px-container-padding scroll-smooth no-scrollbar">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryClick(category.id)}
                                className={`flex-shrink-0 py-3 px-6 rounded-2xl font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer active:scale-95 border ${activeCategory === category.id ? 'bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-white/5 border-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'}`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="space-y-stack-lg">
                    <div className="flex items-center justify-between">
                        <h2 className="font-headline-md text-headline-md text-on-surface">Trending Now</h2>
                    </div>
                    <div className="grid gap-stack-lg">
                        <Trending />
                    </div>
                </section>

                <section className="relative h-48 rounded-[32px] overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
                    <img className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Xjt81ovdnRfLfY5YLxpzqD06v_UiYkIVOUAFhZWIqs2Bm9O_COWXHkCouLvSHfRg8K0ToQNMS1ZQxCKi0uT5EODV8RLJy6d3V_MTquZtgvLf1hhoSEuDUr-rGdKsbFOPrmso2NzEfhqqo8MgqlcCCJSlLvOlT4TXocEgQQCONlf-B_3oZJ-9YY1FBppIJ1GJzlATOD_WSqXEdydW8hEewniJme05Ax5MKD3CbxBYSz33bvtn2m2QPJLEfB8Hut6Lh4h1sopj6hQ" alt="Smoke House" />
                    <div className="absolute inset-0 z-20 flex flex-col justify-center px-10">
                        <p className="text-orange-500 font-label-md tracking-widest uppercase mb-2">Exclusive Release</p>
                        <h2 className="text-headline-lg font-headline-lg text-white max-w-xs leading-tight">THE SMOKE HOUSE SERIES</h2>
                        <div className="mt-4 flex items-center gap-2 text-white/60 font-body-md">
                            <span>Limited time offer</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            <span>Starts tonight 9 PM</span>
                        </div>
                    </div>
                </section>
            </div>
            <Botton />
        </div>
    );
}
