import React from 'react';

export default function FoodPreview({ formData, previewImage }) {
    return (
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 animate-fade-in-up">
            <div className="relative">
                <div className="absolute -top-3 left-6 z-10 px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded bg-orange-600 text-white shadow-lg">
                    Live App Preview
                </div>
                
                {/* Simulated Mobile Card Grid context */}
                <div className="glass-card rounded-[32px] p-6 border border-white/5 shadow-2xl bg-neutral-950/40 relative overflow-hidden flex flex-col justify-center items-center">
                    
                    {/* Card matching user-facing grid component */}
                    <div className="w-full max-w-sm glass-card rounded-[32px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl relative transition-all duration-500 hover:shadow-orange-950/20">
                        
                        <div className="h-60 relative overflow-hidden bg-neutral-900">
                            <img 
                                className="w-full h-full object-cover" 
                                src={previewImage} 
                                alt={formData.name || 'Food Preview'} 
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80';
                                }}
                            />
                            
                            {/* Sold out overlay */}
                            {!formData.available && (
                                <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px] flex items-center justify-center z-10">
                                    <span className="px-4 py-2 bg-red-600/90 text-white text-xs font-black tracking-widest uppercase rounded-xl border border-red-500/30 shadow-2xl animate-pulse">
                                        Sold Out
                                    </span>
                                </div>
                            )}

                            {/* Rating badge */}
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                                <span className="material-symbols-outlined text-orange-500 text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                                    star
                                </span>
                                <span className="text-white font-semibold text-xs">{formData.rating}.0</span>
                            </div>
                            
                            {/* Make time badge */}
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                                <span className="material-symbols-outlined text-orange-500 text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                                    schedule
                                </span>
                                <span className="text-white font-semibold text-xs">{formData.makeTime || '15m'}</span>
                            </div>

                            {/* Category badge */}
                            <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-4 py-1 rounded-full font-bold text-xs shadow-lg uppercase tracking-wider">
                                {formData.category}
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2 gap-2">
                                <h3 className="font-bold text-xl text-white truncate max-w-[70%]">{formData.name || 'Dish Masterpiece Name'}</h3>
                                <span className="text-orange-400 font-bold text-lg flex-shrink-0">₹{formData.price || '0'}</span>
                            </div>
                            <p className="text-neutral-400 text-xs line-clamp-2 min-h-[2rem] leading-relaxed mb-6">
                                {formData.description || 'Enter a description on the left to see how it will tell the story of your culinary creation.'}
                            </p>
                            
                            <button 
                                disabled={!formData.available} 
                                className={`inline-flex items-center justify-center gap-2 font-bold text-xs py-3.5 px-6 rounded-2xl w-full border transition-all duration-300 ${formData.available ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-300 text-black border-white/10 hover:shadow-xl active:scale-95' : 'bg-white/5 text-neutral-600 border-white/5 cursor-not-allowed'}`}
                            >
                                {formData.available ? 'Add to Cart' : 'Temporarily Out of Stock'}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
