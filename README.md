# 🎨 Imagify Frontend

Imagify is an AI-powered text-to-image generator that transforms user prompts into stunning visuals in seconds.  
This repository contains the **frontend** of Imagify, built with Next.js and Tailwind CSS.

---

## 🚀 Features
- Responsive, modern UI with Tailwind CSS
- Text prompt input and live preview of generated images
- Integration with backend API for AI-powered image generation
- Loading states and error handling for smooth UX
- Deployed with Vercel

---

## 📂 Project Structure
```
frontend/
│── components/    # Reusable UI components
│── pages/         # Next.js pages
│── styles/        # Global styles
│── public/        # Static assets
│── utils/         # Helper functions
```

---

## 🛠️ Tech Stack
- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **API:** Custom backend (Node.js / Express)

---

## ⚙️ Installation
```bash
git clone https://github.com/tgoswami160/ImagifyFrontend.git
npm install
npm run dev
```
Visit `http://localhost:5173` in your browser.

---

## 🔗 Backend API
The frontend communicates with the backend at:
```
POST /api/result
Body: { prompt: "Your image description here" }
```

---

