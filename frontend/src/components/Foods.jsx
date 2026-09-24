import React, { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_API || import.meta.env.BACKEND_API || 'http://localhost:5000';

export default function Foods() {

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchFoods = async () => {

      try {

        const response = await fetch(
          `${API_BASE}/api/foods/cards`
        );

        const data = await response.json();

        console.log(data);

        setFoods(data.data);

      } catch (error) {

        console.log(error);

      } finally {

        setLoading(false);
      }
    };

    fetchFoods();

  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid gap-stack-lg grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {foods.map((item) => (
        <div
          key={item.id}
          className="glass-card rounded-[32px] overflow-hidden group cursor-pointer hover:shadow-orange-900/20 hover:shadow-2xl transition-all duration-500 bg-white/5 border border-white/10"
        >
          <div className="h-64 relative overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src={item.image}
              alt={item.name}
            />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
              <span className="material-symbols-outlined text-orange-500 text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                star
              </span>
              <span className="text-white font-label-md">{item.rating}</span>
            </div>

            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
              <span className="material-symbols-outlined text-orange-500 text-[18px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                schedule
              </span>
              <span className="text-white font-label-md">{item.make_time}</span>
            </div>

            <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-4 py-1 rounded-full font-label-md shadow-lg">
              {item.category}
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline-md text-headline-md text-white">{item.name}</h3>
              <span className="text-neutral-400 font-label-md">₹{item.price}</span>
            </div>
            <p className="text-neutral-500 font-body-md mb-6">{item.description}</p>
            <button className="bg-white text-black font-headline-md px-8 py-4 rounded-2xl w-full md:w-max hover:bg-orange-500 hover:text-white transition-all active:scale-95">
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
