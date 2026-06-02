import React from 'react';

export default function ManageMenu({
    foods,
    loadingFoods,
    searchTerm,
    setSearchTerm,
    selectedCategoryFilter,
    setSelectedCategoryFilter,
    categories,
    filteredFoods,
    handleEditClick,
    handleDeleteClick
}) {
    const availableCategories = categories.filter(cat => foods.some(f => f.category === cat));

    React.useEffect(() => {
        if (selectedCategoryFilter !== 'All' && !availableCategories.includes(selectedCategoryFilter)) {
            setSelectedCategoryFilter('All');
        }
    }, [foods, selectedCategoryFilter, availableCategories, setSelectedCategoryFilter]);

    return (
        <div className="lg:col-span-12 space-y-6 animate-fade-in-up">
            <div className="glass-card rounded-[32px] p-8 border border-white/10 shadow-2xl relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
                
                {/* Title & Stats */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-white font-epilogue mb-2">Manage Existing Menu</h1>
                        <p className="text-neutral-400 text-sm">View, search, filter, edit, or delete items from the Lumina Kitchen database.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/5 border border-white/5 px-4 py-2.5 rounded-2xl text-center min-w-[100px]">
                            <p className="text-neutral-400 text-[10px] uppercase font-bold tracking-wider mb-1">Total Items</p>
                            <p className="text-white text-xl font-bold">{foods.length}</p>
                        </div>
                        <div className="bg-white/5 border border-white/5 px-4 py-2.5 rounded-2xl text-center min-w-[100px]">
                            <p className="text-neutral-400 text-[10px] uppercase font-bold tracking-wider mb-1">Trending</p>
                            <p className="text-orange-500 text-xl font-bold">{foods.filter(f => f.trending).length}</p>
                        </div>
                    </div>
                </div>

                {/* Search & Category Filter */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
                    <div className="md:col-span-5 relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-[20px]">search</span>
                        <input 
                            type="text" 
                            placeholder="Search by name, description, category..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="glass-input rounded-2xl w-full pl-12 pr-4 py-3 text-white placeholder-neutral-600 outline-none focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300 text-sm"
                        />
                    </div>
                    <div className="md:col-span-7 flex flex-wrap gap-2 items-center">
                        <button
                            onClick={() => setSelectedCategoryFilter('All')}
                            className={`py-2 px-4 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${selectedCategoryFilter === 'All' ? 'bg-orange-500 text-white' : 'bg-white/5 border border-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'}`}
                        >
                            All
                        </button>
                        {availableCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategoryFilter(cat)}
                                className={`py-2 px-4 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${selectedCategoryFilter === cat ? 'bg-orange-500 text-white' : 'bg-white/5 border border-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Foods Grid/List */}
                {loadingFoods ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-3">
                        <span className="material-symbols-outlined animate-spin text-orange-500 text-4xl">sync</span>
                        <p className="text-neutral-400 text-sm font-medium">Fetching culinary collection...</p>
                    </div>
                ) : filteredFoods.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <span className="material-symbols-outlined text-neutral-600 text-5xl mb-4">restaurant_menu</span>
                        <h3 className="text-white font-bold text-lg mb-1">No Dishes Found</h3>
                        <p className="text-neutral-500 text-sm">Try adjusting your search criteria or add a new food item.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredFoods.map((item) => (
                            <div 
                                key={item.id} 
                                className="glass-card rounded-[24px] p-4 flex gap-4 border border-white/5 hover:border-white/10 transition-all duration-300 bg-white/[0.02] items-center"
                            >
                                <img 
                                    src={item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80'} 
                                    alt={item.name} 
                                    className="w-20 h-20 rounded-2xl object-cover bg-neutral-900 border border-white/5 flex-shrink-0"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80';
                                    }}
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                        <span className="px-2 py-0.5 text-[9px] font-extrabold tracking-wider bg-orange-600/10 text-orange-400 border border-orange-500/20 rounded uppercase">
                                            {item.category}
                                        </span>
                                        {item.trending && (
                                            <span className="px-2 py-0.5 text-[9px] font-extrabold tracking-wider bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded uppercase">
                                                Trending
                                            </span>
                                        )}
                                        <span className={`px-2 py-0.5 text-[9px] font-extrabold tracking-wider border rounded uppercase ${item.available !== false ? 'bg-green-600/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                                            {item.available !== false ? 'In Stock' : 'Sold Out'}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-white text-base truncate mb-0.5">{item.name}</h3>
                                    <p className="text-orange-400 font-bold text-sm mb-1">₹{item.price}</p>
                                    <div className="flex items-center gap-3 text-neutral-500 text-[11px]">
                                        <span className="flex items-center gap-0.5">
                                            <span className="material-symbols-outlined text-[12px]">schedule</span>
                                            {item.make_time || '15m'}
                                        </span>
                                        <span className="flex items-center gap-0.5">
                                            <span className="material-symbols-outlined text-[12px] text-orange-500 font-variation-settings-'FILL'1">star</span>
                                            {item.rating || '5'}.0
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <button 
                                        onClick={() => handleEditClick(item)}
                                        className="p-2.5 rounded-xl bg-white/5 hover:bg-orange-500 hover:text-white border border-white/5 text-neutral-300 transition-all duration-300 cursor-pointer active:scale-90 flex items-center justify-center"
                                        title="Edit Item"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">edit</span>
                                    </button>
                                    <button 
                                        onClick={() => handleDeleteClick(item.id, item.name)}
                                        className="p-2.5 rounded-xl bg-white/5 hover:bg-red-600 hover:text-white border border-white/5 text-neutral-300 transition-all duration-300 cursor-pointer active:scale-90 flex items-center justify-center"
                                        title="Delete Item"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
