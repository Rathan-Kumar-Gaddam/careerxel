# CareerXel Platform 🚀

A full-stack career platform built with **Next.js** (frontend) and **Strapi** (backend), powered by **MySQL**.

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16, React 19, Tailwind CSS |
| Backend | Strapi 5 |
| Database | MySQL |
| UI Utilities | Lucide React, clsx |
| Dev Tools | ESLint, concurrently |

---

## 📁 Project Structure

```
careerxel/
├── frontend/        # Next.js app
│   ├── app/         # App Router pages
│   ├── components/  # Reusable UI components
│   ├── lib/         # Utility functions
│   └── scripts/     # Custom scripts
├── backend/         # Strapi CMS
└── package.json     # Root scripts (runs both together)
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `>=18.0.0 <=22.x.x`
- [npm](https://www.npmjs.com/) `>=6.0.0`
- [MySQL](https://www.mysql.com/) (running locally or remote)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/careerxel.git
cd careerxel
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install backend dependencies
cd backend && npm install && cd ..
```

### 3. Setup MySQL Database

Open your MySQL client and run:

```sql
CREATE DATABASE careerxel;
```

### 4. Configure Backend (Strapi)

Create a `.env` file inside the `backend/` folder:

```bash
cd backend
cp .env.example .env   # if example exists, or create manually
```

Add the following to `backend/.env`:

```env
DATABASE_CLIENT=mysql
DATABASE_HOST=127.0.0.1
DATABASE_PORT=3306
DATABASE_NAME=careerxel
DATABASE_USERNAME=root
DATABASE_PASSWORD=your_mysql_password

APP_KEYS=your_app_key_1,your_app_key_2
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
JWT_SECRET=your_jwt_secret
```

> **Tip:** You can generate random secrets using:
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
> ```

Make sure `backend/config/database.js` looks like this:

```js
module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'careerxel'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', ''),
    },
  },
});
```

### 5. Configure Frontend (Next.js)

Create a `.env.local` file inside the `frontend/` folder:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

---

## ▶️ Running the Project

From the **root** folder, run both frontend and backend together:

```bash
npm run dev
```

Or run them individually:

```bash
# Frontend only (http://localhost:3000)
npm run frontend

# Backend only (http://localhost:1337)
npm run backend
```

---

## 🌐 URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Strapi Admin | http://localhost:1337/admin |
| Strapi API | http://localhost:1337/api |

---

## 🔐 First Time Strapi Setup

1. Visit http://localhost:1337/admin
2. Create your admin account
3. Configure content types and permissions as needed

---

## 📦 Available Scripts (Root)

| Script | Description |
|---|---|
| `npm run dev` | Runs frontend + backend together |
| `npm run frontend` | Runs frontend only |
| `npm run backend` | Runs backend only |

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is private and not licensed for public use.