import React from 'react';

export default function AdminHeader({ 
    navigate, 
    activeTab, 
    setActiveTab, 
    editingId, 
    setEditingId, 
    setFormData, 
    defaultCategory 
}) {
    return (
        <>
            {/* Top Navigation Bar */}
            <header className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 shadow-2xl">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={() => navigate('/home')} 
                            className="material-symbols-outlined text-neutral-400 hover:text-white transition-colors cursor-pointer active:scale-90"
                        >
                            arrow_back
                        </button>
                        <span className="material-symbols-outlined text-orange-500 font-variation-settings-'FILL'1">restaurant_menu</span>
                        <div>
                            <span className="text-lg font-black tracking-tight text-white uppercase font-epilogue">Lumina Kitchen</span>
                            <span className="hidden sm:inline-block ml-3 px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded bg-orange-500/10 text-orange-500 border border-orange-500/20">Admin Panel</span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => navigate('/home')}
                        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors font-medium text-sm px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 active:scale-95"
                    >
                        <span className="material-symbols-outlined text-sm">home</span>
                        Exit Portal
                    </button>
                </div>
            </header>

            {/* Tab Navigation Menu */}
            <div className="max-w-7xl mx-auto px-6 mt-6">
                <div className="flex bg-neutral-900/50 p-1.5 rounded-2xl border border-white/5 max-w-md">
                    <button 
                        onClick={() => {
                            setActiveTab('create');
                            setEditingId(null);
                            setFormData({
                                name: '',
                                description: '',
                                price: '',
                                image: '',
                                category: defaultCategory || 'Italian',
                                trending: false,
                                available: true,
                                makeTime: '',
                                rating: 5
                            });
                        }}
                        className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${activeTab === 'create' && !editingId ? 'bg-orange-500 text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                    >
                        <span className="material-symbols-outlined text-sm">add_circle</span>
                        Add Food
                    </button>
                    {editingId && (
                        <button 
                            onClick={() => setActiveTab('create')}
                            className="flex-1 py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 bg-orange-500/30 text-orange-400 border border-orange-500/20"
                        >
                            <span className="material-symbols-outlined text-sm">edit</span>
                            Editing Item
                        </button>
                    )}
                    <button 
                        onClick={() => setActiveTab('manage')}
                        className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${activeTab === 'manage' ? 'bg-orange-500 text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                    >
                        <span className="material-symbols-outlined text-sm">list_alt</span>
                        Manage Menu
                    </button>
                </div>
            </div>
        </>
    );
}
