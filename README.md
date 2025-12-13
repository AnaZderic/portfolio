# Full-Stack Portfolio

A modern full-stack developer portfolio built with **C# (.NET 8)** and **Next.js**.

This project showcases my work, technical skills, and provides a contact interface powered by a custom backend API.

---

## 🛠 Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

### Backend
- C# (.NET 8 Minimal API)
- Swagger / OpenAPI
- CORS configuration for frontend integration

---

## 📁 Project Structure

```bash
portfolio/
├── backend/
│ ├── Models/
│ ├── Data/
│ ├── Services/
│ └── Program.cs
├── frontend/
│ ├── app/
│ ├── public/
│ └── package.json
└── README.md
```
---

## 🚀 Getting Started

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

| Method | Endpoint        | Description                       |
|--------|-----------------|-----------------------------------|
| GET    | /api/projects   | Retrieve portfolio projects       |
| POST   | /api/contact    | Submit contact form message       |


## 🧱 Current Features

- Clean C# .NET Minimal API backend
- Modern Next.js frontend foundation
- Swagger API documentation
- CORS-enabled frontend ↔ backend communication
- Scalable folder structure for future growth


## 🗺 Roadmap

- [x] Project setup  
- [x] Backend API foundation  
- [x] Frontend foundation  
- [ ] Projects page (dynamic data from backend)  
- [ ] Contact form integration  
- [ ] Database persistence  
- [ ] Email notifications  
- [ ] Deployment  

## 👤 Author

Ana Zderic

GitHub: https://github.com/AnaZderic