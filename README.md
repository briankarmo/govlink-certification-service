# govlink-certification-service

Microservice for managing contractor profiles and certifications for GovLinkGlobal. ✅

## 🚀 Features
- Add/edit/remove consultant certifications
- Check for expiry
- Scalable microservice using Express + MongoDB

## 🧰 Stack
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## 🧪 API Endpoints
- `POST /api/certifications` → Add new certification
- `GET /api/certifications/:userId` → List all for user
- `DELETE /api/certifications/:id` → Delete cert

## 📦 How to Use
1. Clone repo
2. `npm install`
3. Add your Mongo URI to `.env`
4. `npm start`
