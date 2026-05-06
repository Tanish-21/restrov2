import React from "react";
import TopNav from "../../components/TopNav";
import Botton from "../../components/Botton";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
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
                    <div className="flex items-center justify-between mb-stack-lg">
                        <h2 className="font-headline-md text-headline-md text-on-surface">Categories</h2>
                        <span className="text-orange-500 font-label-md cursor-pointer hover:underline">View All</span>
                    </div>
                    <div className="flex gap-gutter overflow-x-auto pb-4 -mx-container-padding px-container-padding scroll-smooth no-scrollbar">
                        <div className="flex-shrink-0 group cursor-pointer text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-stack-sm border-2 border-transparent group-hover:border-orange-500 transition-all duration-300 active:scale-90">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp4nUDrgJRP0C6bn2Bz05zOx1pmDw_6VTDktmW4SPMebJvcZqLz19DNjLssq-UjRGoKv_gM-k_tiFNho4mCOioYZ32C98RDfRT-VdWFMO6qocDTUSPms5Ez6ZI-FR3uX6dVLwmc4nMO6VxkhetbBWnzd61fYRDW7uhC68tuzypKCdRcixazGkJQYLnfdJbYzSmLavwvgmXIdcxq4d1uppo9Dv_ARSV04MwFnegsEx87gn83JjEagkFtrAe45HkB_MNQbPbWM8NCHs" alt="Italian" />
                            </div>
                            <p className="font-label-md text-on-surface-variant group-hover:text-orange-500 transition-colors">Italian</p>
                        </div>
                        <div className="flex-shrink-0 group cursor-pointer text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-stack-sm border-2 border-orange-500 bg-orange-500/10 transition-all duration-300 active:scale-90">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXqNZdLIOS4bZ9XPwiGprI2UPFBiFHUSR6io-lQHh22ax1KvgfrSbYYwzh_ZOsCBuq7N3BO4fM3IqrWfpVy4Hk7nTwfBmZk6okJ5D8hHLLW0tW3MseYv96lNGXDKR1vFfLZr_mtXTPUVTskABaL07ftQPL2m0G8DlDNl84CB0NAKlF-WV9NIsch_aKjKlxsR7D-DAM9qp2LXIjLO9YGi5GIQmq4WadGidEcLw7P-h9qy__vOxjcWdlLq0ydozeEgOoIm32J5lqVKI" alt="Sushi" />
                            </div>
                            <p className="font-label-md text-orange-500">Sushi</p>
                        </div>
                        <div className="flex-shrink-0 group cursor-pointer text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-stack-sm border-2 border-transparent group-hover:border-orange-500 transition-all duration-300 active:scale-90">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8ndVwBGDSy9Ek92fQjAXm2v8A7B01bqBhyNi2frwS9E9w8SF-c1TTG2eP470HjlqwOVbzBgrl-DwULKHljx9v35tyGWbmkWIjdLMh3T8leUHaAialrNtrk342RuK_fiWSAWQIYp6gvxVo8EfKjkXpbA15bg5YMd5mVlzt4rVCJqMjf8obOk-rV-f7B6y0XGxodIQDpV-Tis6RZVqGr8hqUFAZKhR_Mu4d6eobi_ivVYqGyO3Bg1bvh-pck0d6gPsLM7LzrAUchXo" alt="Burgers" />
                            </div>
                            <p className="font-label-md text-on-surface-variant group-hover:text-orange-500 transition-colors">Burgers</p>
                        </div>
                        <div className="flex-shrink-0 group cursor-pointer text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-stack-sm border-2 border-transparent group-hover:border-orange-500 transition-all duration-300 active:scale-90">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrGPPFyYEXc8lwBqR2wtFbFdyTmq2uWnRXasFnyCfcznMux2sxaWJKcdzHpRxrOBfwFd4aS25ovu_OGqBuJaMZyWvzgMUnFaPhs5CQGNo5I3c14M0gsN-VC4iorMn-6WG9jYE5hJ_dM5w3xeracDvhXBkYPmRGF9PYiZnIpBOsbvNOcDqk1GsXvg6kKc0lbKNgydTaCi3xGUNzejMbIi_8pyF2ZdZh6gbPMpw7iEzPwqpMX5LxnC6K5vOrfg9JqYH-fyXzU220MfU" alt="Steaks" />
                            </div>
                            <p className="font-label-md text-on-surface-variant group-hover:text-orange-500 transition-colors">Steaks</p>
                        </div>
                    </div>
                </section>

                <section className="space-y-stack-lg">
                    <div className="flex items-center justify-between">
                        <h2 className="font-headline-md text-headline-md text-on-surface">Trending Now</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                        {/* Card 1 */}
                        <div className="glass-card rounded-[32px] overflow-hidden group cursor-pointer hover:shadow-orange-900/20 hover:shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
                            <div className="h-64 relative overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuc29B72KE1s_emgu1Hfc98uuZMWOa2OhaDi2AOqfEP6Dr4oy9eSCQGceqz2asLYcrC-94k98BLCHVtwx7CRePXNnkja09s45RuRCpMIN3aBFNsO3-3k3bYVTGr2o1W53qDWWF9bViiEZyqB2Z4SfGRRqxW-nEctMlQZYK31KuYgahgcVeOnT3U8kmxc8vJb_80CRiI_h2ov0Hdd8C6b0Zbrm7hguVw8YExWO6Arn5jBjCqpiPQB38C-bGHXIMO7Q2MYuf_T18Nek" alt="Sushi" />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                                    <span className="material-symbols-outlined text-orange-500 text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                                    <span className="text-white font-label-md">4.9</span>
                                </div>
                                <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-4 py-1 rounded-full font-label-md shadow-lg">
                                    Premium Pick
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline-md text-headline-md text-white">The Onyx Lounge</h3>
                                    <span className="text-neutral-400 font-label-md">25-35 min</span>
                                </div>
                                <p className="text-neutral-500 font-body-md mb-6">Signature Omakase • Japanese • Rare Sakes</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="glass-card rounded-[32px] overflow-hidden group cursor-pointer hover:shadow-orange-900/20 hover:shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
                            <div className="h-64 relative overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsRQPVzpUUYLAoDKsgYBo6MyS4FpQHkUHCP0C8hs-m3ryJunayP0mZeTNUhuypHVa5glRkq2lvffr5OsBE0ypgJPTKkzrj9NjDLoWdBgAcXOIYzyHuwQLNMRrQwC6mat6T5upnvSQw8dNL_2YbhwwTKVX2_55sZDLvTbB2fAgKy6x2ILCDbvT3b_AiBA6LMgDiObAf3tDaA4wo0E9XVb6OEP3clXG95A-SAmNTjM8RaZm0ubo7KyJZ2ZVD3unO1-UkJD7nD5Gakbo" alt="Pizza" />
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                                    <span className="material-symbols-outlined text-orange-500 text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                                    <span className="text-white font-label-md">4.7</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-headline-md text-headline-md text-white">Veloce Pizza</h3>
                                    <span className="text-neutral-400 font-label-md">15-20 min</span>
                                </div>
                                <p className="text-neutral-500 font-body-md mb-6">Wood-fired • Italian • Quick Delivery</p>
                            </div>
                        </div>

                        {/* Featured Card */}
                        <div className="md:col-span-2 glass-card rounded-[32px] overflow-hidden group cursor-pointer flex flex-col md:flex-row hover:shadow-orange-900/20 hover:shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
                            <div className="h-64 md:h-auto md:w-1/2 relative overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdTXCk88hIlX5vmyGxkbdpAvHvCTmaPvm76ZS_tzkqdwaE-DVwLw3EdpfTIIyU2cXMjDwvUA23ttklhEtSvkc2-skw5Ic0PIOBII21OWzP0snlKJBmzVT68YXRYHvryY26ssmA50UrAqIoP4CseorxQ5J6-CxRIgzfhzoy4pVHWd_i2aA8wClcQK3t7dwC6p-7E5gbn5W8Kv8R5fF0tzJbWrs86aoY1VJI41ysalOJsnD2GGSRpnUbsA8EWeoCpr6NGy61gLxVYkI" alt="Burger" />
                                <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-1 rounded-full font-label-md shadow-lg">
                                    Local Favorite
                                </div>
                            </div>
                            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-headline-xl text-headline-lg text-white mb-1">Iron & Bun</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                                            <span className="text-white font-label-md">4.8 (2.4k+ reviews)</span>
                                        </div>
                                    </div>
                                    <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-2 rounded-2xl font-label-md">30-45 min</span>
                                </div>
                                <p className="text-neutral-400 font-body-lg mb-8">Specializing in dry-aged beef patties and house-made truffle aioli. Our burgers are flame-grilled to perfection.</p>
                                <button className="bg-white text-black font-headline-md px-8 py-4 rounded-2xl w-full md:w-max hover:bg-orange-500 hover:text-white transition-all active:scale-95">
                                    Order Now
                                </button>
                            </div>
                        </div>
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