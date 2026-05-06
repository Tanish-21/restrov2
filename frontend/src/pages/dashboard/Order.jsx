import React from 'react';
import Botton from '../../components/Botton';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-black text-on-surface font-body-md min-h-screen">
            <header className="fixed top-0 w-full px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 z-50">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="active:scale-95 duration-300 ease-out text-white/70 hover:opacity-80 transition-opacity flex items-center justify-center">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 className="font-['Epilogue'] font-bold tracking-tight text-[#FF5F1F] text-xl">My Orders</h1>
                </div>
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-white/70">search</span>
                </div>
            </header>

            <main className="pt-24 pb-32 px-gutter space-y-stack-lg max-w-2xl mx-auto">
                <section className="flex gap-stack-sm overflow-x-auto pb-2 no-scrollbar">
                    <span className="px-6 py-2 rounded-full bg-primary-container text-white font-label-md whitespace-nowrap">All Orders</span>
                    <span className="px-6 py-2 rounded-full glass-card text-white/60 font-label-md whitespace-nowrap">In Progress</span>
                    <span className="px-6 py-2 rounded-full glass-card text-white/60 font-label-md whitespace-nowrap">Completed</span>
                </section>
                
                <div className="space-y-gutter px-4">
                    {/* Order Item 1 */}
                    <div className="glass-card rounded-xl p-6 ambient-glow group bg-white/5 border border-white/10 mb-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-high">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfpesOL0HPTAO2YGqgju-BidDOFXZ9o-T1HtT5cMUcXLMMZ2l3SMM9OqzbcwnT81HVsJJMp_M0fkIrZ1XfYaGh2TP2bE4PE6CEPNKxAlqUmILrPvidElbSIFYZgwc_rlBISqARw0gpWJdvCS_M5SN3dsbxF5akTpqalm314qZtPX9iFraXDpqrbmMfGPycN6JmzFuC_eITJoeVQynJ8F8E2SCXBxatPAb2PLea1rTmuhmXo-y_E6RrY6qFAfPbwo-OkjA0IPNP-3g" alt="Onyx Lounge" />
                                </div>
                                <div>
                                    <h3 className="font-headline-md text-white leading-tight">The Onyx Lounge</h3>
                                    <p className="text-white/50 font-label-md mt-1">Oct 12, 2023 • 21:45</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-[#FF5F1F] font-headline-md block">$84.20</span>
                                <span className="text-green-400 font-label-md flex items-center justify-end gap-1">
                                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                                    Delivered
                                </span>
                            </div>
                        </div>
                        <div className="border-t border-white/5 pt-4 mt-4">
                            <p className="text-white/70 font-body-md line-clamp-1">Black Truffle Tagliatelle, Wagyu Sliders, Midnight Martini...</p>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <button className="flex-1 py-3 rounded-xl bg-[#FF5F1F] text-white font-headline-md text-sm active:scale-[0.96] transition-all duration-300 shadow-lg shadow-[#FF5F1F]/20">
                                Reorder
                            </button>
                            <button className="px-4 py-3 rounded-xl glass-card text-white/80 font-label-md active:scale-[0.96] transition-all duration-300 border border-white/10">
                                Details
                            </button>
                        </div>
                    </div>

                    {/* Order Item 2 */}
                    <div className="glass-card rounded-xl p-6 ambient-glow group bg-white/5 border border-white/10 mb-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex gap-4">
                                <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-high">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_7rw59s0s9m6ymA0YG8CLwnu3TR6MjqPj2rsS0X1BVj9NseKSlVN-nND4WV7uJlAmqnB_lJS4RvRZfgTcR0YKPq5LpIRh7KTjVIRfuI8iZnfcr4d1a0MgKMK2bLbD1HGQ35pPSoEtufpS5_da0Xjra50i3mgLjqr-g00f_k0uMkIdktq3Y6KAwR5ZdkK6pTcj10TsHvlNyvu3WGKaYH-WRcgcqHqSso10MlcOXweMmqueIEFFl0JDYklGUMxwEXzdj2-jSSmSnyo" alt="Trattoria Bella" />
                                </div>
                                <div>
                                    <h3 className="font-headline-md text-white leading-tight">Trattoria Bella</h3>
                                    <p className="text-white/50 font-label-md mt-1">Oct 08, 2023 • 19:12</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-[#FF5F1F] font-headline-md block">$42.50</span>
                                <span className="text-green-400 font-label-md flex items-center justify-end gap-1">
                                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>check_circle</span>
                                    Delivered
                                </span>
                            </div>
                        </div>
                        <div className="border-t border-white/5 pt-4 mt-4">
                            <p className="text-white/70 font-body-md line-clamp-1">Wild Mushroom Risotto, Garlic Focaccia, Tiramisu Noir</p>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <button className="flex-1 py-3 rounded-xl bg-[#FF5F1F] text-white font-headline-md text-sm active:scale-[0.96] transition-all duration-300 shadow-lg shadow-[#FF5F1F]/20">
                                Reorder
                            </button>
                            <button className="px-4 py-3 rounded-xl glass-card text-white/80 font-label-md active:scale-[0.96] transition-all duration-300 border border-white/10">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Botton />
        </div>
    );
};

export default Order;