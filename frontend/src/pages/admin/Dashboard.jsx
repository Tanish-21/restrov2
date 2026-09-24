import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import subcomponents
import AdminHeader from './components/AdminHeader';
import FoodForm from './components/FoodForm';
import FoodPreview from './components/FoodPreview';
import ManageMenu from './components/ManageMenu';

const API_BASE = import.meta.env.VITE_BACKEND_API || import.meta.env.BACKEND_API || 'http://localhost:5000';

function Dashboard() {
    const navigate = useNavigate();

    // Tab switching state
    const [activeTab, setActiveTab] = useState('create'); // 'create' | 'manage'

    // Categories state
    const [categories, setCategories] = useState(['Italian', 'Sushi', 'Burgers', 'Steaks']);
    const [newCategory, setNewCategory] = useState('');
    const [showAddCategoryInput, setShowAddCategoryInput] = useState(false);

    // Form and Editing state
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        category: 'Italian',
        trending: false,
        available: true,
        makeTime: '',
        rating: 5
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // List and search state
    const [foods, setFoods] = useState([]);
    const [loadingFoods, setLoadingFoods] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('All');

    // Fetch existing menu items
    const fetchFoods = async () => {
        setLoadingFoods(true);
        try {
            const response = await fetch(`${API_BASE}/api/foods/cards`);
            const data = await response.json();
            if (response.ok) {
                const fetchedFoods = data.data || [];
                setFoods(fetchedFoods);

                // Add any categories present in foods but missing from our list
                fetchedFoods.forEach(food => {
                    if (food.category && !categories.includes(food.category)) {
                        setCategories(prev => {
                            if (!prev.includes(food.category)) {
                                return [...prev, food.category];
                            }
                            return prev;
                        });
                    }
                });
            } else {
                console.error('Failed to fetch:', data.message);
            }
        } catch (err) {
            console.error('Error fetching cards:', err);
        } finally {
            setLoadingFoods(false);
        }
    };

    // Load menu foods when clicking manage tab
    useEffect(() => {
        if (activeTab === 'manage') {
            fetchFoods();
        }
    }, [activeTab]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCategoryChange = (category) => {
        setFormData(prev => ({ ...prev, category }));
    };

    const handleAddCategory = () => {
        const trimmed = newCategory.trim();
        if (trimmed) {
            // Capitalize first letter of each word or sentence
            const formatted = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
            if (!categories.includes(formatted)) {
                setCategories(prev => [...prev, formatted]);
            }
            setFormData(prev => ({ ...prev, category: formatted }));
            setNewCategory('');
            setShowAddCategoryInput(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulating form submit / edit feedback
        setTimeout(() => {
            setIsSubmitting(false);

            if (editingId) {
                alert(`🎉 "${formData.name || 'Food item'}" updated successfully!`);
                // Update local state list
                setFoods(prev => prev.map(f => f.id === editingId ? {
                    ...f,
                    name: formData.name,
                    description: formData.description,
                    price: formData.price,
                    image: formData.image,
                    category: formData.category,
                    trending: formData.trending,
                    available: formData.available,
                    make_time: formData.makeTime,
                    rating: formData.rating
                } : f));
                setEditingId(null);
                setActiveTab('manage'); // return to list view
            } else {
                alert(`🎉 "${formData.name || 'Food item'}" added successfully!`);
                const newFood = {
                    id: Date.now(),
                    name: formData.name,
                    description: formData.description,
                    price: formData.price,
                    image: formData.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
                    category: formData.category,
                    trending: formData.trending,
                    available: formData.available,
                    make_time: formData.makeTime,
                    rating: formData.rating
                };
                setFoods(prev => [newFood, ...prev]);
            }

            // Reset form
            setFormData({
                name: '',
                description: '',
                price: '',
                image: '',
                category: categories[0] || 'Italian',
                trending: false,
                available: true,
                makeTime: '',
                rating: 5
            });
        }, 1200);
    };

    const handleEditClick = (item) => {
        setEditingId(item.id);
        // Make sure item category is loaded in selections
        if (item.category && !categories.includes(item.category)) {
            setCategories(prev => [...prev, item.category]);
        }
        setFormData({
            name: item.name || '',
            description: item.description || '',
            price: item.price || '',
            image: item.image || '',
            category: item.category || 'Italian',
            trending: item.trending || false,
            available: item.available !== false, // default true if undefined
            makeTime: item.make_time || '',
            rating: item.rating || 5
        });
        setActiveTab('create'); // redirect to form tab
    };

    const handleDeleteClick = (id, name) => {
        if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
            // Mock delete action: remove from list state
            setFoods(prev => prev.filter(f => f.id !== id));
            alert(`🗑️ "${name}" removed from the menu.`);
        }
    };

    // Default image if none is provided to keep the card preview gorgeous
    const previewImage = formData.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80';

    // Filters for list view
    const filteredFoods = foods.filter(food => {
        const matchesSearch = food.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            food.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            food.category?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategoryFilter === 'All' || food.category === selectedCategoryFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-black text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black font-sans pb-16">

            <AdminHeader
                navigate={navigate}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                editingId={editingId}
                setEditingId={setEditingId}
                setFormData={setFormData}
                defaultCategory={categories[0]}
            />

            <main className="max-w-7xl mx-auto px-6 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* CREATE/EDIT VIEW */}
                {activeTab === 'create' && (
                    <>
                        <div className="lg:col-span-7 space-y-6">
                            <FoodForm
                                foods={foods}
                                formData={formData}
                                categories={categories}
                                showAddCategoryInput={showAddCategoryInput}
                                setShowAddCategoryInput={setShowAddCategoryInput}
                                newCategory={newCategory}
                                setNewCategory={setNewCategory}
                                handleChange={handleChange}
                                handleCategoryChange={handleCategoryChange}
                                handleAddCategory={handleAddCategory}
                                handleSubmit={handleSubmit}
                                isSubmitting={isSubmitting}
                                editingId={editingId}
                                setEditingId={setEditingId}
                                setFormData={setFormData}
                                defaultCategory={categories[0]}
                            />
                        </div>

                        <FoodPreview
                            formData={formData}
                            previewImage={previewImage}
                        />
                    </>
                )}

                {/* MANAGE VIEW */}
                {activeTab === 'manage' && (
                    <ManageMenu
                        foods={foods}
                        loadingFoods={loadingFoods}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        selectedCategoryFilter={selectedCategoryFilter}
                        setSelectedCategoryFilter={setSelectedCategoryFilter}
                        categories={categories}
                        filteredFoods={filteredFoods}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                    />
                )}

            </main>
        </div>
    );
}

export default Dashboard;
