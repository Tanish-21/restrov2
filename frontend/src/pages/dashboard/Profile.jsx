import React from "react";
import Botton from "../../components/Botton";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();

    const onHandleout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <div className="bg-black text-white font-body-md min-h-screen pb-32">
            <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 flex justify-between items-center px-6 h-16">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="active:scale-95 transition-all duration-200 ease-out text-orange-500 flex items-center justify-center">
                        <span className="material-symbols-outlined">arrow_back_ios</span>
                    </button>
                    <h1 className="font-epilogue font-bold tracking-tight text-xl text-white">Profile</h1>
                </div>
            </header>
            
            <main className="pt-24 px-6 max-w-2xl mx-auto flex flex-col items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500/30 mb-6 shadow-2xl shadow-orange-500/10">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgRPlhI9lPfUlkZIEmkWdNkjVAFb0uelLpPS0ssiR412LQjR3vNgK14uNuEjSQQm39QOgLg2TbyGsrpQbTwopJI063IhSoLPNxyjh7zUzwqH9zVBi85ahiXorrOAV1GoRM--xmwiob1eT-FsQNFfnkTK21FBQPyiXY-d8TnN9M_2yKBt5RRuEbq4zNrguu4pkCOtqGC0tJux87KWRrmTrNc1ey9kWQUFDRryf-5UpgIYlI4J9qUDMnD-K62yuBzrzfYFiJbttmd7w" alt="User" />
                </div>
                <h2 className="text-2xl font-headline-lg mb-1">{localStorage.getItem("user") || "User"}</h2>
                
                <div className="w-full space-y-4">
                    <div className="glass-card p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-orange-500">settings</span>
                            <span className="font-label-md">Account Settings</span>
                        </div>
                        <span className="material-symbols-outlined text-neutral-600">chevron_right</span>
                    </div>
                    <div className="glass-card p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-orange-500">notifications</span>
                            <span className="font-label-md">Notifications</span>
                        </div>
                        <span className="material-symbols-outlined text-neutral-600">chevron_right</span>
                    </div>
                    <div className="glass-card p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-orange-500">payment</span>
                            <span className="font-label-md">Payment Methods</span>
                        </div>
                        <span className="material-symbols-outlined text-neutral-600">chevron_right</span>
                    </div>
                    <button onClick={onHandleout} className="w-full mt-8 p-4 rounded-xl bg-white/5 border border-red-500/30 text-red-500 font-label-md hover:bg-red-500/10 transition-all">
                        Sign Out
                    </button>
                </div>
            </main>
            <Botton />
        </div>
    );
}