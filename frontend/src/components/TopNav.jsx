import React from "react";
import { Link } from "react-router-dom";
export default function TopNav() {
    return (
        <header className="fixed top-0 w-full z-50 bg-black/80 dark:bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60">
            <div className="flex justify-between items-center px-6 h-20 max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-orange-600 dark:text-orange-500 hover:opacity-80 transition-opacity duration-300 cursor-pointer active:scale-95">location_on</span>
                    <span className="text-xl font-black tracking-tighter text-orange-600 dark:text-orange-500 uppercase font-epilogue">LUMINA KITCHEN</span>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-600/30 hover:opacity-80 transition-opacity duration-300 cursor-pointer active:scale-95">
                    <Link to={"/profile"}>
                    <img className="w-full h-full object-cover" data-alt="close-up portrait of a professional man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pXoQa2R-V8mv6yQAMPdExmHdWhoctGwbr_ENqdR5aMR1DtNTFhenV8ywQZGi_GOfA4T0vUsD6LMPt44RNzbE1slXZnbPGMMqWbESOvkFXuDjFY31YknJahLULq2C3SCZct3I7JFugDqV4PSNAeXnKe1w28UuacIzMwcYuYDJrkVJQIabtxr5eV925ClVaUkpzjDEC_jLqtsHC7-s-AiA-A4Q3kjx2tIhiQn8O2AvIDXnx5aPZU5SciZNY0UyBhjwHq5EjJuF0xY" />
                    </Link>
                </div>
            </div>
        </header>
    );
}