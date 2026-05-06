import React from 'react';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const navigate = useNavigate();
    return (
        <div className="font-body-md bg-background selection:bg-primary-container selection:text-white">
            <header className="fixed top-0 left-0 w-full z-50 flex items-center px-6 h-16 bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-[0_20_40px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-4 w-full">
                    <button className="active:scale-95 transition-transform duration-200 hover:bg-white/5 p-2 rounded-full flex items-center justify-center text-[#FF5F1F]" onClick={() => navigate('/login')}>
                        <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                    </button>
                    <h1 className="font-headline-md text-[#FF5F1F] tracking-tight">Verification</h1>
                </div>
            </header>
            <main className="min-h-screen flex flex-col items-center justify-center px-container-padding pt-16 pb-12 relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-secondary-container/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="w-full max-w-md space-y-section-gap z-10">
                    <div className="w-full h-48 rounded-2xl overflow-hidden relative group">
                        <img alt="Lumina Kitchen Interior" className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110" data-alt="A moody, high-end interior of a contemporary culinary space called Lumina Kitchen." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6eceDF7lZLCylnjXt5NZjD7_QH-iDa1OJOS_EoDtlHtgFheKmo3zocXEKpHqF9R_ZS9tVAS4t7JXbOhIJ0MR3aG49hSM0FfduMQKHmLSTH_RZezvzqEb4wdkqAk1PM6_w0I_m2Y8ul7AwaI_o6Yd0fWcDngQ3mD6qSjoFHugywDJUgconY1tFd5iFLbjnYfY5BsNDz24s3ZNt9bLWFFdiOVCvd_fqqiT4ccf6m87CuRn5lBaoLyub-1TarEcJxh6jUXFMPMd46-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                        <div className="absolute bottom-4 left-6">
                            <span className="text-xs font-label-md tracking-widest text-[#FF5F1F] uppercase mb-1 block">Lumina Kitchen</span>
                            <h2 className="text-white font-headline-lg">Nocturne Dining</h2>
                        </div>
                    </div>
                    <div className="glass-card rounded-[24px] p-8 space-y-stack-lg shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                        <div className="space-y-stack-sm text-center md:text-left">
                            <h2 className="font-headline-lg text-on-surface">Verification Code</h2>
                            <p className="font-body-md text-on-surface-variant/80">We've sent a 6-digit code to your phone number.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-2 sm:gap-4 py-stack-md">
                            {[...Array(6)].map((_, i) => (
                                <input key={i} className="w-full aspect-square text-center font-headline-md glass-input rounded-xl focus:border-[#FF5F1F] focus:ring-1 focus:ring-[#FF5F1F] text-white outline-none transition-all active:scale-95" maxLength={1} placeholder="•" type="text" />
                            ))}
                        </div>
                        <div className="pt-stack-md space-y-stack-md">
                            <button className="w-full h-14 bg-[#FF5F1F] text-white font-headline-md rounded-2xl flex items-center justify-center shadow-lg shadow-[#FF5F1F]/20 active:scale-[0.96] transition-all duration-300" onClick={() => navigate('/home')}>
                                Verify & Proceed
                            </button>
                            <div className="flex flex-col items-center justify-center space-y-stack-sm">
                                <p className="font-body-md text-on-surface-variant/60">Didn't receive the code?</p>
                                <button className="font-label-md text-[#FF5F1F] hover:text-[#FF7F4F] transition-colors flex items-center gap-1 group">
                                    Resend Code
                                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1" data-icon="refresh">refresh</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-8 opacity-30 grayscale contrast-125">
                        <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA_dZDs1k7HmATE5U-I4Y8Yt9nYkg_7V3NkuZAhvwfyKWcXurJS1A9rNtlql0K7-XtvhD5kyfTsMVWn2C9nTYYYJIaVdAvP2wbOuHS6Am22CmS2goPD5LHufU_L8YPwD8B6ke7pVWVaWPyRatmkM3ZjqsFHO4NGJUcLqfwwvQLcwMg6tilepiBywPN1pNvttEIuTcbfdsg-siaAABB9HwM0S5hhhZImfy1Q5wTrAVAOz1_mGOzhMJLL28Dptze7F6v2gPZy4berzw" alt="Cocktail" />
                        <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClAGqs3NRwLqrIF6lboq89OFlXWW9Px1JUa7CuZwp6Z2ACj_FNdWjAx_qiJrUuDubT7mwbjAAR8z763jVCcnKaa_jnDVdJ1O-WhRdMnKR5bVoipDV8SvodA0048tZ87ty8JS8bEZ1oNtd4lC68v8WvcB10QrKtneFoEzH2kjwhLBczsM9CzySK4Yjt5T9RoYT3_PEvoP_uflxZ3EDLvRbyZR_Sqsex2qLpPrMWkhSJOhnxXIm3sSZ0Yn2PHNJMYmCkrJ9LW2ACLFA" alt="Dessert" />
                        <img className="w-12 h-12 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApsEZ__tTBMYOw7Z_KB3-Zniyq-isKCYY3gG7PpJPnvSAIiUsglNaLlOHhlXbnb99JKD_9fW-nWPdOfMph0lCOVbg__pSaFBPsT4pt__Q2qWUBw9C_T231Q6qENFN0Q3nKMzIhce0niS6bkmVmv7rn9KKZOkSbkT-tY-raeoJ04Xl4J8YZ3IWCalEI0Wuq6RmOVbHPMJMtyov610FaDImInb_sH0kOus4nK1g4MevCsG_HQp5IxS-1lRaBCqkkWWlLyTTOHPF7oE" alt="Ingredients" />
                    </div>
                </div>
            </main>
            <div className="hidden fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl items-center justify-center p-8">
                <div className="text-center space-y-stack-lg">
                    <div className="w-24 h-24 bg-primary-container rounded-full mx-auto flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-5xl" data-icon="check_circle" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                    <div className="space-y-stack-sm">
                        <h3 className="font-headline-xl text-white">Verified</h3>
                        <p className="font-body-lg text-on-surface-variant">Welcome back to Lumina Kitchen.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verify;
