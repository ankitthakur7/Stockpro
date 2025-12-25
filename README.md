\# 📈 StockPro – MERN Stack Stock Trading Dashboard



StockPro is a full-stack \*\*MERN (MongoDB, Express, React, Node.js)\*\* based stock trading dashboard inspired by modern trading platforms like Zerodha.  

It allows users to view stock holdings, positions, and place orders through a responsive frontend connected to a scalable backend API.



This project was built to practice \*\*real-world full-stack development\*\*, REST API design, database integration, testing, and GitHub project management.



---



\## 🚀 Features



\- 📊 View stock \*\*Holdings\*\*

\- 📉 View active \*\*Positions\*\*

\- 🛒 Place new \*\*Orders\*\*

\- 📄 Fetch all orders from database

\- 🌐 RESTful APIs using Express \& Node.js

\- ☁️ MongoDB Atlas cloud database

\- ⚛️ React frontend with reusable components

\- 🔄 Frontend–backend communication using Axios

\- 🧪 Unit testing using React Testing Library

\- 🧹 Clean GitHub repository (no submodules)



---



\## 🛠️ Tech Stack



\### Frontend

\- React.js

\- JavaScript (ES6)

\- Axios

\- Bootstrap / CSS

\- React Testing Library

\- Jest



\### Backend

\- Node.js

\- Express.js

\- MongoDB Atlas

\- Mongoose

\- dotenv

\- CORS



\### Tools

\- Git \& GitHub

\- VS Code

\- Postman



---



\## 📂 Project Structure



Stockpro/

│

├── backend/

│ ├── index.js

│ ├── model/

│ │ ├── HoldingsModel.js

│ │ ├── PositionsModel.js

│ │ └── OrdersModel.js

│ ├── schemas/

│ │ ├── HoldingsSchema.js

│ │ ├── PositionsSchema.js

│ │ └── OrdersSchema.js

│ ├── package.json

│

├── frontend/

│ ├── src/

│ ├── public/

│ ├── package.json

│

├── dashboard/

│ ├── src/

│ ├── public/

│ ├── package.json

│

├── .gitignore

├── README.md





---



\## ⚙️ Installation \& Setup



\### 1️⃣ Clone the Repository

```bash

git clone https://github.com/ankitthakur7/Stockpro.git

cd Stockpro



cd backend

npm install



MONGO\_URL=your\_mongodb\_atlas\_connection\_string

PORT=3002





npm start



http://localhost:3002



cd frontend

npm install

npm start





cd frontend

npm test







---



\### ✅ What to do next

```bash

git add README.md

git commit -m "Add README file"

git push





