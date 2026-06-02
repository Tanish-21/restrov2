import React from 'react';

export default function FoodForm({
    formData,
    categories,
    showAddCategoryInput,
    setShowAddCategoryInput,
    newCategory,
    setNewCategory,
    handleChange,
    handleCategoryChange,
    handleAddCategory,
    handleSubmit,
    isSubmitting,
    editingId,
    setEditingId,
    setFormData,
    defaultCategory
}) {
    return (
        <div className="glass-card rounded-[32px] p-8 border border-white/10 shadow-2xl relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
            
            {/* Title */}
            <div className="mb-8 flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-white font-epilogue mb-2">
                        {editingId ? 'Edit Masterpiece' : 'Create Masterpiece'}
                    </h1>
                    <p className="text-neutral-400 text-sm">
                        {editingId ? 'Modify the selected food item details below.' : 'Fill in the fields below to add a new delicious item to the restaurant menu.'}
                    </p>
                </div>
                {editingId && (
                    <button
                        type="button"
                        onClick={() => {
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
                        className="text-xs font-bold text-neutral-400 hover:text-white border border-white/10 bg-white/5 rounded-xl px-3 py-1.5 active:scale-95 transition-all"
                    >
                        Cancel Edit
                    </button>
                )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Food Name & Price */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 relative">
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 pl-1">Food Name</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-[20px]">badge</span>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Truffle Mushroom Risotto" 
                                className="glass-input rounded-2xl w-full pl-12 pr-4 py-3.5 text-white placeholder-neutral-600 outline-none focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300 text-sm"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 pl-1">Price (₹)</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 font-bold text-sm">₹</span>
                            <input 
                                type="number" 
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="450" 
                                className="glass-input rounded-2xl w-full pl-10 pr-4 py-3.5 text-white placeholder-neutral-600 outline-none focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300 text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Food Description */}
                <div className="relative">
                    <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 pl-1">Description</label>
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-4 text-neutral-500 text-[20px]">description</span>
                        <textarea 
                            name="description"
                            rows="3"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Describe the ingredients, texture, flavor profile, and heritage of this dish..." 
                            className="glass-input rounded-2xl w-full pl-12 pr-4 py-3.5 text-white placeholder-neutral-600 outline-none focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300 text-sm resize-none"
                        ></textarea>
                    </div>
                </div>

                {/* Food Category Selection */}
                <div>
                    <div className="flex justify-between items-center mb-2 px-1">
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider">Food Category</label>
                        {!showAddCategoryInput && (
                            <button
                                type="button"
                                onClick={() => setShowAddCategoryInput(true)}
                                className="text-xs font-bold text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1 active:scale-95 cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-sm">add</span>
                                Add Custom
                            </button>
                        )}
                    </div>
                    
                    {showAddCategoryInput ? (
                        <div className="flex gap-2 animate-fade-in-up">
                            <div className="relative flex-1">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-[20px]">category</span>
                                <input
                                    type="text"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleAddCategory();
                                        }
                                    }}
                                    placeholder="Enter new category name..."
                                    className="glass-input rounded-xl w-full pl-12 pr-4 py-2.5 text-white placeholder-neutral-600 outline-none focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/10 transition-all text-xs"
                                    autoFocus
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleAddCategory}
                                className="px-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-95 flex items-center justify-center border border-orange-500/10"
                            >
                                Add
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowAddCategoryInput(false);
                                    setNewCategory('');
                                }}
                                className="px-4 rounded-xl bg-white/5 border border-white/5 text-neutral-400 hover:bg-white/10 hover:text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-95 flex items-center justify-center"
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => handleCategoryChange(cat)}
                                    className={`py-2.5 px-4 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer active:scale-95 ${formData.category === cat ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-white/5 border border-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Image URL & Make Time */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 relative">
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 pl-1">Food Image URL</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-[20px]">image</span>
                            <input 
                                type="url" 
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="https://images.unsplash.com/..." 
                                className="glass-input rounded-2xl w-full pl-12 pr-4 py-3.5 text-white placeholder-neutral-600 outline-none focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300 text-sm"
                            />
                        </div>
                    </div>
                    <div className="relative">
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 pl-1">Make Time (e.g. 20m)</label>
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-[20px]">schedule</span>
                            <input 
                                type="text" 
                                name="makeTime"
                                value={formData.makeTime}
                                onChange={handleChange}
                                placeholder="15m" 
                                className="glass-input rounded-2xl w-full pl-12 pr-4 py-3.5 text-white placeholder-neutral-600 outline-none focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300 text-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Trending, Availability & Rating Selection */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 pl-1">Is Trending?</label>
                        <div className="flex gap-2">
                            <button 
                                type="button" 
                                onClick={() => setFormData(prev => ({...prev, trending: true}))} 
                                className={`flex-1 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${formData.trending ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20 active-glow-text' : 'bg-white/5 border border-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'}`}
                            >
                                Featured
                            </button>
                            <button 
                                type="button" 
                                onClick={() => setFormData(prev => ({...prev, trending: false}))} 
                                className={`flex-1 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${!formData.trending ? 'bg-white/10 text-white border border-white/20' : 'bg-white/5 border border-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'}`}
                            >
                                Standard
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 pl-1">Availability</label>
                        <div className="flex gap-2">
                            <button 
                                type="button" 
                                onClick={() => setFormData(prev => ({...prev, available: true}))} 
                                className={`flex-1 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${formData.available ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' : 'bg-white/5 border border-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'}`}
                            >
                                In Stock
                            </button>
                            <button 
                                type="button" 
                                onClick={() => setFormData(prev => ({...prev, available: false}))} 
                                className={`flex-1 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 ${!formData.available ? 'bg-red-600/80 text-white border border-red-500/20 shadow-lg shadow-red-500/20' : 'bg-white/5 border border-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'}`}
                            >
                                Sold Out
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between items-center mb-2 px-1">
                            <label className="block text-xs font-bold text-neutral-400 uppercase tracking-wider">Rating Star ({formData.rating}★)</label>
                        </div>
                        <div className="flex items-center gap-1.5 py-3 px-4 rounded-2xl bg-white/5 border border-white/5 justify-between">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span 
                                    key={star}
                                    onClick={() => setFormData(prev => ({...prev, rating: star}))}
                                    className={`material-symbols-outlined cursor-pointer text-[24px] transition-all duration-200 active:scale-75 ${formData.rating >= star ? 'text-orange-500' : 'text-neutral-600 hover:text-neutral-400'}`}
                                    style={{ fontVariationSettings: formData.rating >= star ? '"FILL" 1' : '"FILL" 0' }}
                                >
                                    star
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 text-black font-extrabold tracking-wider uppercase text-xs py-4 px-8 rounded-2xl hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer spring-interaction border border-white/10"
                >
                    {isSubmitting ? (
                        <>
                            <span className="material-symbols-outlined animate-spin text-sm">sync</span>
                            {editingId ? 'Updating Item...' : 'Adding to Menu...'}
                        </>
                    ) : (
                        <>
                            <span className="material-symbols-outlined text-[16px] font-black">
                                {editingId ? 'save' : 'add_circle'}
                            </span>
                            {editingId ? 'Update Food Item' : 'Publish Food Item'}
                        </>
                    )}
                </button>

            </form>
        </div>
    );
}
