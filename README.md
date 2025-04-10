# 🥗 NutriSnap: Smart Meal Planner  

> 🚧 **This project is currently in development. Expect rapid changes and updates.**

NutriSnap is a smart AI-powered web application that lets users take/upload photos of their fridge contents and generates personalized meal plans based on fitness goals and available ingredients.

## 📸 Core Workflow

1. **User uploads/takes a photo** (camera or file upload).
2. **Metadata (e.g., QR, timeline info)** is extracted and sent to a **NATS queue**.
3. A **Python-based multimodal inspector** analyzes the image.
4. Image is stored in **AWS S3**.
5. Metadata and user data stored in **PostgreSQL**.
6. **Frontend (Next.js)** handles interactions and displays AI-suggested meal plans via a **chatbot assistant**.

---

## 🛠️ Tech Stack

### 🧠 Backend
- **FastAPI** – REST API backend
- **NATS** – For async processing tasks
- **AWS S3** – Image storage
- **PostgreSQL** – User/meal plan data storage
- *(Multimodal AI inspector module planned)*

### 🎨 Frontend
- **Next.js (TypeScript)** – Main web app framework
- **ShadCN UI** *(with possible Mantine fallback)* – Beautiful UI components
- **AI Chatbot Assistant** – Smart interaction layer

---

## ✅ Current Progress

- ✅ Git repo initialized
- ✅ Next.js project setup with ShadCN UI
- ✅ File upload and camera access components
- 🛠️ FastAPI REST API setup (in progress)
- ⏳ NATS integration, multimodal inspector (upcoming)
