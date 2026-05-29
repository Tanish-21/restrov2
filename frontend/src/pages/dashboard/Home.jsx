import React from "react";
import TopNav from "../../components/TopNav";
import Botton from "../../components/Botton";
import { useNavigate } from "react-router-dom";
import Foods from "../../components/Foods";

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
                    <div className="grid gap-stack-lg">
                        <Foods />
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