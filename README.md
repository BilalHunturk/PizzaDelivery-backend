
# 🍕 Pizza Delivery Platform - Backend

This is the backend implementation of the Pizza Delivery Platform, designed to handle user authentication, order management, and database interactions.

## ✨ Features

- **User Authentication**: Secure login and signup using JSON Web Tokens (JWT) and bcrypt.
- **Order Management**: Create, update, and manage pizza orders in real-time.
- **Database Integration**:
  - MongoDB: For storing user and order data using Mongoose.
  - SQLite: For lightweight local data handling.
- **RESTful APIs**: Provides endpoints for seamless frontend-backend interaction.

## 🛠️ Prerequisites

Ensure you have the following installed:
- **Node.js** (v14+)
- **npm** (v6+)
- **MongoDB** (configured locally or using a cloud provider)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BilalHunturk/PizzaDelivery.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define variables such as `PORT`, `MONGO_URI`, and any others required.

5. Start the server:
   ```bash
   npm start
   ```

## 📂 Project Structure

- **`app.js`**: Main entry point of the application.
- **`config/`**: Configuration files for databases and environment setup.
- **`src/`**: Contains source code (e.g., routes, controllers, models).
- **`public/`**: Static files served by the backend.

## 📦 Dependencies

- `express`: Web framework for building RESTful APIs.
- `mongoose`: MongoDB object modeling.
- `sqlite3`: SQLite database integration.
- `dotenv`: Environment variable management.
- `bcryptjs`: Password hashing.
- `jsonwebtoken`: Secure token-based authentication.

##  A

This project is created for educational purposes. Feel free to use it.

---

Happy Coding! 🍕
