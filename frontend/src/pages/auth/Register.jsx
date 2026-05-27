import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if (!name || !email || !password) {
            setError("Please fill out all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();

            if (response.ok) {
                navigate("/login");
            } else {
                setError(data.message || "An error occurred during registration.");
            }
        } catch (err) {
            setError("An error occurred during registration.");
        }
    }

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
                        <img alt="Welcome visual" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <h2 className="font-headline-lg text-headline-lg text-white mb-1">Create account</h2>
                            <p className="font-body-md text-on-surface-variant/80">Register to access Restro</p>
                        </div>
                    </div>
                    <div className="glass-panel1 p-8 rounded-2xl shadow-xl">
                        <form className="space-y-stack-md" onSubmit={handleRegister}>
                            {error && (
                                <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
                                    {error}
                                </div>
                            )}
                            <div className="space-y-3">
                                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider px-1" htmlFor="name">
                                    Full name
                                </label>
                                <div className="relative flex items-center group">
                                    <input
                                        className="w-full bg-surface-container-low border border-white/10 rounded-xl px-4 py-4 text-on-background placeholder:text-white/20 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all outline-none text-lg"
                                        id="name"
                                        placeholder="Enter your full name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider px-1" htmlFor="email">
                                    Email
                                </label>
                                <div className="relative flex items-center group">
                                    <input
                                        className="w-full bg-surface-container-low border border-white/10 rounded-xl px-4 py-4 text-on-background placeholder:text-white/20 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all outline-none text-lg"
                                        id="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider px-1" htmlFor="password">
                                    Password
                                </label>
                                <div className="relative flex items-center group">
                                    <input
                                        className="w-full bg-surface-container-low border border-white/10 rounded-xl px-4 py-4 text-on-background placeholder:text-white/20 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all outline-none text-lg"
                                        id="password"
                                        placeholder="Enter your password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider px-1" htmlFor="confirmPassword">
                                    Confirm password
                                </label>
                                <div className="relative flex items-center group">
                                    <input
                                        className="w-full bg-surface-container-low border border-white/10 rounded-xl px-4 py-4 text-on-background placeholder:text-white/20 focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all outline-none text-lg"
                                        id="confirmPassword"
                                        placeholder="Re-enter your password"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button className="w-full bg-primary-container text-white font-bold py-4.5 rounded-xl shadow-lg shadow-primary-container/20 spring-interaction hover:brightness-110 active:brightness-90 transition-all mt-6 text-lg" type="submit">
                                Register
                            </button>
                            <div className="text-sm text-on-surface-variant/80 text-center mt-3">
                                Already have an account? <button className="text-primary underline ml-1" onClick={() => navigate('/login')}>Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[140px] -z-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
            <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-secondary-container/5 blur-[120px] -z-10 rounded-full -translate-x-1/3 translate-y-1/3"></div>
        </div>
    );
};

export default Register;