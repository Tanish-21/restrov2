# 🍽️ RestroV2 - Full-Stack Restaurant & Food Management System

A modern, responsive full-stack web application for restaurant management, food ordering, menu customization, and admin control. Built with **React 19**, **Vite**, **Tailwind CSS v4**, **Node.js**, **Express**, and **PostgreSQL**.

---

## 🚀 Features

### 👤 User Features
- **User Authentication**: Secure sign-up, login, and JWT-based authentication.
- **Interactive Food Dashboard**: Browse food categories, view trending items, and explore available menu items.
- **Search & Category Filtering**: Filter dishes by category (e.g., Starters, Main Course, Desserts, Drinks) and search food items dynamically.
- **Order Management & Cart**: View dish details, preparation time (`make_time`), ratings, and place orders.
- **User Profile**: Access personalized account details and order history.

### 🛠️ Admin Features
- **Role-Based Access Control**: Dedicated Admin dashboard accessible only to authorized accounts.
- **Menu Management (CRUD)**:
  - Add new food items with price, description, category, image URL, rating, and estimated preparation time.
  - Edit existing food details in real-time.
  - Delete items from the menu.
  - Toggle item availability (In-Stock / Out of Stock).
  - Feature items as **Trending** on the customer dashboard.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: React 19 + Vite 8
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4 + PostCSS
- **State & Icons**: React Context API & modern icon libraries

### **Backend**
- **Runtime & Server**: Node.js (ES Modules) + Express 5
- **Database**: PostgreSQL (using `pg` Connection Pool)
- **Security & Auth**: JSON Web Tokens (JWT), `bcrypt` password hashing, `cors`
- **Environment**: `dotenv`

---

## 📁 Project Structure

```text
restroMcp/
├── backend/
│   ├── config/
│   │   └── db.js            # PostgreSQL Pool Connection
│   ├── middleware/
│   │   └── authmiddleware.js # JWT Authorization Middleware
│   ├── routes/
│   │   ├── auth.js          # Auth Endpoints (/login, /register)
│   │   ├── card.js          # Food Item CRUD & Filtering Endpoints
│   │   └── cat.js           # Category Endpoints
│   ├── index.js             # Express Application Entry Point
│   ├── insert_admin.js      # Utility script to seed an Admin User
│   └── .env                 # Backend Environment Variables
│
└── frontend/
    ├── src/
    │   ├── components/      # Reusable UI Components
    │   ├── context/         # Auth & Global State Context
    │   ├── pages/
    │   │   ├── admin/       # Admin Dashboard & Inventory Management
    │   │   ├── auth/        # Login, Register, Entry & Verification Pages
    │   │   └── dashboard/   # Home, Search, Order & Profile Pages
    │   ├── App.jsx          # Routes Configuration
    │   └── main.jsx         # React Entry Point
    ├── tailwind.config.js
    ├── vite.config.js
    └── .env                 # Frontend Environment Variables
```

---

## 🗄️ Database Setup

Create a PostgreSQL database named `restrov1` (or your preferred name) and execute the following SQL table definitions:

```sql
-- Create Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Food Items Table
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    category VARCHAR(50),
    trending BOOLEAN DEFAULT FALSE,
    image TEXT,
    rating NUMERIC(2, 1) DEFAULT 0.0,
    available BOOLEAN DEFAULT TRUE,
    make_time VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## ⚙️ Installation & Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [PostgreSQL](https://www.postgresql.org/) database server running locally or hosted

---

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Tanish-21/restrov2.git
cd restrov2
```

---

### 2️⃣ Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` directory:
   ```env
   DATABASE_URL=database_connection_string
   BACKEND_PORT=5000
   JWT_SECRET=your_jwt_secret_key
   ```
4. Seed the initial **Admin** user (Optional):
   ```bash
   node insert_admin.js
   ```
   *(Creates an admin account with credentials `admin@gmail.com` / `admin123`)*

5. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend API will run on `http://localhost:5000`.

---

### 3️⃣ Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend/` directory:
   ```env
   VITE_BACKEND_API=http://localhost:5000
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

---

## 📡 API Reference

### 🔐 Auth Routes (`/api/auth`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user | Public |
| `POST` | `/api/auth/login` | Login user & return JWT token | Public |

### 🍔 Food Items Routes (`/api/foods`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/foods/` | Fetch all menu items | Public |
| `GET` | `/api/foods/cards` | Fetch all available menu items | Public |
| `GET` | `/api/foods/trending` | Fetch top trending food items | Public |
| `POST` | `/api/foods/add` | Create a new food item | Admin |
| `PUT` | `/api/foods/update/:id` | Update an existing food item | Admin |
| `DELETE` | `/api/foods/delete/:id` | Delete a food item | Admin |

### 🏷️ Category Routes (`/api/categories`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/categories/` | Fetch all distinct categories | Public |
| `GET` | `/api/categories/category/:id` | Fetch food items by category name | Public |

---



## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/Tanish-21/restrov2/issues).
