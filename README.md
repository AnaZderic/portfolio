# Full-Stack Portfolio

A modern full-stack developer portfolio built with **C# (.NET 10)** and **Next.js**.

This project showcases my work, technical skills, and provides a contact interface powered by a custom backend API.

---

## 🛠 Tech Stack

### Frontend
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Light / Dark theme support

### Backend
- C# (.NET 10 Minimal API)
- Entity Framework Core
- PostgreSQL
- Swagger / OpenAPI
- Docker
- CORS configuration for frontend integration

---

## 📁 Project Structure

```bash
portfolio-app/
├── backend/
│   ├── Models/
│   ├── Data/
│   ├── Migrations/
│   ├── Program.cs
│   └── appsettings.json
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── package.json
│
├── docker-compose.yml
└── README.md
```
---

## 🚀 Getting Started

### Prerequisites

- Node.js (18+)
- .NET SDK 10
- Docker

### Environment variables

Copy .env.example to .env and adjust values if needed:

```bash
cp .env.example .env
```

### Database (PostgreSQL via Docker)

From the project root:

```bash
docker compose up -d
```
---

### Backend

```bash
cd backend
dotnet run
```
---

Backend will be available at:

http://localhost:5189

Swagger UI:

http://localhost:5189/swagger

----

### Frontend

```bash 
cd frontend
npm install
npm run dev
```

Frontend will be available at:

http://localhost:3000


---


## 📡 API Endpoints

| Method | Endpoint                 | Description                 |
| ------ | ------------------------ | --------------------------- |
| GET    | /api/projects            | Retrieve portfolio projects |
| POST   | /api/contact             | Submit contact message      |
| GET    | /api/admin/contacts      | Admin: list messages        |
| DELETE | /api/admin/contacts/{id} | Admin: delete message       |


## 🧱 Current Features

- API-driven projects section
- PostgreSQL database persistance
- EF Core migrations
- Dockerized database
- Light / Dark theme toggle
- Modern responsive UI
- Swagger API documentation
- Clean monorepo structure
- Contact form with validation
- Admin dashboard for contact messages
- View submitted messages
- Delete messages


## 🗺 Roadmap

- [x] Project setup  
- [x] Backend API foundation  
- [x] Frontend foundation  
- [x] Dynamic projects from backend 
- [x] Database persistence
- [x] Contact form integration 
- [x] Admin dashboard  
- [ ] Email notifications  
- [ ] Deployment  

## 📝 Admin Usage

The admin dashboard allows you to **view and manage submitted contact messages**.

### Accessing the Admin Page

- 🌐 **URL:** `http://localhost:3000/admin/messages`  
- 🏗 **Layout:** Uses `AdminLayout` with `Navbar`; main content (`children`) displays messages fetched from the backend.

### ✨ Features
- 👀 **View Messages:** See all submitted contact messages.  
- 🗑 **Delete Messages:** Remove any message (`DELETE /api/admin/contacts/{id}`).

### ⚠️ Notes
- 🔗 Data is fetched from backend endpoint `/api/admin/contacts`.  
- ✅ Ensure backend is running at `http://localhost:5189` and CORS allows `http://localhost:3000`.

## 👤 Author

Ana Zderic

GitHub: https://github.com/AnaZderic